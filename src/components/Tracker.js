import React from 'react';
import TrackerOptionsButton from './OptionsButton';

function Tracker({ classType, title, time, timeSet, timeOther }) {
  return (
    <div className="tracker">
      <div className={"tab " + classType}></div>
      <div className="tracker-main">
        <div className="tracker-header">
          <h2 className='tracker-title'>{title}</h2>
          <TrackerOptionsButton />
        </div>

        <p className='tracker-time'>{time}</p>
        <div className="tracker-footer">
          <p className="tracker-time-set">{timeSet}</p>
          <p className="tracker-time-other">{timeOther}</p>
        </div>
      </div>

    </div>)
}

export default Tracker;
