var width = 560,
	height = 300,
	radius = Math.min(width, height) / 4;

var color = d3.scale.ordinal()
	.range(['#7eabe7', '#f68a7d']);

var arc = d3.svg.arc()
	.outerRadius(radius - 10)
	.innerRadius(0);

var labelArc = d3.svg.arc()
	.outerRadius(radius - 40)
	.innerRadius(radius - 30);

var jsonGender = [
	{
		gender: 'male',
		number: 4000,
	}, {
		gender: 'female',
		number: 6000,
	}
];	

var pecentageArray = ['40%', '60%'];

var svg = d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
	.attr('transform', 'translate(' + width/4 + ',' + height/4 + ')');

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
	})
	.style('stroke', 'white');

g.append('text')
	.attr('transform', function(d){
		return 'translate(' + labelArc.centroid(d) + ')';
	})
	.attr('dy', '.50em')
	.attr('text-anchor', 'middle')
	.text(function(d, index){
		return pecentageArray[index];
	})
	.style('fill', 'white')
	.attr('font-size', '12px');
	