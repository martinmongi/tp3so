function (key, value){

	reducedValue = {score: 0, palabras: 0 };
   	for (var i = 0; i < value.length; i++){
   		reducedValue.score += value[i].score;
    		reducedValue.palabras += value[i].titulo;
   	}

   return reducedValue;
}

// db.default.find({"value.score":{$lte:300, $gte:280}})

