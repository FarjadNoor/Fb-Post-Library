import React from 'react';
import '../../App.css';
import FacebookEmoji from 'react-facebook-emoji';
import FbImageGrid from 'react-fb-image-grid';
import Moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Judge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { postObj } = this.props;
    console.log(postObj.createdAt)
    return (
      <div className="myCard">
        <MuiThemeProvider>
          <Card>
            <CardHeader
              title={postObj.createdBy}
              subtitle={Moment(postObj.createdAt).startOf('day').fromNow()}
              avatar={postObj.avatar}
            />
            <CardText>
              {postObj.description}
            </CardText>
            <CardMedia className="">
              <FbImageGrid
                images={postObj.images}
                
              />
            </CardMedia>
            <CardActions>
              <FlatButton label="Like" />
              <FlatButton label="Comment" />
              <FlatButton label="Share" />
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}
