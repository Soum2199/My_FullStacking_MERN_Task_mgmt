import About from './About';
import './App.css';
import Login from './Login';
import Navbar from './Navbar';
import Signin from './Signin';
import TaskManager from './TaskManager';
import { Route, Routes,NavLink } from 'react-router-dom';
// import Usage from './Usage';
import Creating from './Creating';
import Updating from './Updating';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/task' element={<TaskManager/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      {/* <Route path='/addtask' element={<Usage/>}></Route> */}
      <Route path='/create' element={<Creating/>}></Route>
      <Route path='/update/:id' element={<Updating/>}></Route>
    </Routes>
    </>
  );
}

export default App;
