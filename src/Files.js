import React, { useState } from 'react'
import closeImg from './assets/close.png'

function Files() {
    const [isFilesOpen, setIsFilesOpen] = useState(false)
    const [files, setFiles] = useState([])

    return (
        <div className={`files-container absolute h-full w-48 transition duration-700 ${isFilesOpen ? 'bg-blue-100' : ''}`}>
            {/* Files button only shows when files are not open */}
            {!isFilesOpen && (
                <button
                    className='border-2 border-blue-500 rounded-xl px-4 py-2 mx-4 my-4 hover:bg-blue-100 transition'
                    onClick={() => setIsFilesOpen(true)}
                >
                    <h6>FILES</h6>
                </button>
            )}

            {/* Close button only shows when files are open */}
            {isFilesOpen && (
                <button
                    className='mx-4 my-4 transition'
                    onClick={() => setIsFilesOpen(false)}
                >
                    <img src={closeImg} alt='close-img'></img>
                </button>
            )}
        </div>
    )
}

export default Files
