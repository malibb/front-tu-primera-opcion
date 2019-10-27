import React, { useState, useEffect } from "react";
import image from '../img/home-bg.jpg';

function Head(props) {
    const [title] = useState(props.title);
    const [subhead] = useState(props.subhead);
    const [subtitle] = useState(props.subtitle);
    useEffect(() => {
        console.log("Me pinte despues de la UI")
    },[]) 
  const cover = props.cover ? props.cover : image	
  return (
    <header  className="masthead" style={{backgroundImage:`url('${cover}')`}}>
      <div  className="overlay"></div>
      <div  className="container">
        <div  className="row">
          <div  className="col-lg-8 col-md-10 mx-auto">
            <div  className="site-heading">
              <h1>{title}</h1>
              <span  className="subheading">{subhead}</span>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Head;
