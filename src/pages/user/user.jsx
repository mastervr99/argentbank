import './user.scss'
import Transaction from '../../components/transaction/transaction'
import Footer from '../../layout/footer/footer'
import { useLocation } from 'react-router-dom';

function User(){
    const location = useLocation();
    const { userProfile } = location.state || {};
    
    if (!userProfile) {
      return <div>Loading...</div>;
    }

    
    return <div className="user_page">
        <main className='main'>
            <div className="header_user_page">
                <h1>Welcome back<br />{userProfile.firstname} {userProfile.lastname}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <Transaction />
            <Transaction />
            <Transaction />
        </main>
        <Footer paddingBottom="10px" />
    </div>
}

export default User