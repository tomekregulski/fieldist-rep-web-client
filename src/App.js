import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://fieldist-back-end.herokuapp.com/api/users')
      .then((response) => {
        const res = response.data;
        setData(res);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Fieldist Admikn Web App</h1>
      <p>These are the names of current users:</p>
      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item.first_name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
