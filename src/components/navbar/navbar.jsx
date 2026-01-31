import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { ShopContext } from '../context/ShopContext'

export const Navbar = () => {
    const [menu,setmenu] = useState("shop");
    const { GetTotalItems } = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className="logo">
                <img src="https://img.icons8.com/?id=4LlytcnB4ucJ&format=png&size=64" alt="Shopping Logo" />
                <p>LUXE STORE</p>
            </div>
            <ul className="categores">
                <li onClick={()=>{setmenu("shop")}} ><Link to='/' style={{textDecoration:'none' }}>Shop</Link>   {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("man")}} ><Link to='/men'style={{textDecoration:'none'}}>Men</Link>     {menu==="man"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Women")}} ><Link to='/Women'style={{textDecoration:'none'}}>Women</Link>      {menu==="Women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Kids")}} ><Link to='/Kids'style={{textDecoration:'none'}}>Kids</Link>     {menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="cart">
                <button>Login</button>
                <Link to='/Card'><img src="https://img.icons8.com/?id=tMK0U5Lh2aYL&format=png&size=48" alt="Shopping Cart" /></Link>
                <div className="amount">{GetTotalItems()}</div>
            </div>
        </div>
    )
}
export default Navbar;