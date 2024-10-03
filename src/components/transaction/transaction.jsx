import './transaction.scss';

function Transaction(){
    return  <div className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account_cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </div>
}

export default Transaction