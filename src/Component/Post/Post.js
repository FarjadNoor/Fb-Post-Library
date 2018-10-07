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
      <div className="myCard" >
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
            <CardMedia className="gridHeight">
              <FbImageGrid
                images={postObj.images}
              />
            </CardMedia>
            <CardActions>

              <div className="emoticons" >
                <div id="emoti">
                  <FacebookEmoji type="like" size="sm" />
                  <FacebookEmoji type="love" size="sm" />
                  <FacebookEmoji type="wow" size="sm" />
                  <FacebookEmoji type="yay" size="sm" />
                  <FacebookEmoji type="angry" size="sm" />
                  <FacebookEmoji type="haha" size="sm" />
                  <FacebookEmoji type="sad" size="sm" />
                </div>
                <FlatButton label="Like" />
              </div>
              <FlatButton label="Comment" />
              <FlatButton label="Share" />
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}
