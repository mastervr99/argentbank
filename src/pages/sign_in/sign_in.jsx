import './sign_in.scss';
import Sign_In_Form from '../../components/sign_in_form/sign_in_form';
import Footer from '../../layout/footer/footer';

function Sign_In(){
    return <main className="sign_in_page">
      <section className="sign-in-content">
        <div className='sign_in_form_content'>
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Sign_In_Form />
        </div>
      </section>
      <Footer paddingBottom="10px" />
  </main>
}

export default Sign_In
