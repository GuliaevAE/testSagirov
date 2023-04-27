
import Logo from '../assets/SpaceX_logo.png'
import {useState} from 'react'

const Navbar = () => {
    const [switcher, setSwitch] = useState<boolean>(true)
    return (
        <nav className="nav ">
            <div className='logoContainer' onClick={()=>setSwitch(prev=>!prev)}>
                <div className='corners_top' />
                <div className='corners_bottom' />
                <img  src={Logo} alt="Logo" className='img logoContainer_logo' />
            </div>

            {switcher && <div className='nav_allLinks'>
                <a className="nav-link" aria-current="page" href="#">Главная</a>
                <a className="nav-link" href="#">Технология</a>
                <a className="nav-link" href="#">График полетов</a>
                <a className="nav-link" href="#">Гарантии</a>
                <a className="nav-link" href="#">О компании</a>
                <a className="nav-link" href="#">Контакты</a>
            </div>}

        </nav>
    );
};

export default Navbar;