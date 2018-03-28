import React, { Component } from 'react';
import Title from "./components/Title"
import Control from "./components/Control"
import Form from "./components/Form"
import List from "./components/List"
import { filter, includes, orderBy as funcOrderBy } from "lodash"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // {
      //   id: 1,
      //   name: "Ghế chân xoay văn phòng nghỉ thư giãn GX407B",
      //   level: 2
      // },
      // {
      //   id: 2,
      //   name: "Ghế văn phòng chân xoay GX601B bọc da sang trọng",
      //   level: 1
      // }
      // ],
      isShowForm: false,
      itemSelected: null,
      orderBy: "name",
      orderDir: "asc",
      strSearch: ""
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let items = (tasks !== null) ? tasks : [];
    this.setState({
      items
    })
  }

  handleShow() {
    this.setState({
      itemSelected: null,
      isShowForm: !this.state.isShowForm
    })
  }
  handleSearch(strSearch) {
    this.setState({
      strSearch
    })
  }

  handleSubmit = (item) => {
    let { items } = this.state;
    if (item.id === '') {
      items.push({ //add
        id: items.length + 1,
        name: item.name,
        level: +item.level
      });
    } else { //edit
      items.forEach((elm, key) => {
        if (elm.id === item.id) {
          items[key].name = item.name;
          items[key].level = +item.level;
        }
      })
    }
    this.setState({
      items,
      isShowForm: false
    });
    localStorage.setItem("tasks", JSON.stringify(items));
  }

  handleDelete = (id) => {
    let { items } = this.state;
    items = items.filter(item => item.id !== id);
    this.setState({ items });
    localStorage.setItem("tasks", JSON.stringify(items));
  }

  handleEdit = (item) => {
    this.setState({
      itemSelected: item,
      isShowForm: true
    })
  }

  handleSort = (orderBy, orderDir) => {
    this.setState({
      orderBy,
      orderDir
    })
  }

  render() {
    let { items, isShowForm, itemSelected, orderBy, orderDir, strSearch } = this.state;
    //let itemsOrigin = (items !== null) ? [...items] : [];
    // let itemsList = [];
    items = filter(items, (item) => includes(item.name.toLowerCase(), strSearch.toLowerCase()));
    items = funcOrderBy(items, [orderBy], [orderDir]);
    let elmForm = <Form
      isShowForm={isShowForm}
      itemSelected={itemSelected}
      onClickShow={this.handleShow}
      onClickSubmit={this.handleSubmit}
    />
    if (!isShowForm) elmForm = null
    return (
      <div>
        <Title />
        <Control
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          isShowForm={isShowForm}
          onClickShow={this.handleShow}
          onClickSearch={this.handleSearch}
          onClickSort={this.handleSort}
        />
        {elmForm}
        <List
          items={items}
          onClickDelete={this.handleDelete}
          onClickEdit={this.handleEdit}
        />
      </div >
    );
  }
}

export default App;
