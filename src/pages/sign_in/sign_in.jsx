import './sign_in.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sign_In_Form from '../../layout/sign_in_form/sign_in_form';
import Footer from '../../layout/footer/footer';
import { checkAuth } from '../../pages/sign_in/loginSlice';

function Sign_In(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.login.isAuth);

    useEffect(() => {
        dispatch(checkAuth());
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [dispatch, isAuthenticated, navigate]);

    return (
        <main className="sign_in_page">
            <section className="sign-in-content">
                <div className='sign_in_form_content'>
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Sign_In_Form />
                </div>
            </section>
            <Footer paddingBottom="10px" />
        </main>
    );
}

export default Sign_In;
