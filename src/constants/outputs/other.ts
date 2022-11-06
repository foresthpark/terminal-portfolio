import * as outputs from "@/constants/outputs";

export const help = async (): Promise<string> => {
  const commands = Object.keys(outputs);
  const allCommands = ["clear", ...commands].sort().join(", ");

  return `Available commands:\n${allCommands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.`;
};
