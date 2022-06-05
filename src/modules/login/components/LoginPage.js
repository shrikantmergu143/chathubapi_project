import React from 'react'
import "./LoginPage.css";
import firebase from '@firebase/app-compat';
export default function LoginPage() {
  const GoogleLogin = (e) =>{
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
         console.log(result);
        }).catch(console.log);
  }
  const FacebookLogin = (e) =>{
    e.preventDefault();
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
         console.log(result);
        }).catch(console.log);
  }
  const TwitterLogin = (e) =>{
    e.preventDefault();
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
         console.log(result);
        }).catch(console.log);
  }

  return (
    <aside className={"Login_page"}>
      <div className={"container-md center "}>
        <div className={"card login_card mt-10"}>
          
          <div className={"card-body p-8"}>
            <div className={"card-content "}>
                <h2 className={"text-center mb-4"}>Sign in to <label className={"fonts"}>ChatHub</label></h2>
                <div className={"mt-5 mb-6 social_div"}>
                  <button className={"btn icon-btn"} onClick={GoogleLogin}>
                    <i className="font-20 text-google fi fi-brands-google"></i>
                  </button>
                  <button className={"btn icon-btn text-facebook"} onClick={FacebookLogin}>
                  <i className="font-20 fi fi-brands-facebook"></i>
                  </button>
                  <button className={"btn icon-btn text-twitter"} onClick={TwitterLogin}>
                  <i className="font-20 fi fi-brands-twitter"></i>
                  </button>
                </div>
                <div className="mb-4 ">
                  <label className="form-label">Email Address</label>
                  <div className={"input-group "}>
                    <span className={"input-group-text border-right-0 text-pr"}>
                       <i className="fi fi-rr-envelope"></i>
                    </span>
                    <input name="email" className="form-control border-left-0 pl-0 text-pr" type="email" placeholder="Enter your email"/>
                   
                  </div>
                  <div className="text-danger"></div>
                </div>
                <div className="mb-1">
                  <label className="form-label">Password</label>
                  <div className={"input-group  "}>{/*has-danger */}
                    <input name="email" className="form-control border-right-0 " type="email" placeholder="Enter your password"/>
                    <span className={"input-group-text hover border-left-0 text-pr"}>
                       <i className="fi fi-rr-eye"></i>
                    </span>
                  </div>
                  <div className="text-danger"></div>
                </div>
                <div className={"flex items-center justify-space mb-4"}>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <span className="form-check-sign"></span>
                      Checked
                    </label>
                  </div>
                  <label className={"hover text-pr"}>Forgot Password?</label>
                </div>
                <div className={"text-center pl-5 pr-5"}>
                  <button className={"btn primary-btn w-100"}>
                    Sign in
                  </button>
                </div>
                <div className={"mt-3"}>
                  <h5>Not registered? <label className={"text-pr"}>Create account</label></h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
