import './user.scss'
import Transaction from '../../components/transaction/transaction'
import Footer from '../../layout/footer/footer'

function User(){
    return <div className="user_page">
        <main className='main'>
            <div className="header_user_page">
                <h1>Welcome back<br />Tony Jarvis!</h1>
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