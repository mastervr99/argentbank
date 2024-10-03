import Logo from '../../components/logo/logo';
import Navigation from '../../components/navigation/navigation';
import './header.scss';

function Header() {
    return <header className='header'>
                <Logo/>
                <Navigation />
            </header>
}

export default Header