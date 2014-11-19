function() {
	var key = this.score;
	var value = {cant_comentarios: this.number_of_comments,	count: 1};
	emit(key, value);
}
