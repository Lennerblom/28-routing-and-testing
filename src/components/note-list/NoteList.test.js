import React from "react";
import { shallow, mount } from "enzyme";
import NoteList from './note-list';
import NoteItem from '../note-item/note-item';
describe("NoteList", () => {
  it("should render", done => {
    const onRemove = id => {
      expect(id).toBe("1234");
      done();
    };

    const notes = [];
    notes.push({
      id: "1234",
      title: "foo",
      content: "bar",
      editing: false,
      completed: true
    });
    const wrapper = shallow(<NoteList notes={notes} onRemove={onRemove} />);
    expect(wrapper.find(NoteItem).length).toBe(1);
    const noteItem = wrapper.find(NoteItem).first();

    const noteItemId = noteItem.prop("note").id;

    const removeHandler = noteItem.prop("onRemove");

    removeHandler(noteItemId);
  });
});
