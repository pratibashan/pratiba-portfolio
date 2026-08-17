import Image from "next/image";
import Header from "./components/Header";

const professionalSkills = {
  Frontend: [
    "React Native",
    "React",
    "Redux",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
  ],
  Mobile: [
    "iOS",
    "Android",
    "Deep Linking",
    "Push Notifications",
    "Accessibility (ADA/WCAG)",
  ],
  "Backend & APIs": ["Node.js", "Express.js", "REST APIs"],
  "Cloud & Monitoring": [
    "AWS Lambda",
    "API Gateway",
    "Parameter Store",
    "Firebase",
    "Splunk",
  ],
  "Testing & Tools": ["Appium", "BrowserStack", "Jest", "Cypress", "Git"],
  Methodologies: ["Agile Development", "CI/CD", "Production Support"],
};

const projectSkills = [
  "Next.js",
  "React",
  "React Native",
  "Expo",
  "TypeScript",
  "Node.js",
  "Amazon Cognito",
  "OAuth 2.0",
  "PKCE",
  "Expo SecureStore",
  "API Gateway",
  "AWS Lambda",
  "DynamoDB",
  "Amazon Bedrock",
  "Claude",
  "AWS IAM",
  "AWS SAM",
  "CloudFormation",
];

const experience = [
  {
    company: "MEDIFAST, INC.",
    title: "Software Engineer IV",
    dates: "Apr 2022 – Jul 2026",
    bullets: [
      "Delivered React Native features and enhancements supporting iOS and Android applications.",
      "Developed functionality integrating with APIs, Exigo services, and database-backed workflows.",
      "Enhanced deep-linking and user access experiences supporting secure navigation workflows.",
      "Implemented and maintained push notification functionality across iOS and Android platforms.",
      "Contributed to organizational reporting, team visibility, and React Native web compatibility initiatives.",
      "Participated in accessibility (ADA/WCAG) improvements including screen reader support, navigation enhancements, and focus management.",
      "Worked with AWS services including Lambda, API Gateway, and Parameter Store during feature development and operational investigations.",
      "Implemented Splunk monitoring and alerting solutions for critical APIs and application services.",
      "Investigated production incidents, API issues, Lambda failures, and mobile application crashes using Splunk and Firebase Crashlytics.",
      "Supported iOS and Android releases, production deployments, testing activities, and post-release stabilization.",
    ],
  },
  {
    company: "PAYPAL",
    title: "React Developer",
    dates: "Oct 2020 – Apr 2022",
    bullets: [
      "Developed and maintained React-based web applications supporting content creation and publishing workflows.",
      "Built reusable user interface components using React, Redux, JavaScript, and REST APIs.",
      "Implemented single-page application functionality, client-side routing, and state management solutions.",
      "Integrated frontend applications with backend services supporting content management and publishing processes.",
      "Collaborated with cross-functional teams to deliver scalable and maintainable user experiences.",
    ],
  },
  {
    company: "DEXTERITY INFOTECH",
    title: "Full Stack Web Developer",
    dates: "Apr 2020 – Oct 2020",
    bullets: [
      "Developed full-stack web applications using React, Node.js, Express, and MongoDB.",
      "Designed and implemented RESTful APIs supporting user authentication and profile management.",
      "Built frontend user interfaces and integrated backend services for social networking functionality.",
    ],
  },
  {
    company: "DXC TECHNOLOGY",
    title: "Full Stack Web Developer",
    dates: "Oct 2018 – Apr 2020",
    bullets: [
      "Developed and maintained enterprise web applications and business solutions.",
      "Built frontend and backend functionality using modern web technologies and database-driven applications.",
      "Integrated APIs and backend services supporting business workflows and operational processes.",
    ],
  },
  {
    company: "ELIXIR INFOTECH INC.",
    title: "Software Developer",
    dates: "Jan 2016 – Apr 2018",
    bullets: [
      "Developed web applications and business solutions using Microsoft technologies.",
      "Designed and implemented database-driven functionality and reporting solutions.",
      "Built and maintained backend services supporting business operations.",
    ],
  },
  {
    company: "RADIUS INFOSYSTEMS PRIVATE LIMITED",
    title: "Software Developer",
    dates: "2007 – 2008",
    bullets: [
      "Created Windows deployment packages and installation solutions using Wise Packaging Studio.",
      "Supported software packaging and deployment activities for enterprise Windows environments.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-950 text-slate-100">
        {/* Hero */}
        <section
          id="home"
          className="mx-auto flex max-w-6xl items-center px-6 pb-12 pt-16 sm:py-24 lg:py-32"
        >
          <div className="max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
              Senior Software Engineer
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Hello, I&apos;m Pratiba.
              <span className="mt-2 block">
                I Build Mobile &amp; Web Applications.
              </span>
            </h1>

            <p className="mt-7 max-w-4xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-8">
              React Native | React | TypeScript | Full Stack Development
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              10+ years of experience developing web and mobile applications
              across healthcare,{" "}
              <span className="whitespace-nowrap">e-commerce</span>, and
              enterprise domains.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="col-span-2 rounded-lg bg-violet-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-violet-400 sm:col-span-1 sm:px-6"
              >
                View Featured Project
              </a>

              <a
                href="https://www.linkedin.com/in/pratibashan/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 text-center font-semibold transition hover:border-violet-400 hover:text-violet-400 sm:px-6"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/pratibashan"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 text-center font-semibold transition hover:border-violet-400 hover:text-violet-400 sm:px-6"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-16 border-y border-slate-800 bg-slate-900/30"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
              About
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Summary
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
              Software Engineer with 10+ years of experience developing web and
              mobile applications across healthcare,{" "}
              <span className="whitespace-nowrap">e-commerce</span>, and
              enterprise domains. Experienced in React Native, React, Redux,
              JavaScript, and TypeScript with a strong background building and
              supporting iOS and Android applications. Skilled in frontend
              development, backend integrations, accessibility initiatives,
              production support, application modernization, and feature
              delivery from discovery through production release.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
                  Featured Project
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Engineering Delivery Hub
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  Full-stack web and mobile application for tracking engineering
                  initiatives, monitoring delivery health, identifying blockers,
                  and generating AI-powered project insights.
                </p>
              </div>

              <a
                href="https://github.com/pratibashan/engineering-delivery-hub"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 font-semibold text-violet-400 transition hover:text-violet-300"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project Screenshots */}
            <div className="mt-10 grid items-start gap-5 lg:grid-cols-[minmax(0,2.1fr)_minmax(260px,0.9fr)]">
              {/* Web Dashboard */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <div className="border-b border-slate-800 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                    Web Dashboard
                  </p>
                </div>

                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <Image
                    src="/projects/web-dashboard.png"
                    alt="Engineering Delivery Hub web dashboard showing project health and delivery status"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                  />
                </div>
              </div>

              {/* AI Insight */}
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <div className="border-b border-slate-800 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                    AI Delivery Insight
                  </p>
                </div>

                <div className="flex justify-center bg-slate-950 p-4">
                  <div className="relative h-125 w-full max-w-82.5 overflow-hidden rounded-xl">
                    <Image
                      src="/projects/mobile-ai-insight.png"
                      alt="Engineering Delivery Hub AI-powered project delivery insight"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 330px, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Architecture */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
              <div className="grid md:grid-cols-2">
                <article className="border-b border-slate-800 p-6 sm:p-8 md:border-b-0 md:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                    Web + Mobile
                  </p>

                  <h3 className="mt-4 text-xl font-semibold leading-7 text-white sm:text-2xl">
                    One backend. Two client applications.
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-400">
                    Next.js powers the web experience while React Native and
                    Expo provide the mobile client. Both applications use the
                    same AWS backend and protected project APIs.
                  </p>
                </article>

                <article className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                    Cloud + AI
                  </p>

                  <h3 className="mt-4 text-xl font-semibold leading-7 text-white sm:text-2xl">
                    Secure AWS serverless architecture.
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-400">
                    Cognito authentication, API Gateway JWT authorization,
                    Lambda, DynamoDB, and Amazon Bedrock with Claude provide
                    secure project management and AI-powered delivery insights.
                  </p>
                </article>
              </div>

              <div className="border-t border-slate-800 p-6 sm:p-8">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Technology Stack
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {projectSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-16 border-y border-slate-800 bg-slate-900/30"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
              Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Experience
            </h2>

            <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
              {experience.map((job) => (
                <article
                  key={`${job.company}-${job.dates}`}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {job.company}
                      </h3>

                      <p className="mt-1 text-base font-medium text-violet-400 sm:text-lg">
                        {job.title}
                      </p>
                    </div>

                    <p className="text-sm text-slate-400">{job.dates}</p>
                  </div>

                  <ul className="mt-6 space-y-3 sm:space-y-4">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
                      >
                        <span
                          className="mt-3.25 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                          aria-hidden="true"
                        />

                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
              Technical Skills
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies &amp; Tools
            </h2>

            <div className="mt-10 space-y-7 sm:mt-12 sm:space-y-8">
              {Object.entries(professionalSkills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {category}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-base"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="scroll-mt-16 border-y border-slate-800 bg-slate-900/30"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
              Education &amp; Certifications
            </p>

            <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-8 lg:grid-cols-2">
              {/* Education Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Education
                </h2>

                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold text-white">DigitalCrafts</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                      Full Stack Immersive Program, Full Stack Web Development
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Bharathidasan University
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
                      Bachelor of Engineering (Electrical &amp; Electronics
                      Engineering)
                    </p>
                  </div>
                </div>
              </div>

              {/* Certification Card */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Certifications
                </h2>

                <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                  <li className="flex gap-3">
                    <span
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                      aria-hidden="true"
                    />

                    <span>
                      MCAD/MCSD – Designing and Implementing Windows-Based
                      Applications
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                      aria-hidden="true"
                    />

                    <span>
                      MCAD/MCSD – Designing and Implementing Web Applications
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                      aria-hidden="true"
                    />

                    <span>
                      MCSE – Designing and Implementing Databases with Microsoft
                      SQL Server
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 sm:text-sm">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Connect
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
              Connect with me on LinkedIn, view my work on GitHub, or reach out
              by email.
            </p>

            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href="https://www.linkedin.com/in/pratibashan/"
                target="_blank"
                rel="noreferrer"
                className="col-span-2 rounded-lg bg-violet-500 px-5 py-3 font-semibold text-white transition hover:bg-violet-400 sm:col-span-1 sm:px-6"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/pratibashan"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-violet-400 hover:text-violet-400 sm:px-6"
              >
                GitHub
              </a>

              <a
                href="mailto:pratibashan@gmail.com"
                className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-violet-400 hover:text-violet-400 sm:px-6"
              >
                Email
              </a>
            </div>

            <p className="mt-7 text-sm text-slate-500 sm:mt-8">Spring, TX</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 px-6 py-7 text-center text-xs leading-6 text-slate-500 sm:py-8 sm:text-sm">
          © {new Date().getFullYear()} Pratiba Shan. Built with Next.js,
          TypeScript, and Tailwind CSS.
        </footer>
      </main>
    </>
  );
}
