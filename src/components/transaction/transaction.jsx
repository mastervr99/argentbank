import './transaction.scss';

function Transaction({ title, amount, description }) {
    return (
        <div className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account_cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </div>
    );
}

export default Transaction