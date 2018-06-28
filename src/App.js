import React, { Component } from 'react'

import { BrowserRouter as Router,Route,Link } from 'react-router-dom'

import Home from './Home'
import Sobre from './Sobre'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-inverse'>
            <div className='container'>
                <div className='navbar-header'>
                  <a href='/' className='navbar-brand'>
                    Gerenciador de Produtos
                  </a>
                </div>
                <ul className='nav navbar-nav'>
                  <li><Link to='/Home'>Home</Link></li>
                  <li><a href='/'>Produtos</a></li>
                  <li><Link to='/Sobre'>Sobre</Link></li>
                </ul>
            </div>
          </nav>
          <div className='container'>
            <Route exact path='/home' component={Home} />
            <Route exact path='/sobre' component={Sobre} />
          </div>          
        </div>
      </Router>
    )
  }
}

export default App
