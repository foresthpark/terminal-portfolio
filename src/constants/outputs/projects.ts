import { escapeHtml, getProfile } from "../profile";
import { projectlist } from "../projectlist";

export const projects = async () => {
  const profile = await getProfile();
  const sharedProjects = profile?.projects.map(({ url, ...project }) => ({
    ...project,
    website: url,
  })) ?? [];
  const localProjects = projectlist.filter(
    ({ name }) => !sharedProjects.some((project) => project.name === name),
  );
  const rows = [...sharedProjects, ...localProjects].map(
    ({ name, website, github, tech, description }) => {
      const details = [escapeHtml(name)];
      if (website) {
        details.push(`[<a href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">Website</a>]`);
      }
      if (github) {
        details.push(`[<a href="${escapeHtml(github)}" target="_blank" rel="noopener noreferrer">GitHub</a>]`);
      }
      details.push(`[${escapeHtml(tech.join(", "))}]`);
      if (description) {
        details.push(escapeHtml(description));
      }
      return details.join(" - ");
    },
  );
  if (!profile) {
    rows.unshift("Shared projects are temporarily unavailable. Type resume to open my full CV.");
  }
  return rows.join("\n");
};
