//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//functional
import { useState } from "react";

//component
import Modal from "./modal.js";
import UserPopup from "./userPopup.js";

const UserForm = () => {
    const [isModal, setIsModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isPopup, setIsPopup] = useState(false);

    const userClick = () => {
        if (isLogin === true) {
            setIsPopup(true);
        } else {
            setIsModal(true);
        }
    };

    return (
        <>
            <div
                className="relative rounded-full border border-transparent bg-slate-800 px-2 py-2 text-sm font-medium transition-all shadow-sm hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-slate-800/80 focus:ring-offset-2"
                onClick={userClick}
            >
                <FontAwesomeIcon
                    icon={faUser}
                    className="h-5 w-5"
                ></FontAwesomeIcon>
                {isLogin === true ? (
                    <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-slate-200" />
                ) : (
                    <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-slate-200" />
                )}

                {isPopup && <UserPopup setIsPopup={setIsPopup}></UserPopup>}
            </div>

            {isModal && <Modal setIsModal={setIsModal}></Modal>}
        </>
    );
};
export default UserForm;
