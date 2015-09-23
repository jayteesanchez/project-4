import React          from 'react';
import {RouteHandler} from 'react-router';
import Navbar         from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <RouteHandler />
        <footer>
          <div className='container'>
            <div className='row'>
                <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux (alt) architecture and server-side rendering.</p>
                <p>You may view the <a href='https://github.com/jayteesanchez/project-4'>Source Code</a> behind this project on GitHub.</p>
                <p>© 2015 Jaytee Sanchez</p>
            </div>
          </div>
          </footer>
      </div>
    );
  }
}

export default App;
