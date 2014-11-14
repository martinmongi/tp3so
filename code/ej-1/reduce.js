function (key, values){
   
   var reduced_value = {
               		count: 0,
                  	score_total: 0
               	};
   
    for(i = 0; i < values.length; i++){
    	reduced_value.count +=  values[i].count;
		reduced_value.score_total += values[i].score_total;
	}
  
    return reduced_value;
    
}
  