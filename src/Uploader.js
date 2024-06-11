import React from 'react';
import classNames from 'classnames';
import uploadImg from './assets/upload.png'

function Uploader() {
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
        <div className={uploaderClasses}>
            <img src={uploadImg} className='h-10 w-10'></img>
        </div>
    );
}

export default Uploader;
