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
    <div className='self-center'>ID Verification</div>
    <input type='text' placeholder='Document Type' className='event-input'/>
    <label htmlFor='file-upload' className='self-center outline round'>Upload</label>
    <input id='file-upload' type="file" style={{"display" : "none"}} onChange={onFileChange}/>
    {link && <a className='self-center' href={link} target='_blank'>Document Uploaded</a>}
    </div>
  )
}
