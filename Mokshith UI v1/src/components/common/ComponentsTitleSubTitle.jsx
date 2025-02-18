import React from 'react'

function ComponentsTitleSubTitle({ title, subTitle }) {
    return (
        <div className="text-center py-5 ">
            <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 ">{title}</h1>
            <p className="text-gray-600 mb-6  text-base md:text-xl lg:text-2xl py-4">{subTitle}</p>
        </div>
    )
}

export default ComponentsTitleSubTitle