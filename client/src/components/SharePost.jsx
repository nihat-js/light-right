import axios from 'axios'

import { useRef } from 'react'
import './SharePost.scss'


export default function SharePost() {

  const inptText = useRef()

  const sharePost = () => {

    axios.post('http://localhost:1000/api/share', {}, {
      headers: {
        _nt: document.cookie
      }
    }).then(res => {
      console.log(res)
    })
  }

  return (
    <div className='share-post-component'>
      <div className="container">
        <input ref={inptText} type="text" placeholder='Even the most expensive idea does not  read bofore written ' />
        <div className="tags">
          <span className="tag"> Idea </span>
          <span className="tag"> Personal </span>
        </div>
        <div className="action">
          <button className="btn-purple" onClick={() => sharePost()}  > Sharee  </button>
          <button className="btn-purple"> Add image </button>
          <button className="btn-purple"> Add to draft </button>
        </div>
      </div>
    </div>
  )
}
