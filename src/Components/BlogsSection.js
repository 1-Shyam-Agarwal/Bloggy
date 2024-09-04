import React, { useEffect } from 'react' ;
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Card from './Card';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import './blogssection.css';


function Blogsection() {

    const {datafetching,posts,loading} = useContext(AppContext);
    const currLocation = useLocation();
   

    useEffect(() => {
        let arr= currLocation.pathname.split('/');
        let lastSegment = arr.at(1);

        if (lastSegment === 'tags') {
            datafetching(arr.at(-1).replaceAll('-',' '));

        } else if (lastSegment === 'categories') {
            datafetching(null,arr.at(-1).replaceAll('-',' ') );

        }
        else {
            datafetching();
        }
    }, [currLocation.pathname]);
    return(
        <div className='posts-collection-wrapper'>
            <div className='posts-collection'>
            {
                loading ? <Spinner></Spinner> : 
                 posts.map( (entry) =>
                 {
                    return <Card 
                        title = {entry.title} 
                        author = {entry.author} 
                        category = {entry.category} 
                        content = {entry.content} 
                        tags = {entry.tags}
                        key={entry.id}
                        id={entry.id}
                        date = {entry.date}>
                    </Card>
                 })

            }
        </div>  

        </div>
          
    );
}

export default Blogsection