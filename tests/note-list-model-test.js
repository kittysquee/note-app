function testNotesCompiledInList() {
  var list = new List();
  list.addNote('Elaine loves cats');
  assert.isTrue(list.returnNotes().includes('Elaine loves cats'));
};
testNotesCompiledInList();
