import React, { Component } from 'react';
import Title from "./components/Title"
import Control from "./components/Control"
import Form from "./components/Form"
import List from "./components/List"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: "Ghế chân xoay văn phòng nghỉ thư giãn GX407B",
          level: 2
        },
        {
          id: 2,
          name: "Ghế văn phòng chân xoay GX601B bọc da sang trọng",
          level: 1
        }
      ],
      isShowForm: false,
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleShow() {
    this.setState({
      isShowForm: !this.state.isShowForm
    })
  }
  handleSearch(strSearch){
    console.log(strSearch);
  }
  render() {
    let { items, isShowForm } = this.state
    return (
      <div>
        <Title />
        <Control
          onClickShow={this.handleShow}
          onClickSearch={this.handleSearch}
        />
        <Form 
        isShowForm={isShowForm}
        onClickShow={this.handleShow}
         />
        <List items={items} />
      </div>
    );
  }
}

export default App;
