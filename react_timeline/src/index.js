import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {TimelinePage} from "./pages/TimelinePage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Header} from "./components/Timeline/Header"
import {Main} from "./pages/Main";
import {Mypage} from "./pages/Mypage";

function App() {
    return<>
        <Header/>
        <Switch>
            <Route exact path="/"><Main/></Route>
        <Route path="/mypage"><Mypage/></Route>
        <Route path="/timeline"><TimelinePage/></Route>
        <Route path="/">Not found</Route>
        </Switch>
        </>
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
