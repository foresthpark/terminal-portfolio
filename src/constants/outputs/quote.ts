import { getQuote } from "@/apis/getQuote";

export const quote = async (): Promise<string> => {
  const quote = await getQuote();

  return quote;
};
