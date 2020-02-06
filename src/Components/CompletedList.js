import React from 'react';
import {connect} from 'react-redux';
import putToIncomplete from '../redux/actions/putToIncomplete';
import { List, Checkbox } from 'antd';
import ListSort from '../Animations/listsort'
//import putToIncomplete from '../redux/actions/putToIncomplete';

class ConnectedCompToDoList extends React.Component {

  constructor(props){
    super(props);
  
  this.checkBoxChange.bind(this);
}


checkBoxChange(key){
  this.props.putItemToIncompleteList(key);
  // this.props.updateList([...this.props.todoList.slice(0,index),...this.props.todoList.slice(index+1)]);
}

render(){
 console.log(this.props.todoList);
 const childrenToRender = this.props.todoList.filter(item => item.checked).map((item) => (
  <List.Item key={item.key}>
    <Checkbox defaultChecked onChange={(event)=>this.checkBoxChange(item.key)}><del>{item.todos}</del></Checkbox>
  </List.Item>
));
if(childrenToRender.length)
 return (
  <List itemLayout="horizontal">
    <ListSort>
      {childrenToRender}
    </ListSort>
  </List>
 );
 return (<></>);
}
}

const mapStateToProps = (state) => {
return {
  todoList: state
};
};

const mapDispatchToProps = (dispatch) => {
return {
  putItemToIncompleteList: (key) => dispatch(putToIncomplete(key))
};
};

const CompletedToDoList = connect(mapStateToProps, mapDispatchToProps)(ConnectedCompToDoList);



export default CompletedToDoList;