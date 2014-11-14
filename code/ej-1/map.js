function() {
    
	var map_value = {
               		count: 1,
                  	score_total: this.score
               	};

    emit(this.subreddit,map_value);

 
}