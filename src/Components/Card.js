import React from 'react' ;
import './Card.css';
import { NavLink } from 'react-router-dom';

function Card(props) {

    return(
        <div className='card'>
            <div className='cardheading'>{props.title}</div>
            <p className='cardattribution'>By <span className='cardauthor'>{props.author}</span> on <NavLink to={`/categories/${props.category.replaceAll(" ","-")}`} className='cardcategory'>{props.category}</NavLink></p>
            <p className='carddate'>Posted On {props.date}</p>
            <section className='cardcontent'>{props.content}</section>
            <div className='cardtags'>
                {
                    props.tags.map((entry,index)=>
                    {
                        return <NavLink to={`/tags/${entry.replaceAll(" ","-")}`} key={index} className='tags'>#{entry}</NavLink>
                    })
                }
            </div>
        </div>
        
    );
}


export default Card;