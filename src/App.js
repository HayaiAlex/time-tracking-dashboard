import './App.css';
import { useState, useEffect } from 'react';
import domImg from './images/dom.jpg';
import Tracker from './components/Tracker';
import MainCard from './components/MainCard';

function App() {
  useEffect(() => {
    document.title = "Time Tracker"
  }, []);

  const [data, setData] = useState(fetchData);
  const [active, setActive] = useState('Daily');

  async function fetchData() {
    console.log('fetching json')
    const data = await fetch('https://hayaialex.github.io/time-tracking-dashboard/data.json');
    const jsonData = await data.json();
    console.log(jsonData);

    setData(jsonData);
  }

  const getData = (index, period, time) => {
    try {
      return data[index].timeframes[period][time];
    } catch {
      return 0;
    }
  }

  const getTrackers = () => {
    let trackers = [];

    for (let i = 0; i < data.length; i++) {
      let tracker = <Tracker
        key={data[i].title}
        classType={'tab-' + data[i].title.toLowerCase().replace(' ', '')}
        title={data[i].title}
        time={`${getData(i, active.toLowerCase(), 'current')}hrs`}
        timeSet={active}
        timeOther={`${getData(i, active.toLowerCase(), 'previous')}hrs`}
      />
      trackers.push(tracker);
    }
    return trackers;
  }

  const timeClicked = (e) => {
    setActive(e.target.innerText)
  }


  return (
    <div className="App">

      <div className="dashboard">
        <MainCard img={domImg} name="Alex Adams" activeTime={active} clicked={timeClicked} />

        {getTrackers()}

      </div>

    </div>
  );
}

export default App;
