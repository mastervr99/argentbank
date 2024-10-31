import './user.scss'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Transaction from '../../components/transaction/transaction'
import Footer from '../../layout/footer/footer'
import { useSelector, useDispatch  } from 'react-redux';
import { updateUserProfile } from '../../services/userService';
import { profileSuccess } from '../../pages/user/profileSlice';
import { checkAuth } from '../../pages/sign_in/loginSlice';


function User(){
    const userProfile = useSelector((state) => state.profile.userProfile);
    const isAuthenticated = useSelector((state) => state.login.isAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [firstname, setFirstname] = useState(userProfile?.firstname || '');
    const [lastname, setLastname] = useState(userProfile?.lastname || '');

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setFirstname(userProfile.firstname);
        setLastname(userProfile.lastname);
    };
    
    const handleSaveClick = async () => {
        const updatedProfile = { ...userProfile, firstname, lastname };
        const result = await updateUserProfile(updatedProfile);
        if (result.success) {
          dispatch(profileSuccess(updatedProfile));
          setIsEditing(false);
        } else {
          console.error(result.error);
        }
    };

    if (!userProfile) {
        return <div>Loading...</div>;
    }

    
    return <div className="user_page">
        <main className='main'>
            <div className="header_user_page">
                <h1>Welcome back<br />{!isEditing && `${userProfile.firstname} ${userProfile.lastname} !`}</h1>
                {isEditing ? (
                    <div className='edit_form'>
                        <div className='form_left_side'>
                            <input
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <button onClick={handleSaveClick}>Save</button>

                        </div>
                        <div className='form_right_side'>
                            <input
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <button onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                )}
            </div>
            <Transaction 
                title="Argent Bank Checking (x8349)" 
                amount="$2,082.79" 
                description="Available Balance" 
            />
            <Transaction 
                title="Argent Bank Savings (x6712)" 
                amount="$10,928.42" 
                description="Available Balance" 
            />
            <Transaction 
                title="Argent Bank Credit Card (x5201)" 
                amount="$184.30" 
                description="Current Balance" 
            />
        </main>
        <Footer paddingBottom="10px" />
    </div>
}

export default User