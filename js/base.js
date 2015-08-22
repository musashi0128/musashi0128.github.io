$.event.add(window, "load", function(){

	//コンテンツの高さを揃える
	$(".listDetailWrap .cf").find("dl").autoHeight({column:2, height:"height"});
	$(".detailWrap .listWrap").find(".photo").autoHeight({column:5, height:"height"});
	$(".photoSet .listWrap").find(".photo").autoHeight({column:5, height:"height"});

});