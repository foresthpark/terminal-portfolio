export interface Project {
  name: string;
  website?: string;
  description?: string;
  github: string | null;
  tech: string[];
}

export const projectlist: Project[] = [
  {
    name: "Grain Issue",
    description:
      "A multi-tenant client portal for photography studios with booking, galleries, and print orders.",
    github: null,
    website: "https://grainissue.com",
    tech: [
      "React 19",
      "TanStack Router",
      "Vite",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Hono",
      "Drizzle ORM",
      "PostgreSQL",
      "Fly.io",
      "Stripe Billing",
      "Stripe Connect",
      "Cloudflare R2",
    ],
  },
  {
    name: "OSCEai Pro",
    description:
      "AI-assisted OSCE practice with real-time cases, automated feedback, and progress tracking.",
    website: "https://osceaipro.com",
    github: null,
    tech: [
      "NextJS",
      "Shadcn UI",
      "OpenAI",
      "NeonDB",
      "tRPC",
      "BetterAuth",
      "Stripe",
    ],
  },
  {
    name: "Care Carry",
    description:
      "A marketplace for Canadian families to find and book certified in-home caregivers.",
    website: "https://care-carry.forestp.dev",
    github: null,
    tech: [
      "NextJS",
      "Shadcn UI",
      "OpenAI",
      "NeonDB",
      "tRPC",
      "NextAuth",
      "Stripe",
    ],
  },
  {
    name: "Roll Lab",
    website: "https://rolllab.app",
    github: null,
    tech: [
      "React Vite",
      "Tailwind CSS",
      "React Native",
      "NeonDB",
      "Drizzle ORM",
    ],
  },
  {
    name: "What's In the Bag",
    description:
      "A photo-first app for reviewing and managing Too Good To Go surprise bags.",
    website: "https://whatsinthebag.app",
    github: null,
    tech: [
      "React Vite",
      "React Native",
      "Tailwind CSS",
      "NeonDB",
      "Drizzle ORM",
    ],
  },
  // {
  //   name: "Petite URL",
  //   website: "https://petite.forestp.dev",
  //   github: null,
  //   tech: ["NextJS", "Shadcn UI", "BetterAuth", "NeonDB"],
  // },
  {
    name: "Sharewear",
    description: "An NFC-enabled networking app for sharing contact details.",
    website: "https://sharewearprofile.com",
    github: null,
    tech: ["NextJS", "Shadcn UI", "NeonDB", "tRPC"],
  },
  {
    name: "Software Developers Calgary",
    description:
      "A community platform for learning, events, and mini hackathons.",
    website: "https://sdc.fyi/",
    github: null,
    tech: ["NextJS", "Tailwind CSS", "NeonDB", "tRPC"],
  },
  {
    name: "Terminal Portfolio",
    description: "A portfolio presented as an interactive terminal.",
    website: "https://terminal.forestp.dev",
    github: "https://github.com/foresthpark/terminal-portfolio",
    tech: ["Next.js", "Tailwind CSS"],
  },
  // {
  //   name: "Music Player Prototype",
  //   website: "https://arcadia.forestp.dev",
  //   github: null,
  //   tech: ["NextJS", "Redux Toolkit", "Tailwind CSS"],
  // },
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
  // {
  //   name: "Google Gram",
  //   website: "https://forest-firegram.web.app",
  //   github: "https://github.com/foresthpark/google_gram",
  //   tech: ["NextJS", "Firebase", "Clarifai"],
  // },
  // {
  //   name: "PaintJS",
  //   website: "https://foresthpark.github.io/PaintJS",
  //   github: "https://github.com/foresthpark/PaintJS",
  //   tech: ["HTML", "CSS", "JS"],
  // },
];
