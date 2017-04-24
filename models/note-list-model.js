(function(exports) {
  function List() {
    this.notes = [];
  }

  List.prototype.returnNotes = function() {
    for(var i = 0; i < this.notes.length; i++) {
      return this.notes[i];
    }
  };

  List.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  exports.List = List;
})(this);
