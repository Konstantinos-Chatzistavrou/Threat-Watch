import { articleMockData } from "@/app/api/articleApi/mock-data/articleMockData";
import gridLockImage from "@assets/grid-lock.jpeg";
import Header from "@common/Header/Header";
import articleDetails from "@content/article-details.json";
import { IonContent, IonGrid, IonRow, IonText } from "@ionic/react";
import React from "react";

interface ArticleDetailsProps {
  id: number;
}

export const ArticleDetails = ({ id }: ArticleDetailsProps) => {
  const article = articleMockData.find((article) => article.id === id);

  if (!article) return <div>No article found.</div>;

  return (
    <>
      <Header title={"Article Source Title"} inModal={true} />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonText color={"light"}>
              <h1>{article.title}</h1>
              <p>
                {articleDetails.writtenBy}
                {article.createdBy}
                <br />
                {articleDetails.createdDate}
                {new Date(article.createdDate).toLocaleString()}
                <br />
                {article.updatedDate
                  ? `${articleDetails.updatedDate}${new Date(article.updatedDate).toLocaleString()}`
                  : undefined}
              </p>
            </IonText>
          </IonRow>
          <IonRow>
            <img
              alt={"security-thumbnail"}
              src={gridLockImage}
              style={{ border: "1px solid black" }}
            />
          </IonRow>
          <IonRow>
            <IonText color={"light"}>
              <p>{article.text}</p>
            </IonText>
          </IonRow>
          <IonRow>
            <IonText color={"light"}>
              <h3>{articleDetails.similarNews}</h3>
            </IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};
