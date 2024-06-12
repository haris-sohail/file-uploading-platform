import React, { useState } from 'react'

function Files() {
    const [isFilesClicked, setIsFilesClicked] = useState(false)

    return (
        <div className='files-container absolute h-16 w-full flex items-center justify-end p-10'>
            <button className='hover:bg-gray-200 transition w-32 h-12'>
                FILES
            </button>
        </div>
    )
}

export default Files
