import React from "react";


function Card(props){
    return(
         
          <div className="Card">
           
           <img src={props.imgsrc} alt="mytutorial" className="card_img"/>
           <h3 className="card_info">{props.title}</h3>
           <a href={props.link}>
              <button className="button">WATCH NOW</button>
            </a>
           </div>
        
    )
}

export default Card;