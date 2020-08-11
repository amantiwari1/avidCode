import React from 'react';
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import classes from './Heading.module.css';
import { Link, withRouter } from 'react-router-dom';

const Options = [
  {
    name: "Python",
    link: [
    {
      title: "Django",
      url: "#"
    },
    {
      title: "Data Science",
      url: "#"
    },
    {
      title: "Flask",
      url: "#"
    },
    ]
},
  {
    name: "Devops",
    link: [
    {
      title: "Jenkin",
      url: "#"
    },
    {
      title: "Docker",
      url: "#"
    },
    {
      title: "Git",
      url: "#"
    },
    {
      title: "Terraform",
      url: "#"
    },
    ]
},
  {
    name: "DataBase",
    link: [
    {
      title: "MySQL",
      url: "#"
    },
    {
      title: "MongoDB",
      url: "#"
    },
    ]
},
  {
    name: "Free Online Classes",
    link: [
    {
      title: "Udemy",
      url: "#"
    },
    {
      title: "Udacity",
      url: "#"
    },
    {
      title: "MasterClass",
      url: "#"
    },
    ]
},
]
 


const Heading = (props) => { 

return (
    <Navbar bg="dark" variant="dark"  expand="md">
  <Navbar.Brand><h2 className={classes.brand}><Link to="/" style={{color: "inherit", textDecoration:"inherit"}} >AvioCode</Link></h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav"  >
  
    <Nav className={classes.nav+" mr-auto justify-content-center"}
     style={{ width: "100%" }}>

    
    {
      Options.map((NavName, index) => (

        <NavDropdown key={index} className={classes.nav} title={NavName.name} id="basic-nav-dropdown" right='true' >
    {
      NavName.link.map((data, index1) => (
        
        <NavDropdown.Item 
        key={index1}
        className={classes.nav}
        href={`/tech/${NavName.name}/${data.title}/`}
        >
        {/* <Link to={`/tech/${NavName.name}/${data.title}/`} style={{color: "inherit", textDecoration:"inherit"}} >   */}
          {data.title}
          {/* </Link>   */}
          </NavDropdown.Item>
      ))
    }
</NavDropdown>

      ))
    }



    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default withRouter(Heading);