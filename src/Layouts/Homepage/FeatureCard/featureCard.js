import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import classes from './ArticleCard.module.css';
import firebase from "../../../config/firebase";
import {Spinner } from "react-bootstrap";


const timeToString = (ts) => {
    const date = new Date(ts*1000)
    return date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() 
}

const FeatureCard = (props) => {
  const [docState, setDocState] = useState({
    isLoading: true,
    article: null
  });


    
  useEffect(() => {
    async function fetchData() {
      await firebase.firestore().collection(props.collection).doc(props.id)
      .get()
      .then(doc => {
      setDocState({
        isLoading: false,
        article: doc.data() 
      });
    });
    }
    fetchData(); 
  }, [props.collection, props.id]);

return ( <>
      {docState.isLoading &&  
      <Card 
      bg="dark"
      text="white"
      className={classes.ArticleCard+" text-center"}>
      <Card.Body className={classes.CardBody}>
        <Spinner animation="grow" variant="primary" />
      </Card.Body>
      </Card>  
        }

      { docState.article &&
            
            <Card 
            bg="dark"
            text="white"
            className={classes.ArticleCard+" text-center"}>
            <Link 
            
            style={{color: "darkseagreen", textDecoration:"inherit"}}

            to={`tech/${props.name}/${props.collection}/${props.id}`}>
            <Card.Img 
                top='true'
                width="100%"
                src={docState.article.featureImage}
                alt="Card Image"
                className={classes.CardImage}
            />
            </Link>

            <Card.Body className={classes.CardBody}>

                <Card.Title className={classes.CardTitle}> 
                <Link
                
                style={{color: "darkseagreen", textDecoration:"inherit"}}

                to={`tech/${props.name}/${props.collection}/${props.id}`}>
                {docState.article.title}
                </Link> 
                </Card.Title>
                <Card.Subtitle 
                className={classes.CardSubtitle}>
            <Badge className={classes.ArticleLabel}>
                    {docState.article.categoryLabel}
                    </Badge>
            <Badge className={classes.createDate}>
                        {timeToString(docState.article.createDate.seconds )}
                    </Badge>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    }
    </>
    )
}

export default FeatureCard;