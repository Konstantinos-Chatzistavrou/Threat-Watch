import { Article } from "@/app/api/articleApi/ArticleTypes";
import { bookmarkedArticleMockData } from "@/app/api/articleApi/mock-data/bookmarkedArticleMockData";
import { EditCardList } from "@common/EditCardList";
import bookmarksContent from "@content/bookmarks.json";
import "./Bookmarks.css";
import React, { useState } from "react";

export const Bookmarks: React.FC = () => {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Article[]>(
    bookmarkedArticleMockData,
  );
  const [selectedArticles, setSelectedArticles] = useState<
    Record<number, boolean>
  >({});
  const handleArticledSelected = (articleId: number, checked: boolean) => {
    setSelectedArticles((prev) => ({ ...prev, [articleId]: checked }));
  };

  const handleRemovedBookmarks = () => {
    setBookmarkedArticles((prev) =>
      prev.filter((article) => !selectedArticles[article.id]),
    );
    setSelectedArticles({});
  };

  const clearSelectedArticles = () => {
    setSelectedArticles({});
  };

  return (
    <EditCardList
      cardItemsData={bookmarkedArticles.map(({ id, title, createdDate }) => ({
        id,
        title,
        date: createdDate,
      }))}
      handleRemoveItem={handleRemovedBookmarks}
      alertHeaderMessage={bookmarksContent.alertConfirmation}
      removeButtonText={bookmarksContent.removeArticlesButton}
      handleSelected={handleArticledSelected}
      selectedItems={selectedArticles}
      clearSelectedItems={clearSelectedArticles}
    />
  );
};
