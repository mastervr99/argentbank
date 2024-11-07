import './error_page.scss';

function Error_Page() {
    return <div>
                <main className='error_page'>
                    <h2>404</h2>
                    <p className='error_message'>Oups! La page que vous demandez n'existe pas.</p>
                    <a className='return_link' href='/'><p>Retourner sur la page d'accueil</p></a>
                </main>
           </div>
}

export default Error_Page