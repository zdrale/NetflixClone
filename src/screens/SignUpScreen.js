import React, { useRef } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import "./SignUpScreen.css";
import { signInWithEmailAndPassword } from "firebase/auth";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const singIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={singIn}>
          Sign in
        </button>
        <h4>
          <span className="singupScreen_gray"> New to Netflix?</span>{" "}
          <span className="singUpScreen_link" onClick={register}>
            Sing up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
