import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import {useStateValue} from "../src/StateProvider";
import { auth } from "./firebase";



function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


  return (
    <div className='header'>
      <Link to="/">
      <img className='header_logo' src='https://sybergaming.com/wp-content/uploads/2019/03/amazon-logo.png'>
      </img>
      </Link>
      
        
        <div
            className="header_search">
                <input className="header_searchInput" type="text"/>
                < SearchIcon className='header_searchIcon'/>
                
                {/* Logo */}
        </div>

        <div className="header_nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthenticaton} className="header_option">
          
            <span className='header_optionlineone'>Hello,<br/>
            {!user ? 'Guest' : user.email}</span>
            <span className='header_optiolinetwo'>{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <div className="header_option">
        <span className='header_optionlineone'>Returns</span>
         <span className='header_optiolinetwo'>&<br/>
         Orders</span>
        </div> 
        <div className="header_option">
        <span className='header_optionlineone'>Your</span>
        <span className='header_optiolinetwo'>Prime</span>
         </div> 
         <Link to="/checkout">
         <div className="header_optionBasket">
         <ShoppingBasketIcon/> 
         <span className='header_optionlinetwo header_basketcount'> {basket?.length} 
         </span>
        </div>
        </Link>
        </div>

      
    </div>
  )
}

export default Header
