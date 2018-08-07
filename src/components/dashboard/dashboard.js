'use strict';
import React, {Component, Fragment} from 'react';
import uuid from 'uuid/v1';
import NoteForm from '../note-create-form/note-create';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],

    };
    this.addNote = this.addNote.bind(this);
    //this.removeNote = this.removeNote.bind(this);
    console.log("__State__", this.state);

  }
 
//   componentDidMount() {
//     this.addNote()
//       .then(data => 
//         this.setState( Object.assign(...this.state, data) ) 
//     );
// }
  addNote(content) {
    console.log('hello??')
    let note = {};
    note = {
      id: uuid(),
      editing: false,
      content: content,
      title: '',
    };
    this.setState({notes: note});
   //this.setState( Object.assign(this.state.notes,note));
    console.log("__State__", this.state);
  }

  // removeNote(note) {
  //   //note comes from note-item
  //   this.setState("remove the note");
  // }

  render() {
    return(
      <Fragment>
        <main>
          <h2>dash</h2>
          <NoteForm setContent={this.addNote}/>
        </main>
      </Fragment>
    )
  }

}