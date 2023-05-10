import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Global_hooks/Global_hook';

const Heder = () => {
  const {user,Logout} = useContext(authContext);
  const Logout_email = () => {
    Logout()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"> Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ragister">Ragistation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login </Link>
        </li>
      </ul>
      <div className="logindetails d-flex">
        {
          
            user?.uid? 
            <>
              {user.email}
              <img src={user?.photoURL} alt="" />
              <button type="button" onClick={Logout_email} class="btn btn-outline-danger">Logout</button>
            </>:
            <>
              <Link className="nav-link px-2" to="/login"> Login </Link>
              <Link className="nav-link" to="/ragister"> Ragister </Link>
            </>
          
          // user?.email && <>
          // {user.email}
          // {
          //   user?.photoURL? 
          //   : <p className='text-danger'>imag nai </p>
          // }
          // </> 

        }
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Heder;