import React from 'react';
import { List, Checkbox } from 'antd';
import ListSort from '../Animations/listsort'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.checkboxchange.bind(this);
  }


  checkboxchange(event, index) {
    this.props.updateList(
      [...this.props.todoList.slice(0, index), Object.assign(
        this.props.todoList[index], { checked: true }
      ), ...this.props.todoList.slice(index + 1)]
      );
  }

  render() {
    console.log(this.props.todoList);
    //const incompleteTaks=this.props.todoList.filter(item => !item.checked);
    //console.log(incompleteTaks);
    const childrenToRender = this.props.todoList.filter(task=>!task.checked).map((item, index) => (
      <List.Item key={item.key}>
        <Checkbox onChange={(event) => this.checkboxchange(event, index)}>{item.todos}</Checkbox>
      </List.Item>
    ));
    return (
      <List itemLayout="horizontal">
        <ListSort>
          {childrenToRender}
        </ListSort>
      </List>
    )
  }
}

export default ToDoList;