import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Page2 from './components/page2Component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App}/>
      <Route path='/page2' component={Page2}/>
    </Router>
  </div>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
