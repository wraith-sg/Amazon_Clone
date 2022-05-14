import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import firebaseApp from '../../firebase';
import { getAuth, signOut } from 'firebase/auth';

function Header() {
  const [{basket, user}] = useStateValue();
  const handleAuth = () => {
    if (user) {
      const auth = getAuth(firebaseApp);
      signOut(auth)
        .then(() => {
        })
        .catch((error) => {
        });
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? 'Guest' : user?._currentUser?.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        {/* <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div> */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartOutlinedIcon className="header__shoppingBasket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;