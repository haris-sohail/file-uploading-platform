import React, { useEffect, useState } from 'react'
import closeImg from './assets/close.png'
import { useSelector } from 'react-redux'
import File from './File'

function Files() {
    const [isFilesOpen, setIsFilesOpen] = useState(false)
    const files = useSelector((state) => state.file?.files || []);
    const [filesComp, setFilesComp] = useState([])

    useEffect(() => {
        if (files) {
            const filesComponent = files.map((file, index) => (
                <File
                    key={index}
                    name={file.name}
                    size={file.size}
                    type={file.type}
                />
            ));

            setFilesComp(filesComponent);
        }
    }, [files]);

    return (
        <div className={`files-container-main flex flex-col absolute h-full w-1/4 w-[50vmin] ${isFilesOpen ? 'bg-blue-100' : ''}`}>
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

            <div className='files-container flex-1 flex items-center flex-col gap-4'>

                {isFilesOpen && (
                    (filesComp.length != 0) ? (
                        filesComp
                    ) : (
                        <div> <h3>No files</h3> </div>
                    )
                )}
            </div>


        </div>
    )
}

export default Files
