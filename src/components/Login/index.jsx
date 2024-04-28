import { useState, useEffect, useRef } from "react";

import ModalComponent from "../ModalComponent";
import Icon from "../Icon";
import SearchBox from "../SearchBox";
import { Link } from "react-router-dom";

import { getFormattedTime, isLength, isEmailValid } from "./utils";
import { STATES } from "./contants";

import { useAuthentication } from "../../context/Auth/context";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [otpCode, setOtpCode] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [formState, setFormState] = useState(STATES.NEEDS_EMAIL);
  const [remainingTime, setRemainingTime] = useState(0);
  const [email, setEmail] = useState("");

  // const [sendOtpCode, confirmOtpCode] = useAuthentication();   // there is an error

  const timerRef = useRef();

  const showEmail = formState === STATES.NEEDS_EMAIL;

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
        <button
          className="text-white mx-2 bg-[#287BFC] w-[80px] h-[30px] rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Sign In
        </button>

        <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="mx-auto flex justify-center">
            <Icon size={60} color="gray" type="apple_logo" />
          </div>

          <div className="mx-auto text-center mt-5">
            <p className="text-3xl font-bold font-sans">Sign In or Sign Up</p>
            <p className="text-gray-500 mt-2 text-2xl font-sans">
              Enter your email to get started.
            </p>
            <SearchBox
              type="search"
              className="w-[70%] h-[60px] rounded-[15px] outline-none border boder-2 border-gray-600 mt-5 px-5"
              placeholder="Email or Apple ID"
            />
          </div>
          <div className="text-center mt-4 text-[#287BFC] font-sans text-md">
            <Link to="/verify">Forgot Apple ID or Password?</Link>
          </div>
          <div className="flex mx-auto justify-center mt-5">
            <Icon size={24} color="#287BFC" type="person" />
          </div>
          <div className="text-center text-gray-500 mt-4 font-sans text-xs">
            <p>
              Your Apple ID information is used to allow you to sign in securely
              and access your <br /> data. Apple records certain data for
              security, support, and reporting purposes. If you <br /> agree,
              Apple may also use your Apple ID information to send you marketing
              emails and <br /> communications, including based on your use of
              Apple services.
            </p>
            <Link className="text-[#287BFC] underline mt-2">
              See how your data is managed...
            </Link>
          </div>
          {/* <div className=" text-white mx-auto flex justify-center mt-5 justify-content-center"> */}
          <Link to="/" className="w-[50%] h-[45px] bg-[#287BFC] rounded-md">
            Continue
          </Link>
          <div className="text-center font-sans">
            <p className="text-2xl font-medium">Verification Code</p>
            <p className="text-sm text-gray-500">
              Enter ther Verification code sent to
            </p>
            <p></p>

            {/* <div className="flex gap-3 mx-auto justify-center">
              <input max={1} className="w-[40px] h-[40px] border border-solid border-gray-400"/>
              <input max={1} className="w-[40px] h-[40px] border border-solid border-gray-400"/>
              <input max={1} className="w-[40px] h-[40px] border border-solid border-gray-400"/>
              <input max={1} className="w-[40px] h-[40px] border border-solid border-gray-400"/>
              <input max={1} className="w-[40px] h-[40px] border border-solid border-gray-400"/>
              <input max={1} className="w-[40px] h-[40px] border border-solid border-gray-400"/>
            </div> */}
          </div>
          {/* </div> */}
        </ModalComponent>
      </div>
    </>
  );
};

export default Login;
