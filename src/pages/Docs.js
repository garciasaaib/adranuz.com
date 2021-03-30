import React from "react";
import Section from "@templates/Section";
import NotesContainer from "@components/NotesContainer"

const Docs = () => {
  return (
    <Section title="Docs & retakes">
      <p>
        I ussually use the same code in different projects because I spent time
        searching how to do a thing, and when I found how to do it I save it in
        my favorite notes app <b>Notion.so</b>. Let's check some of them to use
        them.
      </p>
      <NotesContainer />
    </Section>
  );
};

export default Docs;
