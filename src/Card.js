import React from 'react';
import { Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default class CardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
  <Card style={style}>
    <CardHeader
      title={this.props.data.envName}
      subtitle={this.props.data.envStat}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText>
      概要:{this.props.data.userName}<br />
      使用期間：{this.props.data.start}_{this.props.data.start}
    </CardText>
    <CardActions expandable={true}>
      <div>
        <RaisedButton label="Delete" secondary={true} style={style} />
      </div>
    </CardActions>
  </Card>
    );
  }
}
