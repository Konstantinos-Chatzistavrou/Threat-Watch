import { Article } from "@/app/api/articleApi/ArticleTypes";
import { useGetApi } from "@/app/hooks/useGetApi";

export const ARTICLE_API_URL = "/api/article";

export const useGetArticles = () => {
  const { status, data, error } = useGetApi<Article[]>({
    url: ARTICLE_API_URL,
    config: {},
  });

  return {
    articleStatus: status,
    articleData: data,
    articleError: error,
  };
};

export const useGetArticleById = (articleId: number) => {
  const { status, data, error } = useGetApi<Article>({
    url: `${ARTICLE_API_URL}/${articleId}`,
    config: {},
  });

  return {
    articleStatus: status,
    articleData: data,
    articleError: error,
  };
};

export const useGetCriticalArticles = () => {
  const { status, data, error } = useGetApi<Article[]>({
    url: ARTICLE_API_URL,
    config: {
      critical: true,
    },
  });

  return {
    articleStatus: status,
    articleData: data,
    articleError: error,
  };
};
