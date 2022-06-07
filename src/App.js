import Taskbar from './Components/Taskbar';
import Icons from './Components/Icons';
import Notes from './Components/Notes';
import Projects from './Components/Projects'


import './CSS/Taskbar.css';
import './CSS/Icons.css';
import './CSS/Notes.css';
import './CSS/Projects.css';

function App() {
  return (
    <div className="App">
      <Icons/>
      <Notes/>
      <Projects/>
      <Taskbar/>
    </div>
  );
}

export default App;
