import Header from "@common/Header/Header";
import articleDetails from "@content/article-details.json";
import {IonContent, IonGrid, IonPage, IonRow, IonText} from "@ionic/react";
import React from "react";
import {useLocation} from "react-router";

export const ArticleDetails = (a:Article) => {
  const location = useLocation();
  // @ts-ignore
  const article = location?.state?.article || a.a;
  if (!article) return <div>No article found.</div>;

  return (
    <IonPage>
      <Header title={"Article Source Title"} inModal={true} />
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonText color={"light"}>
              <h1>{article.title}</h1>
              <p>
                {articleDetails.writtenBy}
                {article.author}
                <br />
                {articleDetails.createdDate}
                {new Date(article.publishedDate).toLocaleString()}
              </p>
            </IonText>
          </IonRow>
          <IonRow>
            <img
              alt={"security-thumbnail"}
              src={article.media}
              style={{ border: "1px solid black" }}
            />
          </IonRow>
          <IonRow>
            <IonText color={"light"}>
              <h3>{article.description}</h3>
            </IonText>
          </IonRow>
          <IonRow>
            <IonText color={"light"}>
              <p>{article.summary}</p>
            </IonText>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
