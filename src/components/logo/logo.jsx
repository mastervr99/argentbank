import './logo.scss'
import argentBankLogo from '../../assets/images/argentBankLogo.png';
import { Link } from 'react-router-dom';

function Logo() {
    return  <div className='logo'>
                <Link  to="/">
                    <img src={argentBankLogo}/> 
                </Link>
            </div>
}

export default Logo