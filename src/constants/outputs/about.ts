import { escapeHtml, getProfile } from "../profile";

export const about = async () => {
  const profile = await getProfile();
  return `
  ███████╗ ██████╗ ██████╗ ███████╗███████╗████████╗
  ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝
  █████╗  ██║   ██║██████╔╝█████╗  ███████╗   ██║
  ██╔══╝  ██║   ██║██╔══██╗██╔══╝  ╚════██║   ██║
  ██║     ╚██████╔╝██║  ██║███████╗███████║   ██║
  ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝


  ██████╗  █████╗ ██████╗ ██╗  ██╗
  ██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝
  ██████╔╝███████║██████╔╝█████╔╝
  ██╔═══╝ ██╔══██║██╔══██╗██╔═██╗
  ██║     ██║  ██║██║  ██║██║  ██╗
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝

${profile
  ? escapeHtml(`Based in ${profile.location}. ${profile.summary}`)
  : "My profile is temporarily unavailable."}

Type resume to open my full CV.


`;
};
