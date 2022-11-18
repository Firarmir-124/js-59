import FilmBlock from "../FilmBlock/FilmBlock";
import FilmForm from "../FilmForm/FilmForm";
import React, {Component} from 'react';
import {FilmItems} from "../../types";

interface State {
  ribbonFilm: FilmItems[];
}

class App extends Component<{}, State> {
  state = {
    ribbonFilm: [] as FilmItems[]
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('ribbons') || '');
    if(storage) {
      this.setState({
        ribbonFilm: storage
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('ribbons', JSON.stringify(this.state.ribbonFilm))
  }

  addFilm = (film: FilmItems) => {
    this.setState(prev => ({
      ...prev,
      ribbonFilm: this.state.ribbonFilm.concat(film),
    }))
  }

  removeFilm = (id: string) => {
    this.setState(prev => ({...prev, ribbonFilm: this.state.ribbonFilm.filter(item => item.id !== id)}))
  }

  changeName = (event:React.ChangeEvent<HTMLInputElement>, id: string) => {
    this.setState({
      ribbonFilm: this.state.ribbonFilm.map(item => {
        return item.id === id ? {
          ...item,
          title: event.target.value,
        } : item
      })
    });
  };

  render() {
    return (
      <div className='container-fluid mb-5'>
        <div className="todoList card p-2" style={{width: '500px'}}>

          <div className="block-form">
            <FilmForm onSubmit={this.addFilm}/>
          </div>
          <div className="block-film">
            <h3>Кинолента (Классы)</h3>
            <FilmBlock changeName={this.changeName} remove={this.removeFilm} films={this.state.ribbonFilm}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;