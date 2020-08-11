import React from "react";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import classes from './ArticleCard.module.css';

const timeToString = (ts) => {
    const date = new Date(ts * 1000)
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
}

const ArticleCard = (props) => {
    const { shortText,id, title, categoryLabel, createDate, featureImage } = props.data
    return (
        <Card
            bg="dark"
            text="white"
            className={classes.ArticleCard + " text-center"}>
            <Link onClick={
                window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth'
                  })
            }
                style={{ color: "darkseagreen", textDecoration: "inherit" }}
                to={`${id}`}>
                <Card.Img
                    top='true'
                    width="100%"
                    src={featureImage}
                    alt="Card Image"
                    className={classes.CardImage}
                />
            </Link>

            <Card.Body className={classes.CardBody}>

                <Card.Title className={classes.CardTitle}>
                    <Link
                        onClick={
                            window.scroll({
                                top: 0, 
                                left: 0, 
                                behavior: 'smooth'
                              })
                        }
                        style={{ color: "darkseagreen", textDecoration: "inherit" }}
                        to={`${id}`}>
                        {title}
                    </Link>
                </Card.Title>
                <Card.Text className={classes.Text}>
                    {shortText}
               </Card.Text>
                <Card.Subtitle
                    className={classes.CardSubtitle}>
                    <Badge className={classes.ArticleLabel}>
                        {categoryLabel}
                    </Badge>
                    <Badge className={classes.createDate}>

                        {timeToString(createDate.seconds)}
                    </Badge>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard;