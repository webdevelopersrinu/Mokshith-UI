import React from 'react'
import { IoIosCopy } from "react-icons/io";


function LightTheme({ preview, code, hover }) {
    const handeleCopy = (code) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(code);
            toast.success("Code copied! 🎉");
        } else {
            toast.error("Clipboard API not supported!");
        }
    };
    return (
        <div
            className="bg-white border relative rounded-xl border-gray-200   "
        >
            <div className=" ">
                {
                    hover && <span className="text-sm font-medium cursor-default text-gray-600 lowercase border-gray-200 border-b border-r rounded-br-lg py-2 px-2">Hover Effect ✨</span>
                }
                <button
                    onClick={() => handeleCopy(code)}
                    className="text-gray-600 hover:text-gray-700 absolute right-3 top-3"
                    title="Copy to clipboard"
                >
                    <IoIosCopy />
                </button>
            </div>
            <div className="mt-4  py-6 flex items-center justify-center">{preview}</div>
        </div>
    );
}

export default LightTheme