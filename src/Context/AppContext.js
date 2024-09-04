import React from 'react' ;
import {createContext} from 'react'
import {useState} from 'react';
import { baseUrl } from '../baseUrl';
import { useLocation} from 'react-router-dom';

export const AppContext = createContext();

function AppContextProvider(props) {

    const[loading , setLoading] = useState(false);
    const[totalpages , setTotalpages] = useState(null);
    const[currentpage , setCurrentpage] = useState(1);
    const[posts , setPosts] = useState([]);
    const[nextbuttonvisibility , setNextbuttonvisibility] = useState(true);
    const[prevbuttonvisibility , setPrevbuttonvisibility] = useState(false);
    const currLocation = useLocation();


    async function datafetching(tag = null , category = null, page=1)
    {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag) url+=`&tag=${tag}`;
        else if (category) url+=`&category=${category}`;

        try{
            const response = await fetch(url);
            const data = await response.json();
            setTotalpages(data.totalPages);
            setCurrentpage(page);
            setPosts(data.posts);
        }
        catch(err){
            console.log("Error Occurred : " + err);
            setTotalpages(null);
            setCurrentpage(1);
            setPosts([]);
        }
        setLoading(false);
    }

    function nextPageHandler()
    {

        let arr= currLocation.pathname.split('/');
        let lastSegment = arr.at(1);

        if (lastSegment === 'tags') {
            datafetching(arr.at(-1).replaceAll('-',' '),null,currentpage+1);

        } else if (lastSegment === 'categories') {
            datafetching(null,arr.at(-1).replaceAll('-',' '),currentpage+1 );

        }
        else {
            datafetching(null,null,currentpage+1);
        }
        setCurrentpage(currentpage+1);
    }

    function prevPageHandler()
    {
        let arr= currLocation.pathname.split('/');
        let lastSegment = arr.at(1);

        if (lastSegment === 'tags') {
            datafetching(arr.at(-1).replaceAll('-',' '),null,currentpage-1);

        } else if (lastSegment === 'categories') {
            datafetching(null,arr.at(-1).replaceAll('-',' '),currentpage-1 );

        }
        else {
            datafetching(null,null,currentpage-1);
        }
        setCurrentpage(currentpage-1);
    }




    const value = {
        loading , 
        setLoading,
        totalpages ,
        setTotalpages , 
        currentpage , 
        setCurrentpage ,
        posts ,
        setPosts ,
        nextbuttonvisibility ,
        setNextbuttonvisibility ,
        prevbuttonvisibility ,
        setPrevbuttonvisibility,
        datafetching ,
        nextPageHandler,
        prevPageHandler

    }

    return(
        <AppContext.Provider value = {value} >
            {props.children}
        </AppContext.Provider>
        
    );
}

export default AppContextProvider;
