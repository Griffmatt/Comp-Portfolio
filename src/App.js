import Taskbar from './Components/Taskbar';
import Icons from './Components/Icons';
import Notes from './Components/Notes';


import './CSS/Taskbar.css';
import './CSS/Icons.css';
import './CSS/Notes.css'

function App() {
  return (
    <div className="App">
      <Icons/>
      <Notes/>
      <Taskbar/>
    </div>
  );
}

export default App;
