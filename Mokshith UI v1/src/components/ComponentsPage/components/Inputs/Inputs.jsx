import React from 'react'
import ComponentsTitleSubTitle from '../../../common/ComponentsTitleSubTitle'
import LightTheme from '../../../common/LightTheme'

const componentsOFLight = [
    {
        hover: true,
        preview:
            <div class="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="unique-input"
                >Your Label</label
                >
                <input
                    class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter text here"
                    type="text"
                    id="unique-input"
                />
            </div>
        ,
        code: ` <div class="w-full max-w-xs p-5 bg-white rounded-lg font-mono">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="unique-input"
    >Your Label</label
  >
  <input
    class="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
    placeholder="Enter text here"
    type="text"
    id="unique-input"
  />
</div>
`
    },
    {
        hover: true,
        preview:
            <div class="relative mt-6">
                <input
                    type="email"
                    placeholder="Email address"
                    autocomplete="email"
                    aria-label="Email address"
                    class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                />
                <div class="absolute inset-y-1 right-1 flex justify-end">
                    <button
                        type="submit"
                        aria-label="Submit"
                        class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                    >
                        <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                            <path
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        ,
        code: `
<div class="relative mt-6">
  <input
    type="email"
    placeholder="Email address"
    autocomplete="email"
    aria-label="Email address"
    class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
  />
  <div class="absolute inset-y-1 right-1 flex justify-end">
    <button
      type="submit"
      aria-label="Submit"
      class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
    >
      <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
        ></path>
      </svg>
    </button>
  </div>
</div>
`
    },
    {
        hover: true,
        preview:
            <div
                class="w-64 h-14 relative flex items-center shadow-[0px_5px_15px_rgba(0,0,0,0.03)]"
            >
                <input
                    required=""
                    class="peer w-full h-full bg-white text-lg font-light placeholder-slate-400 contrast-more:placeholder-slate-500 border border-slate-200 outline-none rounded-lg focus:border-indigo-400 valid:border-indigo-400 focus:ring-indigo-400 valid:ring-indigo-400 focus:ring-1 valid:ring-1 px-3"
                    placeholder="Enter your password"
                    type="text"
                />
                <div
                    class="w-5 absolute block peer-valid:hidden right-3 opacity-20 peer-focus:opacity-70 peer-valid:opacity-70 peer-valid:fill-indigo-500"
                >
                    <svg viewBox="0 0 24 24" id="Outline" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"
                        ></path>
                    </svg>
                </div>
                <div
                    class="w-5 absolute hidden peer-valid:block right-3 opacity-20 peer-focus:opacity-70 peer-valid:opacity-70 peer-valid:fill-indigo-500"
                >
                    <svg viewBox="0 0 24 24" id="Outline" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"
                        ></path>
                        <path
                            d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
                        ></path>
                    </svg>
                </div>
            </div>
        ,
        code: `
<div
  class="w-64 h-14 relative flex items-center shadow-[0px_5px_15px_rgba(0,0,0,0.03)]"
>
  <input
    required=""
    class="peer w-full h-full bg-white text-lg font-light placeholder-slate-400 contrast-more:placeholder-slate-500 border border-slate-200 outline-none rounded-lg focus:border-indigo-400 valid:border-indigo-400 focus:ring-indigo-400 valid:ring-indigo-400 focus:ring-1 valid:ring-1 px-3"
    placeholder="Enter your password"
    type="text"
  />
  <div
    class="w-5 absolute block peer-valid:hidden right-3 opacity-20 peer-focus:opacity-70 peer-valid:opacity-70 peer-valid:fill-indigo-500"
  >
    <svg viewBox="0 0 24 24" id="Outline" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"
      ></path>
    </svg>
  </div>
  <div
    class="w-5 absolute hidden peer-valid:block right-3 opacity-20 peer-focus:opacity-70 peer-valid:opacity-70 peer-valid:fill-indigo-500"
  >
    <svg viewBox="0 0 24 24" id="Outline" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"
      ></path>
      <path
        d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
      ></path>
    </svg>
  </div>
</div>
`
    },
    {
        hover: true,
        preview:
            <div class="flex justify-center items-center">
                <div class="w-[250px] relative">
                    <input
                        class="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
                        type="text"
                        placeholder=""
                        name="username"
                        id="username"
                    />
                    <label
                        class="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
                        for="username"
                    >
                        Name
                    </label>
                    <svg
                        class="absolute top-6 left-4"
                        fill=""
                        width="18"
                        height="18"
                        viewBox="0 0 344 384"
                    >
                        <path
                            d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
                            fill="#6b7280"
                        ></path>
                    </svg>
                    <label class="pt-1 block text-gray-500 text-sm"> Text helper </label>
                </div>
            </div>
        ,
        code: `
<div class="flex min-h-screen min-w-full justify-center items-center">
  <div class="w-[250px] relative">
    <input
      class="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
      type="text"
      placeholder=""
      name="username"
      id="username"
    />
    <label
      class="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
      for="username"
    >
      Name
    </label>
    <svg
      class="absolute top-6 left-4"
      fill=""
      width="18"
      height="18"
      viewBox="0 0 344 384"
    >
      <path
        d="M170.5 192q-35.5 0-60.5-25t-25-60.5T110 46t60.5-25T231 46t25 60.5t-25 60.5t-60.5 25zm0 43q31.5 0 69.5 9t69.5 29.5T341 320v43H0v-43q0-26 31.5-46.5T101 244t69.5-9z"
        fill="#6b7280"
      ></path>
    </svg>
    <label class="pt-1 block text-gray-500 text-sm"> Text helper </label>
  </div>
</div>
`
    },
    {
        hover: true,
        preview:
            <div class="relative rounded-full overflow-hidden bg-white shadow-xl w-72">
                <input
                    class="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
                    placeholder="Hover on Submit"
                    name="text"
                    type="text"
                />
                <div class="absolute right-2 top-[0.4em]">
                    <button
                        class="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
                    >
                        <svg
                            class="relative z-10"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 64 64"
                            height="50"
                            width="50"
                        >
                            <path
                                fill-opacity="0.01"
                                fill="white"
                                d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                            ></path>
                            <path
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="3.76603"
                                stroke="white"
                                d="M42.8496 18.7067L21.0628 44.6712"
                            ></path>
                            <path
                                stroke-linejoin="round"
                                stroke-linecap="round"
                                stroke-width="3.76603"
                                stroke="white"
                                d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                            ></path>
                        </svg>
                        <div
                            class="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
                        ></div>
                        <div
                            class="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
                        ></div>
                    </button>
                </div>
            </div>
        ,
        code: `
<div class="relative rounded-full overflow-hidden bg-white shadow-xl w-72">
  <input
    class="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold"
    placeholder="Hover on Submit"
    name="text"
    type="text"
  />
  <div class="absolute right-2 top-[0.4em]">
    <button
      class="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden"
    >
      <svg
        class="relative z-10"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        height="50"
        width="50"
      >
        <path
          fill-opacity="0.01"
          fill="white"
          d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
        ></path>
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="3.76603"
          stroke="white"
          d="M42.8496 18.7067L21.0628 44.6712"
        ></path>
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="3.76603"
          stroke="white"
          d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
        ></path>
      </svg>
      <div
        class="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"
      ></div>
      <div
        class="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"
      ></div>
    </button>
  </div>
</div>
`
    },
]
function Inputs() {
    return (
        <div className='p-4  min-h-screen bg-gradient-to-b from-blue-50
    to-white'>
            <ComponentsTitleSubTitle title={"Mokshith UI Inputs"} subTitle={"A unique collection of Copy & Paste Tailwind CSS components with Mokshith UI."} />
            <div className="mt-8 grid grid-cols-1  lg:grid-cols-2 gap-6">
                {componentsOFLight.length > 0 && componentsOFLight.map((component, index) => (
                    <LightTheme key={index} {...component} />
                ))}
            </div>
        </div>
    )
}

export default Inputs