import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './app.scss';

import Nav from './../nav/nav';
import Home from './../pages/home/home';
import About from './../pages/about/about';
import Work from './../pages/work/work';
import Skills from './../pages/skills/skills';
import Contact from './../pages/contact/contact';
import Attribution from './../pages/attribution/attribution';

function App({ location }) {
  return (
    <div className='app-body'>
      <Nav />
      <main>
        <TransitionGroup className="main-container">
          <CSSTransition key={location.key} classNames="fade" timeout={{ enter: 500, exit: 500 }}>
            <Switch location={location}>
              <Route path='/' exact component={Home} />
              <Route path='/work' component={Work} />
              <Route path='/skills' component={Skills} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/attribution' component={Attribution} />
              <Route component={Home} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
}

export default withRouter(App);
