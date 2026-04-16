import React, { useState, useEffect } from 'react';
import TaskManager from './components/TaskManager';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import CrudApp from './components/CrudApp';
import ModalApp from './components/ModalApp';
import UseEffectApp from './components/UseEffectApp';
import UseLayoutEffectApp from './components/UseLayoutEffectApp';
import TooltipApp from './components/TooltipApp';
import './App.css';


//FETCH DATA
import DataFetcher from './components/DataFetcher';
import FetchAPIAxios from './components/FetchAPIAxios';

//POST DATA
import UserManagement from './components/UserManagement';
import Navbar from './components/Navbar';
import UseMemoApp from './components/UseMemoApp';
import BankApp from './components/BankApp';
import LazyLoad from './components/HeavySetting';
import { AppContext } from './components/AppContext';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a delay to see the HOC spinner
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='app'>
      {/* <h1>Task Tracker Interview</h1> */}
      {/* <TaskManager /> */}
      {/* <Login /> */}
      {/* <TodoApp /> */}
      {/* <CrudApp /> */}
      {/* <ModalApp /> */}
      {/* <TooltipApp /> */}


      {/* <UseEffectApp /> */}
      {/* <UseLayoutEffectApp /> */}


      {/* <DataFetcher isLoading={loading} /> */}
      {/* <FetchAPIAxios /> */}
      {/* <UserManagement /> */}

      {/* <UseMemoApp transactions={data} /> */}


      <BankApp />

      {/* create context */}
      <Navbar />

    </div>
  );
};

export default App;



const Person = function (name) {
  this.name = name;
  this.sayName1 = function () {
    console.log(this.name);
  };
  this.sayName2 = () => {
    console.log(this.name);
  };
};
const john = new Person('John');
const dave = new Person('Dave');
john.sayName1(); // John
john.sayName2(); // John
// `this` can change for regular functions but not for arrow functions
john.sayName1.call(dave); // Dave
john.sayName2.call(dave); // John

