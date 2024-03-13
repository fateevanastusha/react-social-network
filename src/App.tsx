import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./pages/Dialogs/Dialogs";
import Profile from "./pages/Profile/Profile";

const App = (props : {state : object, dispatch : any}) => {
  const {state, dispatch} = props
  return (
      <Router>
        <div className={'appWrapper'}>
            <Header/>
            <Navbar/>
            <div className={'content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile state={state} dispatch={dispatch}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs state={state} dispatch={dispatch}/>}/>
                </Routes>
            </div>
        </div>
      </Router>

  );
}

export default App;
