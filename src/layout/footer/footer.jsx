import './footer.scss';

function Footer({ paddingBottom }) {
    return (
        <footer className='footer' style={{ paddingBottom }}>
            <div className='copyright'>
                <p>Copyright 2020 Argent Bank</p>
            </div>
        </footer>
    );
}

export default Footer
