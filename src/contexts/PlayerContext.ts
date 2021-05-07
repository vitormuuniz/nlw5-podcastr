import { createContext } from "react";

export type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  durationAsString: string;
  url: string;
};

export type PlayerContextProps = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
};

export const PlayerContext = createContext({} as PlayerContextProps);
