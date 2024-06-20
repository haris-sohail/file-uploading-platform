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
      
    }

  }, [])
  return (
    <div>

    </div>
  )
}

export default LocalFileHandler
