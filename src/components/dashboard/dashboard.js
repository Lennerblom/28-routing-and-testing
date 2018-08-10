import React, {Component, Fragment} from 'react';
import NoteForm from '../note-create-form/note-create';
import NoteList from '../note-list/note-list';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],

    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    console.log("__State__", this.state);

  }
  //THIS WORKS TOO
  // addNote = note => {
  //   let notes = [...this.state.notes, note];
  //   this.setState({notes});
  // };

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
    console.log("__State__", this.state);
  }

  removeNote(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
      }

  render() {
    return(
      <Fragment>

          <NoteForm onSubmit={this.addNote}/>
          <NoteList notes={this.state.notes} onRemove={this.removeNote}/>
     
      </Fragment>
    );
  }

}
