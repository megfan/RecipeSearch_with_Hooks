import React from 'react'
import './Recipe.css'

const Recipe = ({title,ingredients,image,link}) => {    
    return (
        <div className="result-content"> 
            {(image === '') 
            ? <img src='https://images.unsplash.com/photo-1503197553955-b4eafae3e08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1295&q=80' alt="{title}"/>
            : <img src={image} alt="{title}"/> 
            }                          
            <div className="result-data">
                <h3>{title}</h3>
                <p>{ingredients}</p>
                <a href={link}>Go to recipe</a>
            </div>            
        </div>
    )
}  
  
export default Recipe;