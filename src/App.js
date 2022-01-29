import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/Topbar';

function App() {
  return <>
    <div className="App">
      <Sidebar/>
     
      <div style={{marginLeft: "300px"}}>
          <TopBar/>
      </div>
    </div>
  </>
}

export default App;
