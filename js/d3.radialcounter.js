function radialCounter(attachTo,datum){
	var thisObject = this;
	var svgHeight = 150;
	var svgWidth = 150;
	var statValue = 50;
	var svg = d3.select(attachTo)
				.append("svg")
				.attr("class","svgGraph")
				.attr("height",svgHeight)
				.attr("width",svgWidth);
	
	thisObject.arcStat = d3.svg.arc();

	thisObject.gGraph = svg.append("g").attr("class","gGraph").attr("transform","translate(75,75)");
	thisObject.gGraph.style("fill","beige");
	
	this.init = function(datum){
	thisObject.pArc = thisObject.gGraph.selectAll("path").data(datum.forGraph, function(d){return d.nametitle;});

	thisObject.pArc.enter()
		  		.append("path")
				.attr("d",function(d){ return thisObject.arcStat(d);})
				.transition() // Animation of the stats
				.duration(1500)
				.attrTween("d",function(d) {
						this._current = this._current || { "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : 0 };
						var interpolate = d3.interpolate(this._current, d);
						// this._current = interpolate(0);
						return function(t) {
							return thisObject.arcStat(interpolate(t));
						};
					});
	thisObject.pArc
				.attr("d",function(d){ return thisObject.arcStat(d);})
				.transition() // Animation of the stats
				.duration(1500)
				.attrTween("d",function(d) {
						this._current = this._current || { "innerRadius" : 60,"outerRadius" : 70,"startAngle" : 0,"endAngle" : 0 };
						var interpolate = d3.interpolate(this._current, d);
						// this._current = interpolate(0);
						return function(t) {
							return thisObject.arcStat(interpolate(t));
						};
					});			
	thisObject.pArc.exit().remove();	
	thisObject.tArc = thisObject.gGraph.selectAll("text").data(datum.forGraph, function(d){return d.nametitle;});

	thisObject.tArc.enter().append("text")
				  .style("text-anchor","left")
				  .style("font-size",40)
				  .attr("transform","translate(-45,15)")
				  .text(function(d){ return d3.format("%")(toOriginalValue(d.endAngle));})
				  .transition() // Animation of the stats
				  .duration(1500)
				  .tween("text", function(d) {
					  var i = d3.interpolate(0, toOriginalValue(d.endAngle));
					  return function(t) {
					    this.textContent = d3.format("%")(i(t));
					  };
					});
	thisObject.tArc
				  .style("text-anchor","left")
				  .style("font-size",40)
				  .attr("transform","translate(-45,15)")
				  .text(function(d){ return d3.format("%")(toOriginalValue(d.endAngle));})
				  .transition() // Animation of the stats
				  .duration(1500)
				  .tween("text", function(d) {
				  	  console.log(this._current);
					  var i = d3.interpolate(toOriginalValue(0), toOriginalValue(d.endAngle));
					  return function(t) {
					    this.textContent = d3.format("%")(i(t));
					  };
					});					
	
	thisObject.tArc.exit().remove();

	}

	thisObject.init(datum);
	
	return thisObject;
}
