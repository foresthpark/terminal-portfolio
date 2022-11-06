import { getQuote } from "@/apis/getQuote";
import * as cow from "cowsay-browser";

export const cowsay = async (): Promise<string> => {
  const quote = await getQuote();
  return cow.say({ text: quote });
};
