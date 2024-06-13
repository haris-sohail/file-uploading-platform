import React from 'react'

function File({ name, size, type }) {
    return (
        <div className='file-container flex flex-col w-3/4 h-28 border-2 rounded-xl border-black bg-white'>
            <h6 className='flex justify-center'>{name}</h6>
            <div className='flex flex-col justify-center flex-1 ml-2'>
                <h6>Size: {Math.round(size / 1024)} MB</h6>
                <h6>Type: {type}</h6>
            </div>
        </div>
    )
}

export default File
