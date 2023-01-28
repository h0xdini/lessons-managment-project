import React from 'react'
import { BsPlus } from 'react-icons/bs'

const ImageSelect = () => {
  return (
    <div className='image-select'>

        <label className="add">
            <span>
                <BsPlus />
            </span>
		    <input type="file" id='picture_btn' style={{display: 'none'}} />
	    </label>

        <label className='title'>Ajouter des photos du local</label>
    </div>
  )
}

export default ImageSelect