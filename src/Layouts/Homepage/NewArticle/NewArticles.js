import React, {useState} from 'react';
import  classes from "./NewArticles.module.css";
import { Card, Form, Container, Col, Row, Button, FormLabel } from "react-bootstrap";
import firebase from '../../../config/firebase';


export default function NewArticles(props) {

    const [docState, setDocState] = useState({
            title:"",
            content: "",
            createDate: new Date(),
            featureImage: "",
            lastModified: new Date(),
            categoryLabel: "",
            shortText:  "",
      });

    const [tech, SetTechName] = useState('Django')

      const TechName = [
          {
            name: "Django"
          },
          {
            name: "Flask"
          },
          {
            name: "Data Science"
          },
          {
            name: "Docker"
          },
          {
            name: "Jenkin"
          },
          {
            name: "Git"
          },
          {
            name: "Terraform"
          },
          {
            name: "MySQL"
          },
          {
            name: "MongoDB"
          },
      ]

      

      const onChangeArticleTitle = (value, tech) => {

        setDocState({
                ...docState,
                title: value,
                categoryLabel: tech
        })

      }

      const onChangeArticleFeature = (value) => {

        setDocState({
                ...docState,
                featureImage: value
        })

      }
      const onChangeArticleContent = (value) => {

        setDocState({
                ...docState,
                content: value
        })
    }
      const onChangeArticleShort = (value) => {

        setDocState({
                ...docState,
                shortText: value
        })
    }

        const onChangeArticlePublish = (value) => {

            SetTechName(value)

      }

      const onCreateArticle = (Tech, docState) => {
        return firebase.firestore().collection(Tech)
        .doc(docState.title.replaceAll(" ","-"))
        .set(docState)
        .then(() => {
          window.location.reload();
        });
    };
      
    return (
        <Container>
            <Row>
                <Col xl={9} lg={9} md={8} sm={12} xs={12} >
                    <h2 className={classes.SectionTitle}>
                            New Article
                    </h2>
                    <Form.Group>
                        <FormLabel className={classes.Label}>
                            Title
                        </FormLabel>
                        <Form.Control type="text" name="articleTitle" id="articleTitle" placeholder=""
                        onChange={(e) => onChangeArticleTitle(e.target.value,tech)}
                        value={docState.title}
                        >

                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <FormLabel className={classes.Label}>
                            Feature Image(Only Url)
                        </FormLabel>
                        <Form.Control type="text" name="articleTitle" id="articleTitle" placeholder=""
                        onChange={(e) => onChangeArticleFeature(e.target.value)}
                        value={docState.featureImage}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <FormLabel className={classes.Label}>
                            Short Text
                        </FormLabel>
                        <Form.Control type="text" name="articleTitle" id="articleTitle" placeholder=""
                        onChange={(e) => onChangeArticleShort(e.target.value)}
                        value={docState.shortText}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                    as="textarea" 
                    onChange={(e) => onChangeArticleContent(e.target.value)}
                     />
                    </Form.Group>
                </Col>
                <Col xl={3} lg={3} md={4} sm={12} xs={12} >
                    <Card>
                        <Card.Header>
                        Article Settings
                        </Card.Header>
                        <Card.Body>
                            <Form.Group>
                            <FormLabel className={classes.Label}>
                            </FormLabel>
                            <Form.Control
                            as="select"
                            name="publish"
                            id="publish"
                            onChange={(e) => {
                              onChangeArticlePublish(e.target.value);
                              }}>
                            {TechName.map(data => (
                                    <option>{data.name}</option>
                            )) }
                            </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Button
                                color="danger"
                                onClick={ async (e) => {                                  
                                    
                                await onCreateArticle(tech, docState);  
                                  
                                    }} >
                                    Click
                                </Button>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}