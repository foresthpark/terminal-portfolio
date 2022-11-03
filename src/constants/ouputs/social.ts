import { config } from "@/constants/config";

export const github = async (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return "Opening github...";
};

export const linkedin = async (): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return "Opening linkedin...";
};
