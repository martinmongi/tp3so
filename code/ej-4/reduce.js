function (key, value){

	reducedValue = {cant_posts: 0, upvotes: 0};
   	for (var i = 0; i < value.length; i++){
   		reducedValue.cant_posts += value[i].cant_posts;
    	reducedValue.upvotes += value[i].upvotes;
   }

   return reducedValue;
}

//db.default.find({"value.cant_posts":{$lte:5}}).sort({"value.upvotes":-1})
