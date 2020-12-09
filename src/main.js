import React, { Component } from 'react';
import Fvrt from './favrt.js'
import './App.css';

class FetchImages extends Component{
  constructor(props){
    super(props);
    this.state={
      breed:'',
      newData:[],
      favData:[]
    }
  }
  
  async showImages(breed) {
   const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)
    const data = await response.json();
      const items = data.message.map((item, index) =>{
        return{id:index, dogs:item, marked:false}
      })
      this.setState({ newData:items})
       }
   handleFavourite (e,data){
  let  arr= this.state.newData.map((item, index) =>{ 
    if (item.dogs === data.dogs) {
      if(item.marked == false){
        item.marked = true
        this.setState({ favData:[...this.state.favData,item]}) 
      }
      return item
    }
    return item
    })
    this.setState({newData:arr})
    //console.log("arr",arr);
    }
    handleDelete(i){
        let favData = this.state.favData;
        favData.splice(i,1);
        this.setState({
            favData: favData
          });
    }
    
  render(){
   let newData = this.state.newData;
   
  return(
    <div>
      <input    className="txt"
                type="text"
                placeholder="Enter breed"
                value={this.state.breed}
                onChange={e => this.setState({ breed: e.target.value })}
              />
      <button className="btn" onClick={e => this.showImages(this.state.breed)}>Submit</button>

        <div className="fetchImg">
      {newData.map((data,i) => 
        <img className="image" src={data.dogs} onClick={(e) => this.handleFavourite(e,data) }/>
        )}
       </div> 

      <h3 className="favtText"> Favourite Images </h3>
      <div>
        <Fvrt favrtImages = {this.state.favData} />
      </div>
    </div>
  );
      } 
}

export default FetchImages;