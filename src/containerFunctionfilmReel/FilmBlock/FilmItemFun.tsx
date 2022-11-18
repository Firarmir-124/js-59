import React from 'react';
import {FilmItems} from "../../types";

interface Props {
  film: FilmItems;
  onRemoveTodo: React.MouseEventHandler;
  onChangeName: React.ChangeEventHandler<HTMLInputElement>;
}

const FilmItemFun:React.FC<Props> = ({film, onRemoveTodo, onChangeName}) => {
  return (
      <div className="mb-3 d-flex flex-row justify-content-between">
        <input onChange={onChangeName} type="text" className="form-control" placeholder="Username" value={film.title}/>
        <button onClick={onRemoveTodo} type="button" className="btn btn-danger">-</button>
      </div>
  );
};

export default FilmItemFun;