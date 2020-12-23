import SearchResult from './Components/SearchResult'
import Header from './Components/Header'
import GridList from './Components/GridList'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'

const useStyle = makeStyles((theme) => ({
  container: {
    // background: "red",
    marginTop: 10
  }
}));

function App() {
  const classes = useStyle();
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e);
  }
  console.log(value);
  return (
    <React.Fragment>
      <Header onChange={(v) => handleChange(v)} />
      <Container maxWidth="lg" className={classes.container}>
        {value ? <SearchResult value={value} /> : <GridList />}
        <br />
      </Container>
    </React.Fragment>
  );
}

export default App;
