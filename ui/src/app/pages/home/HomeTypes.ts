// need one for API response, another for state
export interface Article {
  id: number;
  title: string;
  isCritical: boolean;
  isFavorite: boolean;
  summary: string;
  text: string;
  createdBy: string;
  createdDate: string;
  updatedDate: string;
  similarArticles?: number[];
}
