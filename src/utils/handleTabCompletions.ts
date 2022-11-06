import type { ICommandSubmit } from "@/pages";
import type { UseFormSetValue } from "react-hook-form";
import * as outputs from "../constants/outputs";

export const handleTabCompletion = (
  command: string,
  setCommand: UseFormSetValue<ICommandSubmit>
) => {
  const commands = Object.keys(outputs).filter((entry) =>
    entry.startsWith(command)
  );

  if (commands.length === 1) {
    setCommand("command", (commands[0] || "").trim());
  }

  return;
};
