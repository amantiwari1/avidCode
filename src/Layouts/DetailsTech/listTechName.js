import React, {useState, useEffect} from "react";
import { useParams, withRouter } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import firebase from '../../config/firebase';
import Loading from "../../components/Loading/Loading";
import classes from "./listTechName.module.css";




function ListTechName () {
      const [data, setLists] = useState([]);
      const {nametools} = useParams(); 
      const [isLoading, setLoading] = useState(true) 

      useEffect(() => {
        async function fetchData() {

          let article = [];
          await firebase
            .firestore()
            .collection(nametools).get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  article.push({
                    id: doc.id,
                    ...doc.data()})
              });
              setLists(article)
              setLoading(false)
          });
        }
    fetchData(); 
      }, [nametools])
      

    return (
        <div className={classes.center}>
        {isLoading ?
         <Loading />
         :
         null
        
        }
        {
            data.map((getdata, index) => (
                <ArticleCard
                key={index}
                data={getdata}
                />
            ))
        }
        
    </div>)
}

export default withRouter(ListTechName);