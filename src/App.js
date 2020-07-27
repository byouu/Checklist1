import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.listItem = [
      {
        id: 1,
        title: 'New thing to do',
        date: 'Tue, December 25'
      },
      {
        id: 2,
        title: 'Second thing to do',
        date: 'Wednesday, December 26'
      }
    ]
  }
  render(){
    return(
      <div className="wrap">
        <div className="navbar">
            <div className="menu">
                <img src="./menu.svg" alt="menu"/>
            </div>
            <div className="exit">
                <img src="x.svg" alt="menu"/>
            </div>
        </div>
      <div className="title-container">
          <h1>Checklist #1</h1>
          <p className="progress">Completed 0 of 7</p>
      </div>
      <div className="list-container">
        {
          this.listItem.map((item)=>{
            return(
              <div className="list-item-container" key={item.id}>
                <div className="list-title-container">
                  <p className="list-title">
                  {item.title}
                  </p>
                  <p className="date">
                    {item.date}
                  </p>
                </div>
                <input type="checkbox" id="checkbox" name="checkbox"/>
              </div>
            )
          })
        }
      </div>
      <div className="button-wrap">
        <button className="add-btn">
            <img src= {"+.svg"} alt="+"/>
        </button>
      </div>
  </div>
    )
  }
}


export default App;
