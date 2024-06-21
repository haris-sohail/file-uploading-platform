import React from 'react'
import LocalFileHandler from './LocalFileHandler';
import Files from './Files';
import Uploader from './Uploader';

function MainPage() {
    return (
        <div className="main-page h-screen">
            <LocalFileHandler />
            <Files />
            <div className='uploader-container-app flex justify-center items-center h-full'>
                <Uploader />
            </div>
        </div>
    )
}

export default MainPage
