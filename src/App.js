import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';   //default
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';



function App() {

  const onDeleteHandler=(todo)=>{
   
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }))
    
  }

  const addTodoHandler=(title,desc)=>{
    let srNO;
    if(todos.length === 0){
        srNO=1;
    }else{
      srNO=todos[todos.length-1].srNo+1;
    }
     
    let myTodo={
      srNo:srNO,
      title:title,
      desc:desc

    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)

  }

  const [todos,setTodos]=useState([
    {
      srNo:1,
      title:"Go to the market",
      desc:"go to the market to buy vegetables"
    },{
      srNo:2,
      title:"Go to the mall",
      desc:"go to the mall to buy cloths"
    }
  ]);

  return (
    <div >
     <Header title="ToDoList" />
     <AddTodo addTodo={addTodoHandler}/>
     <Todos todos={todos} onDelete={onDeleteHandler}/>
     <Footer/>
    </div>
  );
}

export default App;
