import React, { useEffect, useState } from 'react';
import All_news from './All_news/All_news';

const Home = () => {
    const [allnews, setAllnews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allnews')
        .then(res => res.json())
        .then(data => setAllnews(data))
    }, [])
    return (
        <div>
            {allnews.map(newsall => <All_news newsall={newsall}/>)}
            
        </div>
    );
};

export default Home;