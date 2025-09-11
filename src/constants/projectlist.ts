export interface Project {
  name: string;
  website: string;
  github: string | null;
  tech: string[];
}

export const projectlist: Project[] = [
  {
    name: "OSCEai Pro",
    website: "https://osceaipro.com",
    github: null,
    tech: ["NextJS", "Tailwind CSS", "OpenAI", "NeonDB"],
  },
  {
    name: "Petite URL",
    website: "https://petite.forestp.dev",
    github: null,
    tech: ["NextJS", "BetterAuth", "NeonDB"],
  },
  {
    name: "Sharewear",
    website: "https://sharewearprofile.com",
    github: null,
    tech: ["NextJS", "Tailwind CSS", "NeonDB", "tRPC"],
  },
  {
    name: "Software Developers Calgary",
    website: "https://sdc.fyi/",
    github: null,
    tech: ["NextJS", "Tailwind CSS", "NeonDB", "tRPC"],
  },
  {
    name: "Terminal Portfolio",
    website: "https://terminal.forestp.dev",
    github: "https://github.com/foresthpark/terminal-portfolio",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "Music Player Prototype",
    website: "https://arcadia.forestp.dev",
    github: null,
    tech: ["NextJS", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    name: "Keto Clock",
    website: "https://www.ketoclock.com",
    github: null,
    tech: [
      "React Native",
      "MongoDB",
      "Apollo Server",
      "Serverless",
      "Redux Toolkit",
    ],
  },
  // {
  //   name: "EMCO Energy",
  //   website: "https://emcoenergy.com",
  //   github: null,
  //   tech: ["NextJS", "MongoDB", "Firebase", "Lambda", "EC2", "DynamoDB"],
  // },
  {
    name: "Greengate Energy VR Experience",
    website: "https://youtu.be/3OQSe2HRfJI",
    github: "",
    tech: ["Unreal Engine 4"],
  },
  // {
  //   name: "URL Shortener",
  //   website: "https://tinyurl.forestparkdev.ca",
  //   github: "https://github.com/foresthpark/tiny_url_maker",
  //   tech: ["S3", "Lambda", "API Gateway", "DynamoDB", "Route 53"],
  // },
  {
    name: "ClicBitz",
    website: "https://clicbitz.com/",
    github: null,
    tech: ["Flutter", "Firebase"],
  },
  {
    name: "Google Gram",
    website: "https://forest-firegram.web.app",
    github: "https://github.com/foresthpark/google_gram",
    tech: ["NextJS", "Firebase", "Clarifai"],
  },
  {
    name: "PaintJS",
    website: "https://foresthpark.github.io/PaintJS",
    github: "https://github.com/foresthpark/PaintJS",
    tech: ["HTML", "CSS", "JS"],
  },
];
