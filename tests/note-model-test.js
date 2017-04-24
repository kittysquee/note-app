  function testNoteHasContent() {
    var note = new Note("Sean loves brekkie");
    assert.isTrue(note.text === "Sean loves brekkie");
  };
  testNoteHasContent();
