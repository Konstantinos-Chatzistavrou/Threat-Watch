// need one for API response, another for state
export interface Article {
  _id: string;
  media: string;
  source: string;
  author: string;
  description: string;
  url: string;
  title: string;
  country:string;
  language:string;
  isCritical: boolean;
  isBookmarked: boolean;
  isDownloaded: boolean;
  summary: string;
  text: string;
  createdBy: string;
  publishedDate: Date;
}
