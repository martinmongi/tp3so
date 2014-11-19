function() {
	var key = this.subreddit;
	var value = {score: this.score,	titulo: (this.title).split(" ").length};
	emit(key, value);
}
