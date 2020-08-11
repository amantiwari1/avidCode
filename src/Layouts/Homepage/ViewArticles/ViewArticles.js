import React , {useEffect, useState } from 'react';
import  classes from "./ViewArticles.module.css";
import  "./ViewArticles.module.css";
import { withRouter, useParams,Link } from "react-router-dom";
import firebase from '../../../config/firebase';
import ReactMarkdown  from 'react-markdown';
import Loading from "../../../components/Loading/Loading";
import ArticleCard from "../../../components/ArticleCard/ArticleCard";
import {Button, Col, Row} from 'react-bootstrap';

  

function ViewArticles(props) {  
  


  const [data, setLists] = useState([]);

  const [docState, setDocState] = useState({
    isLoading: true,
    article: null
  });

  const {nametech,id,nametools} = useParams();







  useEffect(() => {
    async function fetchData() {
      await firebase.firestore().collection(nametools).doc(id)
      .get()
      .then(doc => {
      setDocState({
        isLoading: false,
        article: doc.data() 
      });

    });
    }
    fetchData(); 
  }, [id,nametools]);
  
  useEffect(() => {
    async function fetchData() {

      let article = [];
      await firebase
        .firestore()
        .collection(nametools).limit(3).get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              article.push({
                id: doc.id,
                ...doc.data()})
          });
          setLists(article)
      });
    }
fetchData(); 
  }, [nametools])




    const timeToString = (ts) => {
        const date = new Date(ts*1000)
        return date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() 
    }

  
    return <>
      {docState.isLoading && <Loading />}
      {docState.article && 
                <>
        <div className={classes.Article}>
            <div className={classes.ImageContainer}>
                    <img
                    className={classes.Image}
                    src={docState.article.featureImage}
                    alt={docState.article.title}
                    />
                </div>
                
                <div className={classes.ArticleInfo}>
                <h1 className={classes.Title}>
                        {docState.article.title}
                </h1>
                <div className={classes.Date}>
                {timeToString(docState.article.lastModified.seconds)}
                </div>
            
            <div className={classes.ArticleMain} >
              
              <ReactMarkdown
              source={docState.article.content.replaceAll('_n', "\n")}
              escapeHtml={false}
              >

              </ReactMarkdown>
            </div>

            <div className={classes.center}>

          <h4>Related to this Topics</h4>
        
        {
            data.map((getdata, index) => (
              id !== getdata.id ?
              <ArticleCard
                key={index}
                data={getdata}
                />
                :
                null
                ))
              }
              <br />
              <Row>
                <Col lg={2}></Col>
                <Col lg={8} > 
                <Link
                  style={{ color: "darkseagreen", textDecoration: "inherit" }}
                  to={`/tech/${nametech}/${nametools}/`}>
                <Button variant="outline-info"  size='lg' block>Check More Topics</Button>
                </Link>
                </Col>
                <Col lg={2}></Col>
              </Row>
              <hr />

              </div>
            </div>
        </div>

                    
                </>}
    </>
  
    
}

export default withRouter(ViewArticles);