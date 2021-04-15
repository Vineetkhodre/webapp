import React from 'react'
import './index.css';
import Card from './Card';
import Data from "./Data";

function ncard(val){
    return(
      <Card
      imgsrc={val.imgsrc}
      link={val.link}
      title={val.title}
    />
    )
  }

function Service() {
    return (
        <div className="cards">
   {Data.map(ncard)}
    </div>
    )
}

export default Service;
