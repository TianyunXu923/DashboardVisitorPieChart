var width = 960,
	height = 500,
	radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
	.range(['#7eabe7', '#f68a7d']);

var arc = d3.svg.arc()
	.outerRadius(radius - 10)
	.innerRadius(0);

var labelArc = d3.svg.arc()
	.outerRadius(radius - 40)
	.innerRadius(radius - 40);

var jsonGender = [
	{
		gender: male,
		number: 5000
	}, {
		gender: female,
		number: 5000
	}
];	

var svg = d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');

var pie = d3.layout.pie()
	.sort(null)
	.value(function(d){
		return d.number;
	});

var g = svg.selectAll('.arc')
	.data(pie(jsonGender))
	.enter().append('g')
	.attr('class', 'arc');

g.append('path')
	.attr('d', arc)
	.style('fill', function(d){
		return color(d.data.gender);
	});

g.append('text')
	.attr('transform', function(d){
		return 'translate(' + labelArc.centroid(d) + ')';
	})
	.attr('dy', '.35em')
	.text(function(d){
		return "percentage";
	});
	