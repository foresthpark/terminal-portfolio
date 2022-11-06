import { playlists } from "../playlists";
import selectRandomElementFromArray from "../utils/selectRandomElementFromArray";

export const music = async (): Promise<string> => {
  window.open(selectRandomElementFromArray(playlists));
  return "Opening Spotify...";
};
