function (key, value){

	reducedValue = {cant_comentarios: 0, count: 0 };
   for (var i = 0; i < value.length; i++){
   	reducedValue.cant_comentarios += value[i].cant_comentarios;
    	reducedValue.count += value[i].count;
   }

   return reducedValue;
}
