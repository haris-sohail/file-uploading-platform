import React, { useRef } from 'react';
import classNames from 'classnames';
import uploadImg from './assets/upload.png';
import { useDispatch } from 'react-redux';
import { pushFile } from './fileSlice';
import axios from 'axios';
import toast from 'react-hot-toast';

function Uploader({username}) {
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileMetaData = {
                name: file.name,
                size: file.size,
                type: file.type,
                lastModified: file.lastModified
            };

            dispatch(pushFile(fileMetaData));

            // Upload file to DB
            const formData = new FormData();
            formData.append('file', file);
            formData.append('username', username);

            axios.post('http://localhost:5000/uploadFileDB', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    if (res.data) {
                        toast.success("Uploaded successfully");
                    }
                })
                .catch(err => {
                    console.log(err);
                    toast.error("Error uploading file to server, unreachable");
                });
        }
    };

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
            <img src={uploadImg} className='h-10 w-10' alt='upload-icon' />
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
