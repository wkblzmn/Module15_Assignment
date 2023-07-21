import React from 'react';
import ReactDOM from 'react-dom';
import TodoListApp from './App';

const App = () => {
  return (
    <div>
      <TodoListApp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
