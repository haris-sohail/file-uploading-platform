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

      axios.get('http://localhost:5000/getAllFilesFromHDD')
        .then(res => {
          if (res.data) {
            const files = res.data.files;

            // set all files in the redux store

            files.forEach(file => {
              dispatch(pushFile(file))
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

  }, [])
  return (
    <div>

    </div>
  )
}

export default LocalFileHandler
