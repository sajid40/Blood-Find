
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Bloodrequest from './components/Bloodrequest/Bloodrequest';
import Blddonarlist from './components/Blddonarlist/Blddonarlist';
import Newsfeed from './components/Newsfeed/Newsfeed';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Registration from './components/Registration/Registration';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path= "/" element={<Home></Home>}></Route>
      <Route path= "/Bloodrequest" element={<Bloodrequest></Bloodrequest>}></Route>
      <Route path= "/Newsfeed" element={<Newsfeed></Newsfeed>}></Route>
      <Route path= "/Blddonarlist" element={<Blddonarlist></Blddonarlist>}></Route>
      <Route path= "/Contact" element={<Contact></Contact>}></Route>
      <Route path= "/About" element={<About></About>}></Route>
      <Route path= "/Registration" element={<Registration></Registration>}></Route>

      </Routes>
    </div>
  );
}

export default App;
