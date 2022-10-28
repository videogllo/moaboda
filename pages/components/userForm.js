//asset
import { UserIcon } from "@heroicons/react/24/outline";

//functional
import { useState } from "react";

//component
import Modal from "./modal.js";

const UserForm = () => {
    const [isModal, setIsModal] = useState(false);

    return (
        <div>
            <button
                type="button"
                className="inline-flex relative items-center rounded-full border border-transparent bg-slate-700 px-2 py-2 text-sm font-medium transition-all shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
                onClick={() => setIsModal(true)}
            >
                <UserIcon className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
                {/* Button text */}
                <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full bg-gray-500 ring-2 ring-slate-200" />
            </button>

            {isModal && <Modal setIsModal={setIsModal}></Modal>}
        </div>
    );
};
export default UserForm;
