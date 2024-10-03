import './card.scss';

function Card({ image, title, text }) {
    return (
        <div className='card'>
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Card;
