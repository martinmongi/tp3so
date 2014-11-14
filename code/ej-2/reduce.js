function (key, values){
   
  
	var reduced_value = {
         score_titulo:0,
         votos_titulo:0
    } 
    
    for(i = 0; i < values.length; i++){
            reduced_value.score_titulo += values[i].score_titulo;
            reduced_value.votos_titulo += values[i].votos_titulo;
     }
  
  

    //En mongo ejecutar la siguiente instruccion  db.default.find({"value.votos_titulo":{$gte: 2000}}).sort({"value.votos_titulo":-1,"value.score_titulo":-1}).limit(12)
    return reduced_value;
    
}
  