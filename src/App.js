import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import domImg from './images/dom.jpg';

function App() {
  return (
    <div className="App">

      <div className="dashboard">
        <div className="main-card">
          <div className="main-card-header">
            <img src={domImg} alt="" className='main-card-header-img' />
            <p>Report for</p>
            <p className='name'>Jeremy Robson</p>
          </div>
          <div className="main-card-times">
            <p>Daily</p>
            <p className='active'>Weekly</p>
            <p>Monthly</p>
          </div>
        </div>

        <div className="tracker">
          <div className="tab tab-work"></div>
          <div className="tracker-main">
            <div className="tracker-header">
              <h2 className='tracker-title'>Work</h2>
              <FontAwesomeIcon className='tracker-button' icon={faEllipsisH} />
            </div>

            <p className='tracker-time'>32hrs</p>
            <div className="tracker-footer">
              <p className="tracker-time-set">Last Week</p>
              <p className="tracker-time-other">36hrs</p>
            </div>
          </div>

        </div>

        <div className="tracker">
          <div className="tab tab-play"></div>
          <div className="tracker-main">
            <div className="tracker-header">
              <h2 className='tracker-title'>Play</h2>
              <FontAwesomeIcon className='tracker-button' icon={faEllipsisH} />
            </div>

            <p className='tracker-time'>32hrs</p>
            <div className="tracker-footer">
              <p className="tracker-time-set">Last Week</p>
              <p className="tracker-time-other">36hrs</p>
            </div>
          </div>

        </div>

        <div className="tracker">
          <div className="tab tab-study"></div>
          <div className="tracker-main">
            <div className="tracker-header">
              <h2 className='tracker-title'>Study</h2>
              <FontAwesomeIcon className='tracker-button' icon={faEllipsisH} />
            </div>

            <p className='tracker-time'>32hrs</p>
            <div className="tracker-footer">
              <p className="tracker-time-set">Last Week</p>
              <p className="tracker-time-other">36hrs</p>
            </div>
          </div>

        </div>

        <div className="tracker">
          <div className="tab tab-exercise"></div>
          <div className="tracker-main">
            <div className="tracker-header">
              <h2 className='tracker-title'>Exercise</h2>
              <FontAwesomeIcon className='tracker-button' icon={faEllipsisH} />
            </div>

            <p className='tracker-time'>32hrs</p>
            <div className="tracker-footer">
              <p className="tracker-time-set">Last Week</p>
              <p className="tracker-time-other">36hrs</p>
            </div>
          </div>

        </div>

        <div className="tracker">
          <div className="tab tab-social"></div>
          <div className="tracker-main">
            <div className="tracker-header">
              <h2 className='tracker-title'>Social</h2>
              <FontAwesomeIcon className='tracker-button' icon={faEllipsisH} />
            </div>

            <p className='tracker-time'>32hrs</p>
            <div className="tracker-footer">
              <p className="tracker-time-set">Last Week</p>
              <p className="tracker-time-other">36hrs</p>
            </div>
          </div>

        </div>

        <div className="tracker">
          <div className="tab tab-selfcare"></div>
          <div className="tracker-main">
            <div className="tracker-header">
              <h2 className='tracker-title'>Self Care</h2>
              <FontAwesomeIcon className='tracker-button' icon={faEllipsisH} />
            </div>

            <p className='tracker-time'>32hrs</p>
            <div className="tracker-footer">
              <p className="tracker-time-set">Last Week</p>
              <p className="tracker-time-other">36hrs</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
