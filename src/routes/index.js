import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import About from '../pages/About';
import Projects from '../pages/Projects';
import page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />

      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />

      <Route path="*" exact component={page404} />
    </Switch>
  );
}
