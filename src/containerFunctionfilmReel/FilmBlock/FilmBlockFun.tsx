import React from 'react';
import {FilmItems} from "../../types";
import FilmItemFun from "./FilmItemFun";

interface Props {
  films: FilmItems[];
  onRemoveTodo: (id: string) => void;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
}

const FilmBlockFun:React.FC<Props> = ({films, onRemoveTodo, onChangeName}) => {
  return (
    <>
      {films.map(item => (
        <FilmItemFun onChangeName={(e) => onChangeName(e, item.id)} onRemoveTodo={() => onRemoveTodo(item.id)} key={item.id} film={item}/>
      ))}
    </>
  );
};

export default FilmBlockFun;