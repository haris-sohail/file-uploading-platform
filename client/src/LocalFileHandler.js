import React, { useEffect } from 'react'
import { pushFile } from './fileSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function LocalFileHandler() {
  const dispatch = useDispatch()
  let useEffectCalled = false;

  useEffect(() => {
    if (!useEffectCalled) {
      useEffectCalled = true

      // get the files from the db
      axios.get('http://localhost:5000/getFiles')
        .then(res => {
          if (res.data) {
            res.data.forEach(file => {
              const temp_file = {
                name: file.fileName,
                size: file.fileSize,
                type: file.fileType
              }
              dispatch(pushFile(temp_file))
            })
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

  }, [])
  return (
    <div>

    </div>
  )
}

export default LocalFileHandler
