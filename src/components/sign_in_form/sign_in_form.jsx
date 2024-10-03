import './sign_in_form.scss';


function Sign_In_Form(){
    return  <form>
                <div className="input-wrapper">
                <label for="username">Username</label
                ><input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                <label for="password">Password</label
                ><input type="password" id="password" />
                </div>
                <div className="input-remember">
                <input type="checkbox" id="remember-me" /><label for="remember-me"
                    >Remember me</label
                >
                </div>
                <a href="./user.html" className="sign-in-button">Sign In</a>
            </form>
}

export default Sign_In_Form