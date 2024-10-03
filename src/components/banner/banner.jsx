import './banner.scss';
import banner from '../../assets/images/bank-tree.jpeg'

function Banner() {
    return (
        <div className='banner' style={{ backgroundImage: `url(${banner})`}} >
            <div className='banner-text'>
                <p className='first-text'>No fees.<br/>No Minimum deposit.<br/>High Interest rates.</p>
                <p className='second-text'>Open a saving account with<br/>Argent Bank today!</p>
            </div>
        </div>
    );
}

export default Banner