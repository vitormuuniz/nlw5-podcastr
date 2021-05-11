import { ReactNode } from "react";

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
  play: (episode: Episode) => void;
  playList: (episodeList: Episode[], episodeIndex: number) => void;
  isPlaying: boolean;
  toggleShuffle: () => void;
  isShuffling: boolean;
  togglePlay: () => void;
  isLooping: boolean;
  toggleLoop: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setPlayingState: (state: boolean) => void;
  clearPlayerState: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
};

export type PlayerContextProviderProps = {
  children: ReactNode;
};
