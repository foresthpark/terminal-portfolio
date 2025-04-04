import axios from "axios";

export const getQuote = async () => {
  const { data } = await axios.get("https://quotes-api-self.vercel.app/quote");

  return `“${data.quote}” — ${data.author}`;
};
