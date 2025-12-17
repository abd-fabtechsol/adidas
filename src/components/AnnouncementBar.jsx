import xMark from '../assets/x-mark.png';

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <span>LIVE RACE STREAM FROM GATOR NATIONALS IN SARASOTA, FL / </span>
        <a href="#" className="watch-link">WATCH NOW</a>
      </div>
      <button className="close-btn">
        <img src={xMark} alt="Close" />
      </button>
    </div>
  );
}

export default AnnouncementBar;
