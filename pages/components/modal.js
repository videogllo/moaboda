//functional
import { Fragment, useEffect, useState } from "react";

//lib
import { Dialog, Transition } from "@headlessui/react";

//form
import SignInForm from "./signInForm";
import SignUpForm from "./signUpForm";

const Modal = ({setIsModal}) => {
    const [open, setOpen] = useState(true);
    // const [isLogin, setIsLogin] = useState(false);
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        setIsSignIn(true);
    },[])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={setOpen} onClick={() => {setIsModal(false)}}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-900/90 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-5/6 sm:max-w-lg sm:p-6 flex justify-center">
                                    {isSignIn && <SignInForm setIsSignIn={setIsSignIn} setIsSignUp={setIsSignUp}></SignInForm>}
                                    {isSignUp && <SignUpForm setIsSignIn={setIsSignIn} setIsSignUp={setIsSignUp}></SignUpForm>}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};
export default Modal;
