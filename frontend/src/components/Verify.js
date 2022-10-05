import React, {useState} from 'react'
import {upload} from '../firebase';

export default function Verify() {
    const [link,setLink] = useState('');
    const onFileChange = (e) => {
        const [filenew] = e.target.files;
        upload(filenew,setLink);
      };
  return (
    <div className='screen'>
    <div className='signup-text verify-header'>ID Verification</div>
    <input type='text' placeholder='Document Type' className='signup-input'/>
    <label htmlFor='file-upload' className='button signup-button verify-button'>Upload</label>
    <input id='file-upload' type="file" style={{"display" : "none"}} onChange={onFileChange}/>
    {link && <a className='self-center' href={link} target='_blank' rel="noreferrer">Document Uploaded</a>}
    </div>
  )
}
