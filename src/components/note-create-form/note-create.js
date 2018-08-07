'use strict';
import React, {Component, Fragment} from 'react';
import Dash from '../dashboard/dashboard';

export default class NoteForm extends Component {
  constructor(props) {
    super(props);
  }

  handleNote(e) {
      let content = e.target.value;
      console.log(content);
  }

  onComplete(e) {
      e.preventDefault();
      let content = e.target.value;
      console.log(content);
      this.props.setContent(content);
      Dash.addNote();
  }

  render() {
      return(
        <Fragment>
            <form>
                <label>Create Note</label>
                <input type="textArea" onChange={this.handleNote} onSubmit={this.onComplete}/>
            </form>
        </Fragment>
      )
  }
}

// onComplete the NoteForm should add a note to the application state