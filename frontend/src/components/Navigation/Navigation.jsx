import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '/public/logo.png';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <header className = "nav">
    <div className="nav-bar-container">

    <ul>
      
        <NavLink to="/"> <img src={logo} className="logo-container"/> </NavLink>

      {isLoaded && (
        
         <ProfileButton className= "session-menu" user={sessionUser} />
  
      )}
    </ul>
    </div>
    </header>
    
  );
}

export default Navigation;