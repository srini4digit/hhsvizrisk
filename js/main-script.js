
$(".btnFolder").on("click",function(){
	var id = $(this).attr("data-id");
	$(".folder-content").removeClass("folder-show");
	$(".folder-"+id).addClass("folder-show");
});

var colorJSON = {
	"red" : ["#D24D57","#F22613","#D91E18","#96281B","#EF4836","#D64541","#CF000F","#E74C3C"],
	"purple" : ["#663399","#674172","#913D88","#9A12B3","#BF55EC","#8E44AD","#9B59B6","#AEA8D3"]
};

var statsData = [
			{ "title" : "Stat Title 1" , forGraph : [{ "nametitle" : "stats1" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(100) }] } ,
			{ "title" : "Stat Title 2" , forGraph : [{ "nametitle" : "stats2" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(60) }] } ,
			{ "title" : "Stat Title 3" , forGraph : [{ "nametitle" : "stats3" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(20) }] } ,
			{ "title" : "Stat Title 4" , forGraph : [{ "nametitle" : "stats4" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(85) }] } ,
			{ "title" : "Stat Title 5" , forGraph : [{ "nametitle" : "stats5" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(45) }] } ,
			{ "title" : "Stat Title 6" , forGraph : [{ "nametitle" : "stats6" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(12) }] } ,
			{ "title" : "Stat Title 7" , forGraph : [{ "nametitle" : "stats7" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(1) }] } ,
			{ "title" : "Stat Title 8" , forGraph : [{ "nametitle" : "stats8" , "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : toRadians(0.6) }] }
];

globalGraphs = [];

function addArticles(){

	var divArticles = d3.select("#folder1").selectAll("article").data(statsData);
		divArticles.enter()
				   .append("article")
				   .attr("class","artStats")
				   .style("background-color",function(d,i){ return colorJSON.purple[i];})
				   .attr("id",function(d,i){ return "artStats"+i; })
				   .append("span")
				   .html(function(d,i){ return d.title; });
	
	for (var i = 0; i < statsData.length; i++) { // Add the graph to the articles
		globalGraphs[i] = new radialCounter("#artStats"+i,statsData[i]);
	};

}
