import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const style = {
  margin: 10,
};

export default class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
  }

  render() {
    return (
        <Table style={style}>
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              {this.props.head.map(function(head, i){
                return <TableHeaderColumn key={i}>{head}</TableHeaderColumn>;
              })}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={this.state.showCheckboxes}>
            {this.props.data.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.userName}</TableRowColumn>
                <TableRowColumn>{row.start}</TableRowColumn>
                <TableRowColumn>{row.end}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    );
  }
}
