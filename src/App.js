import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      listItem:[
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
      ],
      ItemInputValue: '',
      ItemDateValue: ''
    }
  }

  handleItemInputChange = (e) =>{
    this.setState({ItemInputValue:e.target.value})
  }
  handleItemInputDateChange = (e) =>{
    this.setState({ItemDateValue:e.target.value})
  }

  handleAddButtonClick = (e) =>{
    e.preventDefault()
    var item = {
      id:Date.now(),
      title:this.state.ItemInputValue,
      date:this.state.ItemDateValue,
    }

    var newListItem = [item, ...this.state.listItem]

    this.setState({
      listItem:newListItem,
      ItemInputValue:'',
      ItemDateValue:''
    })
    console.log(Date.now())
  }

  handleItemDelete = (e) => {
    var itemIdToDelete = parseInt(e.target.id)
    var items = this.state.listItem

    var filteredItems = items.filter((item)=>{
      console.log('ids' + item.id) 
      console.log('delete' + itemIdToDelete) 
      return item.id !== itemIdToDelete
    })

    this.setState({listItem:filteredItems})
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
          <h1>Checklist #2</h1>
          <p className="itemsCompleted">Completed 0 of 7</p>
      </div>
      <div className="list-container">
        {
          this.state.listItem.map((item)=>{
            return(
              <div className="list-item-container" key={item.id}>
                <div className="list-title-container">
                  <p className="list-title">
                  {item.title}
                  <i id={item.id} className="fas fa-times" onClick={this.handleItemDelete}></i>
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
        <div className="new-list-item-container">
          <input type="text" id="item-input-name" value={this.state.ItemInputValue} onChange={this.handleItemInputChange} placeholder="Add new item"/>
          <input type="text" id="item-input-date" value={this.state.ItemDateValue} onChange={this.handleItemInputDateChange} placeholder="Date"/>
        </div>
      </div>
      <div className="button-wrap">
        <button className="add-btn" onClick={this.handleAddButtonClick}>
            <img src= {"+.svg"} alt="+"/>
        </button>
      </div>
  </div>
    )
  }
}


export default App;
