//collection of quotes

var quote_collection = 
[
	{
		author: "Wayne Gretzky",
		quote: "You miss 100% of the shots you don't take."
	},
	{
		author: "Michael Scott",
		quote: "You miss 100% of the shots you don't take. - Wayne Gretzky"
	},
	{
		author: "Adam Smith",
		quote: "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
	},
	{
		author: "Voltaire",
		quote: "Every man is guilty of all the good he did not do.",
	},
	{
		author: "Henry David Thoreau",
		quote: "Be not simply good - be good for something."
	}
];



$(document).ready(function(){

	var numberOfQuotes = quote_collection.length-1;
	
	function randomQuote(min,max){
   	 return Math.floor(Math.random()*(max-min+1)+min);
	}
	var rand_num = randomQuote(0, numberOfQuotes);
	$(".quote_text").text(quote_collection[rand_num].quote);
	$(".author").text("-" + quote_collection[rand_num].author);

});
