import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Header from './Header';
import Table from './Table';
import CardList from './CardList';

injectTapEventPlugin();

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

export default class TopComponent extends Component {
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <Table head={head} data={data} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
