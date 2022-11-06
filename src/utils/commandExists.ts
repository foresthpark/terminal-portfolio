import * as outputs from "@/constants/outputs";

export default function commandExists(command: string): boolean {
  const commands = ["clear", ...Object.keys(outputs)];
  return command
    ? commands?.indexOf(command?.split(" ")[0] ?? "") !== -1
    : false;
}
