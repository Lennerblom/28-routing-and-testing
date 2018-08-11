import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Dashboard from './dashboard';
import NoteForm from '../note-create-form/note-create';
import NoteList from '../note-list/note-list';

describe("Dashboard", () => {
  it("should render without crashing", () => {
    shallow(<Dashboard />);
  });

  it("should have form", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(NoteForm)).toExist();
    expect(wrapper.find(NoteList)).toExist();
  });
});
