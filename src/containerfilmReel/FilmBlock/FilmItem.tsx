import React, {Component} from 'react';
import {FilmItems} from "../../types";

interface Props {
  film: FilmItems;
  remove: React.MouseEventHandler;
  onChangeName: React.ChangeEventHandler<HTMLInputElement>;
}

class FilmItem extends Component<Props> {

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.film.title !== nextProps.film.title;
}


  render() {
    return (
      <div className="mb-3 d-flex flex-row justify-content-between">
        <input onChange={this.props.onChangeName} type="text" className="form-control" placeholder="Username" defaultValue={this.props.film.title}/>
        <button onClick={this.props.remove} type="button" className="btn btn-danger">-</button>
      </div>
    );
  }
}

export default FilmItem;