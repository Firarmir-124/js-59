import React, {useEffect, useState} from 'react';
import {FilmItems} from "../../types";
import FilmBlockFun from "../FilmBlock/FilmBlockFun";
import FilmFormFun from "../FilmForm/FilmFormFun";

const App = () => {
  const [ribbonFilm, setRibbonFilm] = useState<FilmItems[]>([]);

  const addFilm = (film: FilmItems) => {
    setRibbonFilm(prev => [...prev, film])
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('ribbons') || '');
    if (storage) {
      setRibbonFilm(storage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ribbons', JSON.stringify(ribbonFilm))
  }, [ribbonFilm])


  const removeFilm = (id: string) => {
    setRibbonFilm(prev => prev.filter(d => d.id !== id));
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setRibbonFilm(ribbonFilm.map(item => {
      return item.id === id ? {
        ...item,
        title: e.target.value,
      } : item
    }))
  }

  return (
    <div className='container-fluid'>
      <div className="todoList card p-2" style={{width: '500px'}}>

        <div className="block-form">
          <FilmFormFun onSubmit={addFilm}/>
        </div>
        <div className="block-film">
          <h3>Кинолента (Функции)</h3>
          <FilmBlockFun onChangeName={onChange} onRemoveTodo={removeFilm} films={ribbonFilm}/>
        </div>
      </div>
    </div>
  );
};

export default App;