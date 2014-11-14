function() {
    
    var value_r = {

    	score_titulo: this.score,
    	votos_titulo: this.total_votes

    }

    emit(this.title, value_r);
 
}