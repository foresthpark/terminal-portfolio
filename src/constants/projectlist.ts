export interface Project {
  name: string;
  website: string;
  github: string | null;
  tech: string[];
}

export const projectlist: Project[] = [
  {
    name: "Terminal Portfolio",
    website: "https://terminal.forestp.dev",
    github: "https://github.com/foresthpark/terminal-portfolio",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    name: "URL Shortener",
    website: "https://u.forestp.dev",
    github: "https://github.com/foresthpark/shortlink_trpc",
    tech: ["NextJS", "PlanetScale DB", "tRPC"],
  },
  {
    name: "Music Player Prototype",
    website: "https://arcadia.forestp.dev",
    github: null,
    tech: ["NextJS", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    name: "Ketchup Wars",
    website: "https://ketchup.forestp.dev",
    github: "https://github.com/foresthpark/ketchup_wars",
    tech: ["NextJS", "PlanetScale DB"],
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
  {
    name: "EMCO Energy",
    website: "https://emcoenergy.com",
    github: null,
    tech: ["NextJS", "MongoDB", "Firebase", "Lambda", "EC2", "DynamoDB"],
  },
  {
    name: "Greengate Energy VR Experience",
    website: "https://youtu.be/3OQSe2HRfJI",
    github: "",
    tech: ["Unreal Engine 4"],
  },
  {
    name: "URL Shortener",
    website: "https://tinyurl.forestparkdev.ca",
    github: "https://github.com/foresthpark/tiny_url_maker",
    tech: ["S3", "Lambda", "API Gateway", "DynamoDB", "Route 53"],
  },
  {
    name: "Google Gram",
    website: "https://forest-firegram.web.app",
    github: "https://github.com/foresthpark/google_gram",
    tech: ["NextJS", "Firebase", "Clarifai"],
  },
  {
    name: "Inuka",
    website: "https://inuka.forestparkdev.ca",
    github: null,
    tech: ["Flutter", "Firebase"],
  },
  {
    name: "Expense Robot",
    website: "https://expenserobot.forestparkdev.ca/#/",
    github: null,
    tech: ["Flutter", "Firebase"],
  },
  {
    name: "PaintJS",
    website: "https://foresthpark.github.io/PaintJS",
    github: "https://github.com/foresthpark/PaintJS",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    name: "NYT Flutter Times",
    website: "https://nyt-flutter.firebaseapp.com/#/",
    github: "https://github.com/foresthpark/flutter_web_times",
    tech: ["Flutter"],
  },

  {
    name: "ClicBitz",
    website:
      "https://play.google.com/store/apps/details?id=com.buildr.clicbitz&hl=en_US",
    github: null,
    tech: ["Flutter", "Firebase"],
  },
];
