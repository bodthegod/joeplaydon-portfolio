"use client";

import { mailchimp } from "@/app/resources";
import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Background,
} from "@/once-ui/components";
import { useState } from "react";
import { useTranslations } from "next-intl";

function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
  url: string;
};

export const Substack = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const t = useTranslations();

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Redirect to Substack with email pre-filled
      window.open(
        `${newsletter.url}?email=${encodeURIComponent(email)}`,
        "_blank"
      );
    }
  };

  return (
    <Flex
      style={{ overflow: "hidden" }}
      position="relative"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      direction="column"
      alignItems="center"
      align="center"
      background="surface"
      border="neutral-medium"
      borderStyle="solid-1"
    >
      <Background
        position="absolute"
        mask={mailchimp.effects?.mask as any}
        gradient={mailchimp.effects?.gradient as any}
        dots={mailchimp.effects?.dots as any}
        lines={mailchimp.effects?.lines as any}
      />
      <Heading
        style={{ position: "relative" }}
        marginBottom="s"
        variant="display-strong-xs"
      >
        {newsletter.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Flex fillWidth maxWidth={24} gap="8">
          <Input
            id="email"
            formNoValidate
            labelAsPlaceholder
            type="email"
            label="Email"
            required
            onChange={(e) => {
              if (error) {
                handleChange(e);
              } else {
                debouncedHandleChange(e);
              }
            }}
            onBlur={handleBlur}
            error={error}
          />
          <Flex height="48" alignItems="center">
            <Button type="submit" size="m" fillWidth>
              {t("newsletter.button")}
            </Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};
