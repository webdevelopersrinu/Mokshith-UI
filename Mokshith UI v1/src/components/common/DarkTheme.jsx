import React from 'react'
import { IoIosCopy } from "react-icons/io";
import { toast } from "react-hot-toast"



function DarkTheme({ preview, code, hover }) {
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
            className="bg-gray-900 border relative rounded-xl border-gray-200"
        >
            <div className=" my-2">
                {
                    hover && <span className="text-sm font-medium cursor-default text-gray-200 lowercase border-gray-800 bg-gray-800 border-b border-r rounded-tl-lg rounded-br-lg py-2 px-2">Hover Effect ✨</span>
                }
                <button
                    onClick={() => handeleCopy(code)}
                    className="text-gray-200 hover:text-gray-300 absolute right-3 top-3"
                    title="Copy to clipboard"
                >
                    <IoIosCopy />
                </button>
            </div>
            <div className="mt-4  py-12 flex items-center justify-center">{preview}</div>
        </div>
    );
}

export default DarkTheme