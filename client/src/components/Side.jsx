import './Side.scss'

export default function Side() {
  return (
    <div className='side-component'>
      <div className="content">
        <div className="pp">
          <span></span>
        </div>
        <h3 className="username">  nihat0 </h3>
        <div className="stats">
          <span className="following-count"> 0 following </span>
          <span className="followers-count"> 0 fllowers   </span>
          <span className="posts-count"> 0 post </span>
        </div>
        <div className="share">
          <button className="btn-blue"> Share post </button>
        </div>
        <div className="edit">
          <button className='btn-purple'> Edit My Profile </button>
        </div>
        <div className="liked">
          <button className='btn-purple'> Liked </button>
        </div>
        <div className="saved">
          <button className='btn-purple'> Saved </button>
        </div>

      </div>
    </div>
  )
}
