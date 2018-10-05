import React, { Component } from 'react';
import './App.css';
import Post from './Component/Post/Post'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {
    const postObj = {
      createdBy: 'Farjad Noor',
      avatar: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      description: "I'm not feeling good today!",
      images: [
        'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        'https://images.pexels.com/photos/37349/rose-beautiful-beauty-bloom.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      ],
      createdAt: Date.now(),
      likes: []
    }

    return (
      <div>
        <Post postObj={postObj} />
      </div>

    );
  }
}

export default App;
