import * as outputs from "@/constants/ouputs";

export const help = async (): Promise<string> => {
  const commands = Object.keys(outputs).sort().join(", ");

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};
