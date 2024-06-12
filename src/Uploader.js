import React, { useRef } from 'react';
import classNames from 'classnames';
import uploadImg from './assets/upload.png'

function Uploader() {
    const fileInputRef = useRef(null)

    const handleDivClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            console.log("Selected file: ", file);
        }
    }

    const uploaderClasses = classNames(
        'uploader-container',
        'h-3/4',
        'w-3/4',
        'border-4',
        'border-gray-400',
        'rounded-3xl',
        'shadow-xl',
        'hover:bg-gray-200',
        'transition',
        'hover:cursor-pointer',
        'flex',
        'items-center',
        'justify-center'
    );

    return (
        <div className={uploaderClasses} onClick={handleDivClick}>
            <img src={uploadImg} className='h-10 w-10' alt='upload-icon'></img>
            <input
                type='file'
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default Uploader;
