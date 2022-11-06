//functional
import { useEffect, useState, useRef } from "react";

//form
import SignInForm from "./signInForm";
import SignUpForm from "./signUpForm";

const Modal = ({ setIsModal }) => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const modalRef = useRef(null); //배경 영역
    const modalBoxRef = useRef(null); //모달박스 영역

    useEffect(() => {
        //최초 로그인 화면 출력 => 로그인이 되어있다면 다른 화면 출력 해야함
        setIsSignIn(true);
    }, []);

    const modalClose = (e) => {
        //모달외의 영역과 일치했다면 close
        if (e.target === modalRef.current) {
            //모달을 닫을 때는 다른 애니메이션 효과 부여
            modalBoxRef.current.classList.remove("animate__zoomIn");
            modalBoxRef.current.classList.add("animate__zoomOut");
            setTimeout(() => {
                setIsModal(false);
            }, 400);
        }
    };

    return (
        <div
            className="bg-black/70 fixed top-0 left-0 w-full h-full z-30 flex items-center justify-center"
            onClick={(e) => modalClose(e)}
            ref={modalRef}
        >
            <div
                className="bg-slate-900 w-3/4 max-w-[500px] h-auto p-6 px-12 rounded-lg shadow-lg z-40 animate__animated animate__zoomIn"
                ref={modalBoxRef}
            >
                {isSignIn && (
                    <SignInForm
                        setIsSignIn={setIsSignIn}
                        setIsSignUp={setIsSignUp}
                    ></SignInForm>
                )}
                {isSignUp && (
                    <SignUpForm
                        setIsSignIn={setIsSignIn}
                        setIsSignUp={setIsSignUp}
                    ></SignUpForm>
                )}
            </div>
        </div>
    );
};
export default Modal;
