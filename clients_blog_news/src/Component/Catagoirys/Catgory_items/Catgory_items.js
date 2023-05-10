import React from 'react';
import { Link } from 'react-router-dom';

const Catgory_items = ({Items}) => {
    const {image_url,details, title, _id} = Items;
    
 
    return (
        <div>
            
            <div class="card mb-3 h-100 mb-4">
                <img src={image_url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text" id='seemore'>{details.slice(0, 200)} .. <Link to={`/news/${_id}`}> See more</Link> </p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Catgory_items;