export interface IEpisode {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  description?: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
}
