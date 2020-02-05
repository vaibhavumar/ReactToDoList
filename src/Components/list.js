import React from 'react';
import {connect} from 'react-redux';
import removeFromList from '../redux/actions/removeListItem';
import { List, Checkbox } from 'antd';
import ListSort from '../Animations/listsort'

class ConnectedToDoList extends React.Component{
    constructor(props){
        super(props);
      
      this.checkBoxChange.bind(this);
    }
  
  
    checkBoxChange(event,index){
      this.props.removeItemFromListByIndex(index);
      // this.props.updateList([...this.props.todoList.slice(0,index),...this.props.todoList.slice(index+1)]);
    }
    
   render(){
     const childrenToRender = this.props.todoList.map((item,index) => (
      <List.Item key={item.key}>
        <Checkbox onChange={(event)=>this.checkBoxChange(event,index)}>{item.todos}</Checkbox>
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

  const mapStateToProps = (state) => {
    return {
      todoList: state
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      removeItemFromListByIndex: (index) => dispatch(removeFromList(index))
    };
  };

  const ToDoList = connect(mapStateToProps, mapDispatchToProps)(ConnectedToDoList);

  export default ToDoList;