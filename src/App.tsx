import React, {} from 'react';
import FilmReel from "./containerfilmReel/App/App";
import FilmReelF from "./containerFunctionfilmReel/App/App";
import RandomJoke  from "./containerJoke/App/App"

const App = () => {
  return (
    <div className='container-fluid'>
      <FilmReel/>
      <FilmReelF/>
      <RandomJoke/>
    </div>
  );
};

export default App;