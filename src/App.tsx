import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Card } from './components/Card';
import { log } from 'console';

function App() {

  const url = 'http://localhost:5000/quality';
  const [calidad, setCalidad] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setCalidad(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [calidad])
  
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction='column'
      >
        <Grid item>
          {
            calidad.map((item: any) => {
              console.log(item._id.$oid);
              let dateNew = item.date.$date.toString();
              dateNew.toLocaleString('en-US');
              return (
                <Card date={item.date.$date } data={item.data} key={item._id.$oid}/>
              )
            })
          }
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
