import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ResultsLaugh from '../pages/ResultsLaugh';
import ResultsBrainDate from '../pages/ResultsBrainDate';
import ResultsRandom from '../pages/ResultsRandom';
import ShowLaugh from '../pages/ShowLaugh';
import ShowBrainDate from '../pages/ShowBrainDate';
import ShowRandom from '../pages/ShowRandom';



export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route exact path='/laughs' component={ ResultsLaugh }/>
    <Route exact path='/engageretro' component={ ResultsBrainDate }/>
    <Route exact path='/random' component={ ResultsRandom }/>
    <Route path='/random/pie' component={ ShowRandom }/>
    <Route path='/laughs/cat' component={ ShowLaugh }/>
    <Route path='/engageretro/crossword' component={ ShowBrainDate }/>
  </Switch>
);