import React, {Component} from 'react';
import {FilmItems} from "../../types";

interface State {
  value: string;
}

interface Props {
  onSubmit: (todo: FilmItems) => void;
}

class FilmForm extends Component<Props, State> {

  state = {
    value: '',
  }

  handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({
      ...prev,
      value: e.target.value
    }))
  }

  handleFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit({
      id: Date.now().toString(),
      title: this.state.value
    })
    this.setState({value:  ''})
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="input-group mb-4">
          <input
            value={this.state.value}
            type="text"
            className="form-control"
            onChange={this.handleChange}
          />
          <button type='submit' className="input-group-text" id="basic-addon1">+</button>
        </div>
      </form>
    );
  }
}

export default FilmForm;