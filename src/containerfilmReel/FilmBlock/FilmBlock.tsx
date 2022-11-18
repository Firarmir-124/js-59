import React, {Component} from 'react';
import FilmItem from "./FilmItem";
import {FilmItems} from "../../types";


interface Props {
  films: FilmItems[];
  remove: (id:string) => void;
  changeName: (event:React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

class FilmBlock extends Component<Props> {
  render() {
    return (
      <>
        {this.props.films.map(item => (
          <FilmItem onChangeName={(event) => this.props.changeName(event, item.id)} remove={() => this.props.remove(item.id)} key={item.id} film={item}/>
        ))}
      </>
    );
  }
}

export default FilmBlock;