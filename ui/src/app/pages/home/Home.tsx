import { Article } from "@/app/api/articleApi/ArticleTypes";
import { articleMockData } from "@/app/api/articleApi/mock-data/articleMockData";
import { buildElementId } from "@/app/utils/idUtils";
import { getTimePassedLabel } from "@/app/utils/timeUtils";
import gridLockImage from "@assets/grid-lock.jpeg";
import Button from "@common/Button/Button";
import Header from "@common/Header/Header";
import InfoCard from "@common/InfoCard/InfoCard";
import "./HomeStyles.css";
import homeContent from "@content/home.json";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonNav,
  IonNavLink,
  IonPage,
  IonRow,
  IonSearchbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel,
    IonPage,
    IonRow,
    IonSearchbar, IonText, IonTitle,
} from "@ionic/react";
import { sparkles, star, syncCircle } from "ionicons/icons";
import React, {useEffect, useState} from "react";
import { ArticleDetails } from "@pages/article-details/ArticleDetails";
import { sparkles, syncCircle, timeSharp } from "ionicons/icons";
import React, { ReactNode, useState } from "react";
import { CriticalNews } from "./components/CriticalNews";
import axios from "axios";

export const Home: React.FC = () => {

  const [criticalArticles, setCriticalArticles] = useState<Article[]>([]);
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);
  const [isFetching, setIsFetching] = useState(true);
  const [page, setPage] = useState(1);
  const baseUrl = 'http://localhost:8000/articles/';
  // const baseUrl = 'https://threat-watch.onrender.com/articles/';

  useEffect(() => {
    const url = baseUrl+'critical';
    axios.get(url).then((r: any)=>{
      // console.log(r.data);
      setCriticalArticles(r.data);
    }).catch(err=>console.log(err));
  },[]);

  const getNewsArticles = () => {
      const url = baseUrl+'get';
      axios.get(url,{params:{page:page}}).then((r: any)=>{
          // console.log(r.data);
          const articlesNew = [...newsArticles, ...r.data];
          setNewsArticles(articlesNew);
    }).catch(err=>console.log(err));
      setPage(page+1);
  }

    useEffect(() => {
        if(isFetching){
            getNewsArticles();
            setIsFetching(false);
        }
    },[isFetching]);

    // TODO: Add bookmark functionality
    // TODO: Implement search functionality

  const onArticleClick = (id: string) => {
      console.log('clicked article with id: ', id);
  }

  const handleSearchChange = () => {};
  // const handleFavorite = (id: string) => () => {
  //   setArticles((list) =>
  //     list.map((article) => {
  //       if (article._id !== id) return article;
  //       return { ...article, isFavorite: !article.isFavorite };
  //     }),
  //   );
  // };

  const renderCriticalNews = ({ title, _id, media }: Article) => (
    <IonCard
      className={"ion-no-margin ion-margin-end"}
      key={_id}
      style={{
          maxWidth: "15rem",
          maxHeight: "20rem",
          height:"100%",
      }}
      data-testid={`${testId.criticalNewsArticle}-${_id}`}
    >
      <img
        alt="security-thumbnail"
        src={media || lockSecurityImage}
        style={{
          width: "100%",
          maxHeight: "40%",
          objectFit: "contain"
        }}
      />

      <IonCardHeader>
        <IonRow>
            <IonCardTitle>{title}</IonCardTitle>
          <IonCol>
            {/*<Button*/}
            {/*  type="icon"*/}
            {/*  ariaLabel={`favorite-btn-${id}`}*/}
            {/*  classes={"small-square ion-float-right"}*/}
            {/*  ionButtonProps={{*/}
            {/*    size: "small",*/}
            {/*    shape: "round",*/}
            {/*    onClick: handleFavorite(id),*/}
            {/*  }}*/}
            {/*  ionIconProps={{*/}
            {/*    icon: star,*/}
            {/*    size: "small",*/}
            {/*    color: isFavorite ? "yellow" : "",*/}
            {/*  }}*/}
            {/*/>*/}
          </IonCol>
        </IonRow>
      </IonCardHeader>
    </IonCard>
  );

  const renderNews = ({ title, _id, media }: Article) => (
      <IonCol size="6" key={_id}>
    <IonCard
      className={"ion-no-margin ion-margin-end"}
      style={{
          height:"100%",
        maxHeight: "20rem",
      }}
      data-testid={`${testId.criticalNewsArticle}-${_id}`}
      onClick={()=>onArticleClick(_id)}
    >
      <img
        alt="security-thumbnail"
        src={media || lockSecurityImage}
        style={{
          width: "100%",
          maxHeight: "40%",
          objectFit: "contain"
        }}/>

      <IonCardHeader>
        <IonRow>
          <IonCol>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCol>
          {/*<IonCol>*/}
          {/*  <Button*/}
          {/*    type="icon"*/}
          {/*    ariaLabel={`favorite-btn-${id}`}*/}
          {/*    classes={"small-square ion-float-right"}*/}
          {/*    ionButtonProps={{*/}
          {/*      size: "small",*/}
          {/*      shape: "round",*/}
          {/*      onClick: handleFavorite(id),*/}
          {/*    }}*/}
          {/*    ionIconProps={{*/}
          {/*      icon: star,*/}
          {/*      size: "small",*/}
          {/*      color: isFavorite ? "yellow" : "",*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</IonCol>*/}
        </IonRow>
      </IonCardHeader>
    </IonCard>
      </IonCol>
  );
  const handleDownload = (id: number) => {
    setArticles((list) =>
      list.map((article) => {
        if (article.id !== id) return article;
        return { ...article, isDownloaded: !article.isDownloaded };
      }),
    );
  };

  const criticalArticles = articles.filter((article) => article.isCritical);
  const nonCriticalArticles = articles.filter((article) => !article.isCritical);

  const navLinkWrapper = (articleId: number) => (child: ReactNode) => (
    <IonNavLink
      routerDirection={"forward"}
      component={() => <ArticleDetails id={articleId} url={"article"} />}
    >
      {child}
    </IonNavLink>
  );
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonGrid className={""}>
          <IonRow
            className={"ion-align-items-center"}
            data-testid={testId.homeSearchRow}
          >
            <IonCol size={"2"}>
              <Button
                type="icon"
                ariaLabel={"search-reload"}
                classes={"default-square"}
                ionIconProps={{ icon: syncCircle }}
              />
            </IonCol>
            <IonCol>
              <IonSearchbar
                aria-label="home-search-input"
                animated={true}
                placeholder={homeContent.searchPlaceholder}
                debounce={500}
                onIonInput={handleSearchChange}
                className={"custom"}
              ></IonSearchbar>
            </IonCol>
            <IonCol size={"2"}>
              <Button
                type="icon"
                ariaLabel={"sparkles-placeholder-aria-label"}
                classes={"ion-float-right default-square"}
                ionIconProps={{ icon: sparkles }}
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <CriticalNews articles={articles} render={renderNewsArticles} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

const prefixId = (section: string, element: string) =>
  buildElementId("home", section, element);
export const testId = {
  criticalNewsArticle: prefixId("critical-news", "article"),
  homeSearchRow: prefixId("search-bar", "row"),
};
