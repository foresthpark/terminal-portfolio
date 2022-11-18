import type { Project } from "../projectlist";
import { projectlist } from "../projectlist";

export const projects = () => {
  return projectlist
    .map((project: Project) => {
      return `${project.name} - [<a href="${
        project.website
      }" target="_blank">Website</a>] ${
        project.github
          ? `- [<a href="${project.github}" target="_blank">Github</a>]`
          : ""
      }- [${project.tech.join(", ")}]`;
    })
    .join("\n");
};
