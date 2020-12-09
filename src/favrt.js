import React, { Component } from 'react';
import './App.css';

class Fvrt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: '',
      newData: [],
      favData: []
    }
  }

  render() {
    const favData = this.props.favrtImages;
    console.log("fav", favData)
    console.log(this.props, "abc112", this.props.handleDelete)
    return (
      <div className="maindiv">
        <div className='favrtImg'>
          {this.props.favrtImages.map((data, i) =>
            <img className="image" src={data.dogs} onClick={
              (e) => {
                debugger
                this.props.handleDelete(i)
              }} />
          )}
        </div>

      </div>
    );
  }
}
export default Fvrt;