import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '/public/logo.png';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/')
  }

  return (
    <header className="nav-bar">

      <NavLink to="/"> <img onClick={goToHome} src={logo} className="logo-container" img /> </NavLink>


      {isLoaded && (


        <div className="session-container">
          <ProfileButton className="session-menu" user={sessionUser} />
        </div>

      )}

    </header>

  );
}

export default Navigation;