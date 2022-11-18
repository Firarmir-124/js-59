import React, {useState} from 'react';
import {FilmItems} from "../../types";

interface Props {
  onSubmit: (todo: FilmItems) => void;
}

const FilmFormFun:React.FC<Props> = ({onSubmit}) => {

  const [name, setName] = useState('')

  const onFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      id: Date.now().toString(),
      title: name
    })
    setName('')
  }
  return (
      <form onSubmit={onFormSubmit}>
        <div className="input-group mb-4">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            className="form-control"
          />
          <button type='submit' className="input-group-text" id="basic-addon1">+</button>
        </div>
      </form>
  );
};

export default FilmFormFun;