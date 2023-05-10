import React from 'react';
import { useState, useEffect  } from 'react';
import {Link} from "react-router-dom";
const Leftnav = () => {
    const [catagory, setCatagory] = useState([]);

    useEffect ( () => {
        fetch('http://localhost:5000/dataload')
        .then(res => res.json())
        .then(data => setCatagory(data))
    }, [])


    return (
        <div>
            {
                catagory.map(Cata_Item =>  <p key={Cata_Item.id}>
                    <Link to={`/catgori/${Cata_Item.id}`}> {Cata_Item.name} </Link>
                </p>)
            }
        </div>
    );
};

export default Leftnav;