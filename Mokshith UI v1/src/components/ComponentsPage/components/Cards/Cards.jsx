import React from 'react'
import ComponentsTitleSubTitle from '../../../common/ComponentsTitleSubTitle'
import LightTheme from '../../../common/LightTheme'

const componentsOFLight = [
    {
        hover: false,
        preview: <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
            <img class="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image" />
            <div class="p-5">
                <h2 class="text-xl font-semibold text-gray-900">Stylish Sneakers</h2>
                <p class="text-gray-600 text-sm mt-2">Perfect comfort and modern design for everyday use.</p>
                <div class="mt-4 flex justify-between items-center">
                    <span class="text-lg font-bold text-blue-600">$49.99</span>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Buy Now</button>
                </div>
            </div>
        </div>,
        code: `    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img class="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image">
        <div class="p-5">
            <h2 class="text-xl font-semibold text-gray-900">Stylish Sneakers</h2>
            <p class="text-gray-600 text-sm mt-2">Perfect comfort and modern design for everyday use.</p>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-lg font-bold text-blue-600">$49.99</span>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Buy Now</button>
            </div>
        </div>
    </div>`
    },
    {
        hover: false,
        preview: <div class="relative bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-6 w-80">
            <img class="w-full h-52 rounded-xl object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image" />
            <h3 class="text-xl font-semibold text-white mt-4">Smart Watch</h3>
            <p class="text-white/80 text-sm mt-2">Track your health and stay connected on the go.</p>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-lg font-bold text-yellow-400">$99.99</span>
                <button class="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Add to Cart</button>
            </div>
        </div>,
        code: `<div class="relative bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-6 w-80">
        <img class="w-full h-52 rounded-xl object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image">
        <h3 class="text-xl font-semibold text-white mt-4">Smart Watch</h3>
        <p class="text-white/80 text-sm mt-2">Track your health and stay connected on the go.</p>
        <div class="mt-4 flex justify-between items-center">
            <span class="text-lg font-bold text-yellow-400">$99.99</span>
            <button class="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">Add to Cart</button>
        </div>
    </div>`
    },
    {
        hover: false,
        preview: <div class="bg-gray-100 p-6 rounded-xl shadow-inner flex flex-col items-center w-80">
            <img class="w-40 h-40 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="Product" />
            <h2 class="text-lg font-semibold text-gray-800 mt-4">Wireless Headphones</h2>
            <p class="text-gray-500 text-sm mt-2 text-center">Experience high-quality sound with noise cancellation.</p>
            <span class="text-2xl font-bold text-gray-900 mt-3">$129.99</span>
            <button class="mt-4 bg-gray-300 shadow-md px-6 py-2 rounded-full text-gray-700 hover:shadow-lg transition">Buy Now</button>
        </div>
        ,
        code: `    <div class="bg-gray-100 p-6 rounded-xl shadow-inner flex flex-col items-center w-80">
        <img class="w-40 h-40 rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="Product">
        <h2 class="text-lg font-semibold text-gray-800 mt-4">Wireless Headphones</h2>
        <p class="text-gray-500 text-sm mt-2 text-center">Experience high-quality sound with noise cancellation.</p>
        <span class="text-2xl font-bold text-gray-900 mt-3">$129.99</span>
        <button class="mt-4 bg-gray-300 shadow-md px-6 py-2 rounded-full text-gray-700 hover:shadow-lg transition">Buy Now</button>
    </div>
`
    },
    {
        hover: true,
        preview: <div class="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center w-72 border border-gray-600 hover:border-green-400 hover:shadow-green-400 transition-all">
            <img class="w-40 h-40 rounded-full shadow-md" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="Product" />
            <h2 class="text-lg font-semibold text-white mt-4">Bluetooth Speaker</h2>
            <p class="text-gray-400 text-sm text-center mt-2">Crystal clear audio.</p>
            <span class="text-2xl font-bold text-green-400 mt-3">$79.99</span>
            <button class="mt-4 bg-green-500 px-6 py-2 rounded-full text-black hover:bg-green-600 transition">Buy Now</button>
        </div>
        ,
        code: `      <div class="bg-black p-6 rounded-lg shadow-lg flex flex-col items-center w-72 border border-gray-600 hover:border-green-400 hover:shadow-green-400 transition-all">
        <img class="w-40 h-40 rounded-full shadow-md" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" alt="Product">
        <h2 class="text-lg font-semibold text-white mt-4">Bluetooth Speaker</h2>
        <p class="text-gray-400 text-sm text-center mt-2">Crystal clear audio.</p>
        <span class="text-2xl font-bold text-green-400 mt-3">$79.99</span>
        <button class="mt-4 bg-green-500 px-6 py-2 rounded-full text-black hover:bg-green-600 transition">Buy Now</button>
    </div>
`,
    },
    {
        hover: false,
        preview: <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
                class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                <button
                    class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        Wooden House, Florida
                    </h5>
                    <p
                        class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone
                    walls, and open meadows.
                </p>
                <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                            <path fill-rule="evenodd"
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                clip-rule="evenodd"></path>
                            <path
                                d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z">
                            </path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path
                                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                            </path>
                            <path
                                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                            </path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path d="M19.5 6h-15v9h15V6z"></path>
                            <path fill-rule="evenodd"
                                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        +20
                    </span>
                </div>
            </div>
            <div class="p-6 pt-3">
                <button
                    class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Reserve
                </button>
            </div>
        </div>,
        code: `  <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div
                class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check" />
                <div
                    class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
                </div>
                <button
                    class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6">
                            <path
                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                    <h5 class="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        Wooden House, Florida
                    </h5>
                    <p
                        class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="-mt-0.5 h-5 w-5 text-yellow-700">
                            <path fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"></path>
                        </svg>
                        5.0
                    </p>
                </div>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                    Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone
                    walls, and open meadows.
                </p>
                <div class="inline-flex flex-wrap items-center gap-3 mt-8 group">
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                            <path fill-rule="evenodd"
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                clip-rule="evenodd"></path>
                            <path
                                d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z">
                            </path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path
                                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z">
                            </path>
                            <path
                                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z">
                            </path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path d="M19.5 6h-15v9h15V6z"></path>
                            <path fill-rule="evenodd"
                                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-5 h-5">
                            <path fill-rule="evenodd"
                                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                    <span
                        class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        +20
                    </span>
                </div>
            </div>
            <div class="p-6 pt-3">
                <button
                    class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    Reserve
                </button>
            </div>
        </div>`
    },
    {
        hover: false,
        preview: <div class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="ui/ux review check" />
            </div>
            <div class="p-6">
                <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    UI/UX Review Check
                </h4>
                <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
                </p>
            </div>
            <div class="flex items-center justify-between p-6">
                <div class="flex items-center -space-x-3">
                    <img alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                    <img alt="Tania Andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                </div>
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    January 10
                </p>
            </div>
        </div>,
        code: ` <div class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="ui/ux review check" />
            </div>
            <div class="p-6">
                <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    UI/UX Review Check
                </h4>
                <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
                </p>
            </div>
            <div class="flex items-center justify-between p-6">
                <div class="flex items-center -space-x-3">
                    <img alt="natali craig"
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                        class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                    <img alt="Tania Andrew"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        class="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10" />
                </div>
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                    January 10
                </p>
            </div>
        </div>`
    },
    {
        hover: false,
        preview: <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div class="p-1 bg-blue-200">
            </div>
            <div class="p-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h2>
                <p class="text-gray-600 mb-6">Ideal for small businesses</p>
                <p class="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
                <ul class="text-sm text-gray-600 mb-6">
                    <li class="mb-2 flex items-center">
                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 13l4 4L19 7"></path>
                        </svg>
                        10 Users
                    </li>
                    <li class="mb-2 flex items-center">
                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 13l4 4L19 7"></path>
                        </svg>
                        Basic Features
                    </li>
                    <li class="flex items-center">
                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 13l4 4L19 7"></path>
                        </svg>
                        24/7 Support
                    </li>
                </ul>
            </div>
            <div class="p-4">
                <button
                    class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                    Select Plan
                </button>
            </div>
        </div>,
        code: `    <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div class="p-1 bg-blue-200">
      </div>
      <div class="p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">Basic Plan</h2>
        <p class="text-gray-600 mb-6">Ideal for small businesses</p>
        <p class="text-4xl font-bold text-gray-800 mb-6">$19.99</p>
        <ul class="text-sm text-gray-600 mb-6">
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            10 Users
          </li>
          <li class="mb-2 flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            Basic Features
          </li>
          <li class="flex items-center">
            <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 13l4 4L19 7"></path>
            </svg>
            24/7 Support
          </li>
        </ul>
      </div>
      <div class="p-4">
        <button
          class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Select Plan
        </button>
      </div>
    </div>`
    },
    {
        hover: false,
        preview:
            <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                </div>
                <div class="p-6">
                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Tailwind card
                    </h5>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                    </button>
                </div>
            </div>,
        code: `
<div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Tailwind card
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>`
    },
    {
        hover: false,
        preview: <div class="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" class="w-full h-64 object-cover" />
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">Beautiful Mountain View</h2>
                    <p class="text-gray-700 leading-tight mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                        vehicula elit. Nunc et ex at turpis rutrum viverra.
                    </p>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover" />
                            <span class="text-gray-800 font-semibold">John Doe</span>
                        </div>
                        <span class="text-gray-600">2 hours ago</span>
                    </div>
                </div>
            </div>
        </div>,
        code: `<div class="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606" alt="Mountain" class="w-full h-64 object-cover">
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">Beautiful Mountain View</h2>
            <p class="text-gray-700 leading-tight mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                vehicula elit. Nunc et ex at turpis rutrum viverra.
            </p>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover">
                    <span class="text-gray-800 font-semibold">John Doe</span>
                </div>
                <span class="text-gray-600">2 hours ago</span>
            </div>
        </div>
    </div>
</div>`
    },
    {
        hover: false,
        preview: <div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-4">
                    <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
                    <div class="py-2">
                        <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                            New York, NY
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 px-2">
                    <button
                        class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                        Follow
                    </button>
                    <button
                        class="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                        Message
                    </button>
                </div>
            </div>
            <div class="px-4 py-4">
                <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                    <svg class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class=""
                            d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                    </svg>
                    <span><strong class="text-black dark:text-white">12</strong> Followers you know</span>
                </div>
                <div class="flex">
                    <div class="flex justify-end mr-2">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/32.jpg" alt="" />
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/42.jpg" alt="" />
                        <span
                            class="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
                            +999
                        </span>
                    </div>
                </div>
            </div>
        </div>,
        code: `<div class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-4">
                    <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                        src="https://randomuser.me/api/portraits/women/21.jpg" alt="">
                    <div class="py-2">
                        <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">Cait Genevieve</h3>
                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path class=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                            New York, NY
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 px-2">
                    <button
                        class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                        Follow
                    </button>
                    <button
                        class="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2">
                        Message
                    </button>
                </div>
            </div>
            <div class="px-4 py-4">
                <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                    <svg class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class=""
                            d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                    </svg>
                    <span><strong class="text-black dark:text-white">12</strong> Followers you know</span>
                </div>
                <div class="flex">
                    <div class="flex justify-end mr-2">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/32.jpg" alt="">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/31.jpg" alt="">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/33.jpg" alt="">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/32.jpg" alt="">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/men/44.jpg" alt="">
                        <img class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                            src="https://randomuser.me/api/portraits/women/42.jpg" alt="">
                        <span
                            class="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10">
                            +999
                        </span>
                    </div>
                </div>
            </div>
        </div>`
    },
    {
        hover: false,
        preview: <div class="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
            <div class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
                <div class="relative w-full md:w-48 flex justify-center items-center">
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/14/07/apparel-162180_960_720.png" alt="shopping image"
                        class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
                </div>
                <form class="flex-auto p-6">
                    <div class="flex flex-wrap">
                        <h1 class="flex-auto text-xl font-semibold dark:text-gray-50">Product name</h1>
                        <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">$110.00</div>
                        <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">In stock</div>
                    </div>
                    <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                        <div class="flex space-x-2">

                            <label class="text-center">

                                <input type="radio"
                                    class="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600"
                                    name="size" value="xs" />XS
                            </label>
                            <label class="text-center">
                                <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                                    value="s" />S
                            </label>
                            <label class="text-center">
                                <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                                    value="m" />M
                            </label>
                            <label class="text-center">
                                <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                                    value="l" />L
                            </label>
                            <label class="text-center">
                                <input type="radio" class="flex items-center justify-center w-6 h-6 accent-violet-600" name="size"
                                    value="xl" />XL
                            </label>
                        </div>
                        <a href="#"
                            class="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300">Size
                            Guide
                        </a>
                    </div>
                    <div class="flex mb-4 text-sm font-medium">
                        <button type="button"
                            class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Buy
                            now</button>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-300">Free shipping on all continental US orders.</p>
                </form>
            </div>
        </div>,
        code: ``
    },
    {
        hover: false,
        preview: <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
            <div>
                <img class="object-cover h-64 w-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Converse sneakers" />
            </div>

            <div class="flex flex-col gap-1 mt-4 px-4">
                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">Converse Sneakers</h2>
                <span class="font-normal text-gray-600 dark:text-gray-300">High Top (Lemon Yellow)</span>
                <span class="font-semibold text-gray-800 dark:text-gray-50">$60</span>
            </div>

            <div class="flex gap-4 mt-4 px-4">
                <span class="sr-only">Colors available</span>

                <button aria-label="Yellow" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>

                <button aria-label="Red" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>

                <button aria-label="Blue" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>

                <button aria-label="Black" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
            </div>

            <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
                <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
                    <span class="text-base">Add to Cart</span>
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>
        </article>,
        code: ` <article class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
    <div>
      <img class="object-cover h-64 w-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Converse sneakers" />
    </div>

    <div class="flex flex-col gap-1 mt-4 px-4">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-50">Converse Sneakers</h2>
      <span class="font-normal text-gray-600 dark:text-gray-300">High Top (Lemon Yellow)</span>
      <span class="font-semibold text-gray-800 dark:text-gray-50">$60</span>
    </div>

    <div class="flex gap-4 mt-4 px-4">
      <span class="sr-only">Colors available</span>

      <button aria-label="Yellow" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"></button>

      <button aria-label="Red" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"></button>

      <button aria-label="Blue" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"></button>

      <button aria-label="Black" class="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"></button>
    </div>

    <div class="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
      <button class="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
        <span class="text-base">Add to Cart</span>
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </div>
  </article>`
    },
    {
        hover: false,
        preview: <div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">        <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" />

            <div class="flex flex-col">
                <div class="flex items-center justify-between my-4">
                    <div
                        class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                        <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                        <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                            alt="Samuel Abera avatar" />
                    </div>

                    <div class="flex gap-1 items-center justify-end text-2xl">
                        <ion-icon class="text-yellow-500" name="star"></ion-icon>
                        <p class="dark:text-white font-bold pr-4">5.0</p>
                    </div>
                </div>


                <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
                <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
                <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
            </div>
        </div>
        ,
        code: `<div class="flex flex-col gap-4 rounded-lg shadow-lg bg-white dark:bg-[#262525] group">        <img class="w-[16rem] h-[12rem] sm:w-[18rem] sm:h-[14rem] object-center aspect-square rounded-t-lg" src="https://techakim.com/sam/tg/7268/li/imgs/pizza.jpg" alt="Card Image" />

        <div class="flex flex-col">
            <div class="flex items-center justify-between my-4">
                <div
                    class="relative w-1/2 h-[4rem] flex items-center justify-end border-l-4 border-rose-600 rounded-tr-full rounded-br-full bg-rose-100 dark:bg-[#414141]">

                    <img class="absolute right-2 z-30 w-11 h-11 rounded-full border-2 border-gray-200"
                        src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                        alt="Samuel Abera avatar" />
                    <img class="absolute right-8 z-20 w-11 h-11 rounded-full border-2 border-gray-200"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8cHJvZmlsZXN8ZW58MHwwfHx8MTczNjUxNDE0NHww&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Samuel Abera avatar" />
                    <img class="absolute right-14 z-10 w-11 h-11 rounded-full border-2 border-gray-200"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxwcm9maWxlc3xlbnwwfDB8fHwxNzM2NTE0MTQ0fDA&ixlib=rb-4.0.3&q=80&w=1080"
                        alt="Samuel Abera avatar" />
                </div>

                <div class="flex gap-1 items-center justify-end text-2xl">
                    <ion-icon class="text-yellow-500" name="star"></ion-icon>
                    <p class="dark:text-white font-bold pr-4">5.0</p>
                </div>
            </div>


            <h2 class="pl-4 text-2xl font-semibold group-hover:text-rose-600 cursor-pointer dark:text-white">Pizza Slice</h2>
            <p class="pl-4 text-gray-800 dark:text-gray-300  mb-4">Cheese, Ham & Pineapple</p>
            <button class="w-fit ml-4 mb-6 text-xl text-rose-700 dark:text-white font-bold py-2 px-4 dark:border dark:border-gray-500 rounded-full uppercase">Order now</button>
        </div>
    </div>`
    },
    {
        hover: false,
        preview: <div class="bg-white rounded-lg drop-shadow p-4 dark:bg-black dark:shadow-white">
            <div class="flex flex-col justify-center items-center ">
                <img class="rounded-lg aspect-square w-64" src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/37/f0/d537f0d1-5cfd-ce67-d7ac-0c4151f63f70/23UMGIM17915.rgb.jpg/1200x1200bb.jpg" />
                <p class="mt-2 font-semibold text-md text-gray-600">I ain't worried</p>
                <p class="font-semibold text-xs text-gray-600">One Republic</p>
            </div>
            <div class="flex flex-col justify-center items-center my-4">
                <input type="range" value="30" class="rounded-lg overflow-hidden appearance-none bg-gray-200 h-1 w-full" />
                <div class="flex justify-between w-3/5 items-center my-2">
                    <button class="aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#816cfa" fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z" clip-rule="evenodd" /></svg>
                    </button>
                    <button class="aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#816cfa" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440" /></svg>
                    </button>
                    <button class=" aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
                        <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#816cfa" fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z" clip-rule="evenodd" /></svg>
                    </button>
                </div>
            </div>
        </div>,
        code: `<div class="bg-white rounded-lg drop-shadow p-4 dark:bg-black dark:shadow-white">
  <div class="flex flex-col justify-center items-center ">
    <img class="rounded-lg aspect-square w-64" src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/37/f0/d537f0d1-5cfd-ce67-d7ac-0c4151f63f70/23UMGIM17915.rgb.jpg/1200x1200bb.jpg"/>
    <p class="mt-2 font-semibold text-md text-gray-600">I ain't worried</p>
    <p class="font-semibold text-xs text-gray-600">One Republic</p>
  </div>
  <div class="flex flex-col justify-center items-center my-4">
    <input type="range" value="30"  class="rounded-lg overflow-hidden appearance-none bg-gray-200 h-1 w-full" />
    <div class="flex justify-between w-3/5 items-center my-2">
      <button class="aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#816cfa" fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z" clip-rule="evenodd"/></svg>
      </button>
      <button class="aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#816cfa" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"/></svg>
      </button>
      <button class=" aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
          <svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#816cfa" fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z" clip-rule="evenodd"/></svg>
        </button>
    </div>
  </div>
</div>`
    },
    {
        hover: false,
        preview: <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
            </a>
            <div class="px-5 pb-5">
                <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </a>
                <div class="flex items-center mt-2.5 mb-5">
                    <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <button class="button">
                        <span class="label">+ Add to card</span>
                        <span class="gradient-container">
                            <span class="gradient"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>,
        code: `<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <button class="button">
  <span class="label">+ Add to card</span>
  <span class="gradient-container">
    <span class="gradient"></span>
  </span>
</button>
        </div>
    </div>
</div>`
    },
    {
        hover: false,
        preview: <div class="w-[80%] border border-blue-200 rounded-lg shadow-md p-4">
            <div class="relative">
                <span
                    class="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    -20%
                </span>
                <button
                    class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                </button>
                <div>
                    <img
                        src="https://primecomputer.com.bd/wp-content/uploads/2024/07/oraimo-headphones.jpg"
                        alt="Product Image"
                        class="object-contain w-full h-[270px] fill"

                    />
                </div>


            </div>

            <div class="mt-4">
                <h3 class="text-gray-800 font-medium text-base">
                    Oraimo OHP-610 BoomPop 2 Dual Device Wireless Headphone
                </h3>
                <p class="uppercase text-green-600 text-xs font-medium">
                    Oraimo
                </p>
                <div class="flex space-x-1 text-orange-500 text-sm mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z" />
                    </svg>
                </div>
                <div class="flex items-end justify-between">
                    <div class="flex items-baseline space-x-2 mt-2">
                        <span class="text-blue-600 text-xl font-semibold">$806.33</span>
                        <span class="text-gray-400 text-sm line-through">$1500.00</span>
                    </div>
                    <button
                        class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                    </button>
                </div>
            </div>
        </div>
        ,
        code: `  <div class="w-80 border border-blue-200 rounded-lg shadow-md p-4">
  <!-- Discount Badge -->
  <div class="relative">
    <span
      class="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
      -20%
    </span>
    <!-- Wishlist Icon -->
    <button
      class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    </button>
    <!-- Product Image -->
  <div>
      <Image
      src="https://primecomputer.com.bd/wp-content/uploads/2024/07/oraimo-headphones.jpg"
      alt="Product Image"
      class="object-contain w-full h-[270px] fill"
      
    />
  </div>
  
   
  </div>

  <!-- Product Details -->
  <div class="mt-4">
    <h3 class="text-gray-800 font-medium text-base">
      Oraimo OHP-610 BoomPop 2 Dual Device Wireless Headphone
    </h3>
    <p class="uppercase text-green-600 text-xs font-medium">
      Oraimo
    </p>
    <!-- Ratings -->
    <div class="flex space-x-1 text-orange-500 text-sm mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
      </svg>
    </div>
    <!-- Pricing -->
    <div class="flex items-end justify-between">
      <div class="flex items-baseline space-x-2 mt-2">
      <span class="text-blue-600 text-xl font-semibold">$806.33</span>
      <span class="text-gray-400 text-sm line-through">$1500.00</span>
    </div>
     <button
      class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
     <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
    </button>
    </div>
  </div>
</div>
`
    },
]

function Cards() {
    return (
        <div className='p-4  min-h-screen bg-gradient-to-b from-blue-50
       to-white'>
            <ComponentsTitleSubTitle title={"Mokshith UI Cards"} subTitle={"A unique collection of Copy & Paste Tailwind CSS components with Mokshith UI."} />
            <div className="mt-8 grid grid-cols-1  lg:grid-cols-2 gap-6">
                {componentsOFLight.map((component, index) => (
                    <LightTheme key={index} {...component} />
                ))}
            </div>
        </div>
    )
}

export default Cards