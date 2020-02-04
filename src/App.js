import React, {useState} from 'react';
import ToDoList from '../src/Components/list';
import {Form, Input, Button} from 'antd';

let keyCount = 1; 

const ListForm = (props) => {
  const [todoList, updateList] = useState([]);

  const addToList = (e) => {
    e.preventDefault();
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
      <Form onSubmit={(e)=>addToList(e)} layout="inline">
      <Form.Item>
                {getFieldDecorator('value', {
                    rules: [{ required: true, message: 'List item is required' }],
                })(
                    <Input type="primary" style={{ width: 200 }} />
                )}
            </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">ADD</Button>
        </Form.Item>
      </Form>
        <ToDoList todoList={todoList} updateList={updateList}/>
    </div>
  );
}

const App = Form.create()(ListForm);

export default App;
