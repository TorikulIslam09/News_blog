import React, { useContext } from 'react';
import './Rightnab.css';
import qZone1 from '../assets/qZone1.png';
import qZone2 from '../assets/qZone2.png';
import qZone3 from '../assets/qZone3.png';
// import Carousel from 'react-bootstrap/Carousel';

import { FaGoogle, FaGithub, FaFacebookF, FaTwitter,FaInstagram} from "react-icons/fa";
import { authContext } from '../Global_hooks/Global_hook';
const Rightnav = () => {
const {userCreate, GithubSignin} = useContext(authContext)

    const Google_Login = () => {
        userCreate()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log('error khayci ', error)
        })
    }

    const gitHublogin = () => {
        GithubSignin()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log('error khayci ', error)
        })
    }

    return (
        <div className='right-sidebar'>
            <div className="login-with">
            <h3 className='fw-bold'>Login With</h3>
            <button type="button" onClick={Google_Login} class="btn btn-outline-secondary d-block w-100 my-3"> <FaGoogle/> Login With Google</button>
            <button type="button" onClick={gitHublogin} class="btn btn-outline-secondary d-block w-100"> <FaGithub/> Login With Github </button>
            </div>
            <div className="find-us-on mt-lg-4 mt-md-3 mt-2">
                <h3 className='fw-bold mb-3'>Find us On</h3>
                <ul class="list-group text-center">
                    <li class="list-group-item"> <span><FaFacebookF/></span> Facebook </li>
                    <li class="list-group-item"> <span><FaTwitter/></span> Facebook </li>
                    <li class="list-group-item"> <span><FaInstagram/></span> Facebook </li>
                </ul>
            </div>

            <div className="q-zune rounded">
                
                <h3>Q-Zone </h3>

                {/* <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={qZone3}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={qZone2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={qZone1}
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel> */}

                    <img
                    className="d-block w-100"
                    src={qZone3}
                    alt="First slide"
                    />
                    <img
                    className="d-block w-100"
                    src={qZone2}
                    alt="First slide"
                    />
                    <img
                    className="d-block w-100"
                    src={qZone1}
                    alt="First slide"
                    />

          

            </div>
        </div>
    );
};

export default Rightnav;