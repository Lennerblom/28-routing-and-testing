import React from 'react';
import NoteItem from '../note-item/note-item';

export default props => (
    <ul>
    {props.notes.map(note => <NoteItem key={note.id} note={note} {...props}/>)}
    </ul>
);

//THIS WAY WORKS TOO
// export default class Notelist extends React.Component {
//     constructor(props) {
//         super(props);
//       }
      
//     render() {
//         return(
//           <React.Fragment>
//             <ul>
//                 {this.props.notes.map(note => <NoteItem key={note.id} note={note} {...this.props}/>)}
//             </ul>
//           </React.Fragment>
//         );
//     }
// }