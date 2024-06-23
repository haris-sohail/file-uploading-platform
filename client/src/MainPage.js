import React from 'react'
import LocalFileHandler from './LocalFileHandler';
import Files from './Files';
import Uploader from './Uploader';
import { useLocation } from 'react-router-dom';

function MainPage() {
    const location = useLocation();
    const data = location.state
    const username = data.username

    return (
        <div className="main-page h-screen">
            <LocalFileHandler username={username} />
            <Files />
            <div className='uploader-container-app flex justify-center items-center h-full'>
                <Uploader username={username} />
            </div>
        </div>
    )
}

export default MainPage
