import { useState,useEffect } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  axios.post('https://script.google.com/macros/s/AKfycbx9B3TNLI6zXQgMWnK3B3xw_pQlrXd3Kl9qyTSn7tV8/dev')
    .then(res => {
      console.log(res);
    })

  useEffect(() =>{
    axios.get('https://script.google.com/macros/s/AKfycbx9B3TNLI6zXQgMWnK3B3xw_pQlrXd3Kl9qyTSn7tV8/dev')
    .then(res => setData)
    console.log(data);
  }, []);

  if (!data) {
    return <div/>
  }
  


  return (
    <Container className="container">
      <br></br>
      <Header as="h2">
        React Test
      </Header>
    </Container>
  );
}

export default App;
  