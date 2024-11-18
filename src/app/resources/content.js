import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Joe",
  lastName: "Playdon",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front End Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about psychology within development, and share my
      take on the intersection of psychology and technology.
    </>
  ),
  url: "https://substack.com/@joeplaydon",
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bodthegod",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/joe-playdon-882a58231/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:joeplaydon@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front End Engineer</>,
  subline: (
    <>
      I'm Joe, a Front End Engineer at <InlineCode>Havona</InlineCode>, where I
      craft intuitive
      <br /> user experiences. After hours, I enjoy researching and building{" "}
      <br /> with the latest tech.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/joeplaydon",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Joe is a Front End Engineer with a lifelong passion for design and
        detail, specializing in building responsive, user-centric web
        applications. With expertise in React, TypeScript, and modern frontend
        frameworks, he bridges the gap between design and functionality to
        create seamless digital experiences.
        <br />
        <br />
        Currently at Havona, he focuses on developing scalable solutions while
        staying at the forefront of web technologies. Mentored by senior
        developers from billion-dollar companies like Wintermute and Ethena, Joe
        has learned enterprise-level best practices that he combines with
        creative problem-solving to deliver intuitive interfaces that users
        love, with love.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Havona",
        timeframe: "Aug 2023 - Present",
        role: "Front End Engineer",
        achievements: [
          <>
            Led the complete UI/UX overhaul of Havona's MVP, contributing to the
            company winning the GTR Asia Tradetech Showcase Award and securing
            £180k in seed funding.
          </>,
          <>
            Successfully integrated Corda 5 blockchain technology with the
            frontend architecture, enabling secure, real-time transaction
            processing and distributed ledger functionality across the platform.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Waterman Environmental Services",
        timeframe: "Jul 2023 - Sep 2023",
        role: "Junior Software Developer",
        achievements: [
          <>
            Developed and implemented a KPI dashboard system using PHP and SQL,
            providing real-time business metrics visualization and automated
            daily reports to key stakeholders, improving data-driven decision
            making.
          </>,
          <>
            Engineered an automated PDF report generation system for 12
            different engineer roles, successfully digitalizing the business
            workflow and improving operational efficiency through mobile app
            integration.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Code Institute",
        description: <>Studied Full Stack Software Development.</>,
      },
      {
        name: "South Staffordshire College",
        description: <>Studied level 3 Extended Diploma in IT.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in <InlineCode>React</InlineCode>,{" "}
            <InlineCode>TypeScript</InlineCode>, and{" "}
            <InlineCode>Next.js</InlineCode>, with experience building
            enterprise-level applications. Skilled in modern state management
            and performance optimization techniques.
          </>
        ),
        images: [], // Add relevant project screenshots
      },
      {
        title: "UI/UX & Design Systems",
        description: (
          <>
            Expert in implementing responsive designs and building component
            libraries. Experienced with <InlineCode>Figma</InlineCode> and
            design system architecture using <InlineCode>Ant Design</InlineCode>{" "}
            and custom UI frameworks.
          </>
        ),
        images: [], // Add UI/UX work screenshots
      },
      {
        title: "Blockchain Integration",
        description: (
          <>
            Experience integrating Corda 5 blockchain technology with frontend
            applications, implementing secure transaction processing and
            distributed ledger functionality.
          </>
        ),
        images: [], // Add relevant screenshots
      },
      {
        title: "Development Tools",
        description: (
          <>
            Proficient with <InlineCode>Git</InlineCode>and modern development
            workflows. Experienced in agile methodologies and collaborative
            development using tools like <InlineCode>GitHub</InlineCode> and{" "}
            <InlineCode>JIRA</InlineCode>.
          </>
        ),
        images: [], // Optional
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about my journey in tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };
