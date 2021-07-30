/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
 import AppContainer from './containers/AppContainer';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import TodoActions from './data/TodoActions';
import PubSubService from './services/PubSubService';

const rendering = () => {
    ReactDOM.render(<AppContainer />, document.getElementById('todoapp'));
}
rendering();
 
 TodoActions.addTodo('My first task');
 TodoActions.addTodo('Another task');
 TodoActions.addTodo('Finish this tutorial');
  
PubSubService.subscribe(rendering)
