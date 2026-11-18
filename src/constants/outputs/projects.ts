import { projectlist } from "../projectlist";

export const projects = () => {
  return projectlist
    .map(({ name, website, github, tech, description }) => {
      const details = [name];
      if (website) {
        details.push(`[<a href="${website}" target="_blank" rel="noopener noreferrer">Website</a>]`);
      }
      if (github) {
        details.push(`[<a href="${github}" target="_blank" rel="noopener noreferrer">GitHub</a>]`);
      }
      details.push(`[${tech.join(", ")}]`);
      if (description) {
        details.push(description);
      }
      return details.join(" - ");
    })
    .join("\n");
};
