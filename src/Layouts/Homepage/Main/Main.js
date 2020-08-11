import React, {useState, useEffect} from "react";
import firebase from '../../../config/firebase';
import  ImageBackgroud from "../../ImageBackground/imagebackgroup";
import FeatureCard from '../FeatureCard/featureCard';
import  Loading from "../../../components/Loading/Loading";
import classes from "./Main.module.css";





export default function Main () {

  const [docState, setDocState] = useState({
    isLoading: true,
    article: null
  });

  useEffect(() => {
    async function fetchData() {
      await firebase.firestore().collection('HomePage').doc('home')
      .get()
      .then(doc => {
      setDocState({
        isLoading: false,
        article: doc.data() 
      });
    });
    }
    fetchData(); 
  }, []);

    return (
        <>
      {docState.isLoading && <Loading />}
       {docState.article && <> <ImageBackgroud  topic={docState.article.topic} url={docState.article.url} ></ImageBackgroud>
       <i className={'fas fa-chevron-down '+ classes.center}  style={{fontSize:'36px'}}></i> </>
       }
       
      <div className={classes.docker + " " +classes.center }>

       {docState.article && 
        docState.article.feature.map((data, index) => (
       <FeatureCard key={index}  name={data.name} id={data.id} collection={data.title} ></FeatureCard>  
      ))}

</div>
       

    </>)
}