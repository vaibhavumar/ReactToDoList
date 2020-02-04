import React from 'react';
import 'antd/dist/antd.css';
import { List, Checkbox } from 'antd';

class ToDoList extends React.Component{
    constructor(props){
        super(props);
      
      this.checkboxchange.bind(this);
    }
  
  
    checkboxchange(event,index){
      console.log(index);
      this.props.updateList([...this.props.todoList.slice(0,index),...this.props.todoList.slice(index+1)]);
    }
    
   render(){
     return (
      <List
    itemLayout="horizontal"
    dataSource={this.props.todoList}
    renderItem={(item,index) => (
      <List.Item>
        <Checkbox onChange={(event)=>this.checkboxchange(event,index)}>{item.todos}</Checkbox>
      </List.Item>
    )}
  />
     )
  }
  }

  export default ToDoList;