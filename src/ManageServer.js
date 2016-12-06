import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import CardList from './CardList';

const head = ['User', 'Start', 'End'];
const data = [
  {
    userName: 'Tanaka',
    start: '2016/09/12',
    end: '2016/10/05',
  },
  {
    userName: 'Tanaka',
    start: '2016/09/12',
    end: '2016/10/05',
  },
  {
    userName: 'Tanaka',
    start: '2016/09/12',
    end: '2016/10/05',
  },
];

export default class ManageServerComponent extends Component {
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <CardList head={head} data={data} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

