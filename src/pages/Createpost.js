import React from 'react'

function Createpost() {
  return (
    <>
      <div className="createpostContainer">
        <div>
          <label htmlFor="title">Title</label>
          <div>
            <input type="text" id='title' />
          </div>

          <label htmlFor="desc">Description</label>
          <div>
            <textarea name="" id="desc" cols="60" rows="5"></textarea>
          </div>
          <input type="file" />
          <div className='btns d-flex mt-4'>
            <button>edit</button>
            <button>save/Update</button>
            <button>delete</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Createpost