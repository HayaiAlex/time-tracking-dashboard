import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import domImg from './images/dom.jpg';
import Tracker from './components/Tracker';
import MainCard from './components/MainCard';

function App() {
  return (
    <div className="App">

      <div className="dashboard">
        <MainCard img={domImg} name="Alex Adams" active="Daily" />

        <Tracker classType="tab-work" title="Work" time="36hrs" timeSet="Last Month" timeOther="32hrs" />
        <Tracker classType="tab-play" title="Play" time="36hrs" timeSet="Last Month" timeOther="32hrs" />
        <Tracker classType="tab-exercise" title="Exercise" time="36hrs" timeSet="Last Month" timeOther="32hrs" />
        <Tracker classType="tab-social" title="Social" time="36hrs" timeSet="Last Month" timeOther="32hrs" />
        <Tracker classType="tab-study" title="Study" time="36hrs" timeSet="Last Month" timeOther="32hrs" />
        <Tracker classType="tab-selfcare" title="Self Care" time="36hrs" timeSet="Last Month" timeOther="32hrs" />
      </div>

    </div>
  );
}

export default App;
