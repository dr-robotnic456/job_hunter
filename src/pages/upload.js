import axios from 'axios';
import React, { useState } from 'react'

function Upload() {
    const [file, setFile] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('file', file)

        axios.post("user",{data: 'form', "content-type": "multipart/form-data"}, formdata)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="upload" id="upload" onChange={(e) => setFile(e.target.files[0])}/>
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default Upload
