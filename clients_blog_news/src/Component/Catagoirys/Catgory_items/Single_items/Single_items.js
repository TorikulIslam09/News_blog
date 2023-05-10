import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Single_items = () => {
    const SingleItems = useLoaderData();
    const {details, title,author,rating,total_view,image_url} = SingleItems;
    const {name,published_date,img} =author;
    const {number} = rating;
    return (
        <Card className="text-center">
        <Card.Header>
            <div className="heder d-flex align-items-center justify-content-between">
                <div className="author-img d-flex align-items-center">
                    <img src={img} style={{height:'60px'}} className='rounded-circle' alt="" />
                    <div className="ps-2 text-left authornam">
                    <h5 className='m-0 p-0'>{name}</h5>
                    <p>{published_date}</p>
                </div>
                </div>

            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className='text-start'> <h2 className=''>{title}</h2> </Card.Title>
          <Card.Text >
            <img src={image_url} alt="" className='img-fluid'/>
            <p className='mt-4 text-start'>{details}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default Single_items;