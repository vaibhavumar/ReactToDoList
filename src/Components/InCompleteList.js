import React from 'react';
import {connect} from 'react-redux';
import putInCompletedList from '../redux/actions/putToCompletedList';
import { List, Checkbox } from 'antd';
import ListSort from '../Animations/listsort'

class ConnectedInCompToDoList extends React.Component{
    constructor(props){
        super(props);
      
      this.checkBoxChange.bind(this);
    }
  
  
    checkBoxChange(key){
      this.props.putItemToCompletedListByKey(key);
      // this.props.updateList([...this.props.todoList.slice(0,index),...this.props.todoList.slice(index+1)]);
    }
    
   render(){
     console.log(this.props.todoList);
     const childrenToRender = this.props.todoList.filter(item => !item.checked).map((item) => (
      <List.Item key={item.key}>
        <Checkbox onChange={(event)=>this.checkBoxChange(item.key)}>{item.todos}</Checkbox>
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
      putItemToCompletedListByKey: (key) => dispatch(putInCompletedList(key))
    };
  };

  const InCompleteToDoList = connect(mapStateToProps, mapDispatchToProps)(ConnectedInCompToDoList);

  export default InCompleteToDoList;