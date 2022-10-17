import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import Modal from "./modal.js";

const UserForm = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                className="inline-flex relative items-center rounded-full border border-transparent bg-blue-800 px-2 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                onClick={(e) => setOpen(true)}
            >
                <UserIcon className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
                {/* Button text */}
                <span className="absolute -bottom-1 -right-1 block h-3 w-3 rounded-full bg-gray-500 ring-2 ring-white" />
            </button>

            {open && <Modal open={open} setOpen={setOpen}></Modal>}
        </div>
    );
};
export default UserForm;
