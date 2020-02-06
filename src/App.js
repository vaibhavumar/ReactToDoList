import React from 'react';
import InCompleteToDoList from './Components/InCompleteList';
import addToList from './redux/actions/addListItem';
import {connect} from 'react-redux';
import {Form, Input} from 'antd';
import CompletedToDoList from './Components/CompletedList';

const ListForm = (props) => {

  /*

[].map((value, index))

  {
    key1: {djgsfgsdf},
    key2: {sdfsdf}
  }

  obj.map((value, key)=>{})
  */
  const addToList = () => {
    props.form.validateFields((err, values)=>{
      if(!err){
        props.submitNewItemToList(values.value);
        props.form.resetFields();
      }
    });
  }

  const {getFieldDecorator} = props.form;

  return (
    <div className="App">
      <Form layout="inline">
      <Form.Item>
                {getFieldDecorator('value', {
                    rules: [{ required: true, message: 'List item is required' }],
                })(
                    <Input.Search enterButton="ADD" onSearch={()=>addToList()} style={{width: '800px'}} />
                )}
            </Form.Item>
      </Form>
        <InCompleteToDoList />
        <CompletedToDoList/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewItemToList : (item) => dispatch(addToList(item))
  };
}

const WrapperForm = Form.create()(ListForm);

const App = connect(null, mapDispatchToProps)(WrapperForm);

export default App;
