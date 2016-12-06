import React from 'react';
import Card from './Card';

export default class CardListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
        {this.props.data.map(function(item, i){
            return <Card key={i} data={item}></Card>;
        })}
        </div>
    );
  }
}
