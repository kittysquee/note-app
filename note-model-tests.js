  function testNoteHasContent() {
    var note = new Note("Sean hates brekkie");
    assert.isTrue(note.text === "Sean loves brekkie");
  };
  testNoteHasContent();
