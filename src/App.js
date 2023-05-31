import { Outlet } from 'react-router-dom';
import './App.css';
import './pages/Sass.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Outlet />
    </div>
  );
}

export default App;
