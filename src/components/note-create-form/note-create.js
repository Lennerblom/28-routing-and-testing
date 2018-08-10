import React, {Component, Fragment} from 'react';
import uuid from 'uuid/v1';

export default class NoteForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
      editing: false,
      completed: false,
      content: "",
      title: ""
  };
    }
   onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({...this.state, id: uuid() });
  };

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
    console.log('Here', this.state);
  };
 
  render() {
      return(
        <Fragment>
            <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="title" placeholder="title" value = {this.state.title}/>
        <textarea name="content" placeholder="content" value = {this.state.content}/>
        <label>
          <span>editing</span>
          <input name="editing" type="checkbox" value = {this.state.editing}/>
        </label>
        <label>
          <span>completed</span>
          <input name="completed" type="checkbox" value = {this.state.completed}/>
        </label>
        <button>Create Note</button>
      </form>
        </Fragment>
      );
  }
}

