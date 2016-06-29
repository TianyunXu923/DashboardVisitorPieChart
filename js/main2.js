var dataArray = [[8, 32, 21, 21, 32], [12, 20, 23, 30, 40]]

var width = 250,
	height = 320


var color = d3.scale.ordinal()
	.range(['#7eabe7', '#f68a7d']);

var ageRange = ['< 20', '20-29', '30-39', '40-49', '> 50']

var svg = d3.select('body').append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			//.attr('transform', 'translate(' + width/2 + ',' + height/2 + ')')

var xmin1 = d3.min(dataArray[0])
var xmin2 = d3.min(dataArray[1])
var xmin = d3.min([xmin1, xmin2])

var xmax1 = d3.max(dataArray[0])
var xmax2 = d3.max(dataArray[1])
var xmax = d3.max([xmax1, xmax2])

var xscale = d3.scale.linear()
				.domain([ 0, xmax ])
				.range([0, width/3])

// var yscale = d3.scale.linear()
// 				.domain([0,4])
// 				.rangeRound([180, 0])

var yscale = d3.scale.ordinal()

var yaxisM = d3.svg.axis()
				.scale(yscale)
				.orient('right')
				.ticks(5)
				.innerTickSize([2])
				.outerTickSize([0])

var yaxisFe = d3.svg.axis()
				.scale(yscale)
				.orient('left')
				.ticks(5)
				.innerTickSize([2])
				.outerTickSize([0])			

yscale.domain(['', ' ','  ', '    ', '     '])
		.rangeRoundBands([180, 0], -0.5)

var g = svg.append('g')

for (var i = 0; i < 5; i++){
	g.append('rect')
		.attr('x', function(d){
			return 110 - xscale(dataArray[0][i])
		})
		.attr('y', 20+20*i+20*i)
		.attr('width', xscale(dataArray[0][i]))
		.attr('height', 20)
		.attr('class', 'rect male')
		.style('fill', '#7eabe7')

	g.append('rect')
		.attr('x', 145)
		.attr('y', 20+20*i+20*i)
		.attr('width', xscale(dataArray[1][i]))
		.attr('height', 20)
		.attr('class', 'rect female')
		.style('fill', '#f68a7d')

	g.append('text')
		.attr('x', 115)
		.attr('y', 35+20*i+20*i)
		.text(ageRange[i])	
		.style('font-size', '10px')

	g.append('text')
		.attr('x', function(d){
			return 110 - xscale(dataArray[0][i])-12
		})
		.attr('y', 35+20*i+20*i )
		.text(dataArray[0][i]+'')	
		.style('font-size', '10px')
		.style('fill', '#7eabe7')

	g.append('text')
		.attr('x', function(d){
			return 145+xscale(dataArray[1][i])+5
		})
		.attr('y', 35+20*i+20*i )
		.text(dataArray[1][i]+'')	
		.style('font-size', '10px')
		.style('fill', '#f68a7d')	
}	

	svg.append('g')
		.attr('class', 'y axis')
		.call(yaxisM)
		.attr('transform', 'translate(110,20)')

	svg.append('g')
		.attr('class', 'y axis')
		.call(yaxisFe)
		.attr('transform', 'translate(145,20)')

