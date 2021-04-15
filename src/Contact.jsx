import React  from 'react';
import  { useState } from 'react';
import Createnote from './Createnote';
import Note from './Note';


function Contact() {
    const [item, setItem] = useState([]);

    const addNote =(note)=>{
       setItem((oldItem)=>{
           return[...oldItem,note];
       })
    }

    const onDelete=(id)=>{
        console.log(id);
        setItem((oldtem)=>{
            oldtem.filter(
                (currdata,index)=>{
                    console.log(index);
                    return index !== id;
                }
            )
            
            })
            console.log(item);        
    }
    console.log(item);
    return (
        <>
        <div className="input-text-area">
          <Createnote passNote={addNote}/>
        </div>
       
        <div className="note1">  
        
      {item.map(
            (val,index)=>{
            return (
                
                <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
            />);
           })}
        
        </div>
        </>
    )
}

export default Contact;
