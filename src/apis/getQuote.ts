import axios from "axios";

export const getQuote = async () => {
  const { data } = await axios.get("https://api.quotable.io/random");

  return `“${data.content}” — ${data.author}`;
};
