import { getQuote } from "@/apis/getQuote";

export const quote = async (): Promise<string> => {
  const quote = await getQuote();
  console.log("😂😂😂 ~ file: quote.ts ~ line 5 ~ quote ~ quote", quote);

  return quote;
};
