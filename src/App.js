import React from 'react';
import ToDoList from '../src/Components/list';
import addToList from './redux/actions/addListItem';
import {connect} from 'react-redux';
import {Form, Input} from 'antd';

const ListForm = (props) => {

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
        <ToDoList />
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
