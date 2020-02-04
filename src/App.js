import React, {useState} from 'react';
import ToDoList from '../src/Components/list';
import {Form, Input} from 'antd';

let keyCount = 1; 

const ListForm = (props) => {
  const [todoList, updateList] = useState([]);

  const addToList = () => {
    props.form.validateFields((err, values)=>{
      if(!err){
        updateList(todoList.concat({
          key: keyCount++ ,
          todos: values.value
        }));
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
        <ToDoList todoList={todoList} updateList={updateList}/>
    </div>
  );
}

const App = Form.create()(ListForm);

export default App;
