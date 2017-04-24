function testListView() {
  var list = new List();
  list.addNote('Sean loves the internet');
  list.addNote('Sean loves his Mum')
  var listView = new ListView(list.notes);
  assert.isTrue(listView.htmlConverter() === '<ul><li><div>Sean loves the internet</div></li><li><div>Sean loves his Mum</div></li></ul>')
};
testListView();
