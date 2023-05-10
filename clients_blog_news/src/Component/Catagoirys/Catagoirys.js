import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catgory_items from './Catgory_items/Catgory_items';

const Catagoirys = () => {
    const newsdata = useLoaderData();
    // console.log(newsdata)
 
    return (
        <div>
            {
                newsdata.map(catgori_items => <Catgory_items Items={catgori_items} key={catgori_items.id}/>)
            }
        </div>
    );
};

export default Catagoirys;