import React,{useState, useEffect} from 'react'

import './style.css';
import NewsCard from './NewsCard';
function Read() {
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=43fcfb0a384c4cc58db63c02e3313e78')
        .then(res=>res.json())
        .then(
            result => setData(result))
    },[])
 
    return (
  
  
        <div style={{width:'80%', margin:'20px auto'}}>
        <NewsCard />
        <div style={{marginTop:'20px'}}>
        <NewsCard />
        </div>
        </div>
 
    )
}

export default Read
