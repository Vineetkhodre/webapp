import React from 'react';

import './index.css';
import Card from './Card';
import Data from "./Data";
import 'bootstrap/dist/css/bootstrap.min.css';


function ncard(val){
  return(
    <Card
    imgsrc={val.imgsrc}
    link={val.link}
    title={val.title}
  />
  )
}

function App(){

    return(
    <div className="cards">
   {Data.map(ncard)}
    </div>
    )
}

export default App;
  



