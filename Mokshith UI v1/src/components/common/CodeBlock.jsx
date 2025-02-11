import React from "react";
import toast from "react-hot-toast";
import { IoIosCopy } from "react-icons/io";

function CodeBlock({ codeSnippet, codeTitle }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    toast.success("Copied!");
  };
  return (
    <div className="flex flex-col items-center justify-center  p-4 bg-gray-800 text-white rounded-lg">
      <div className="relative w-full  text-white p-4 rounded-lg overflow-auto ">
        <p className="text-gray-400 text-xl my-2 mb-4">{codeTitle}</p>
        <pre className="whitespace-pre-wrap break-words font-mono text-sm">
          {codeSnippet}
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-4 right-3 text-gray-400 p-2 rounded-md hover:text-gray-500"
        >
          <IoIosCopy className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default CodeBlock;
