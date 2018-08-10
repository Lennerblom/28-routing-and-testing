import React, {Component, Fragment} from 'react';

export default props => (
    <li>
        <h2>{props.note.title}</h2>
        <p>{props.note.content}</p>
        <button onClick={() => props.onRemove(props.note.id)}>Delete Note</button>
    </li>
);

//THIS WAY WORKS TOO
// export default class NoteItem extends Component {
      
//     render() {
//         return(
//             <Fragment>
//                 <h2>Note Item</h2>
//                 <li>{this.props.note.title}</li>
//                 <li>{this.props.note.content}</li>
//                 <button onClick={() => this.props.onRemove(this.props.note.id)}>Delete Note</button>
//             </Fragment>
//         );
//     }
// }
