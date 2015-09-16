$(document).ready(function(){
		var $times = 0;	
		var $fizz = 0;
		var $buzz = 0;
		var $fizzbuzz = 0;
	$(".button").click(function(){
		if($times < 1)
			{
				for(x = 1; x <101; x++)
				{
					if(x % 3 == 0 && x % 5 == 0)
					{
						$(".FizzyClass").append('<p class="FizzBuzz">FizzBuzz</p>');
						$fizzbuzz +=1;
					}	
					else if(x % 3 == 0)
					{
						$(".FizzyClass").append('<p class="Fizz">Fizz</p>');
						$fizz += 1;
					}
					else if(x % 5 == 0)
					{
						$(".FizzyClass").append('<p class ="Buzz">Buzz</p>');
						$buzz += 1;
					}
					else
					{	
						$(".FizzyClass").append("<p>"+x+"</p>");
					}
				}	
				$times += 1;
				$(".totals").append("<p>From 1 to 100 there are:</p>");
				$(".totals").append("<p>"+$fizz+" instances of Fizz.</p>");
				$(".totals").append("<p>"+ $buzz +" instances of Buzz.</p>");
				$(".totals").append("<p>"+ $fizzbuzz +" instances of FizzBuzz.</p>");
				$(".Fizz").click(function()
					{
						$(this).effect("pulsate");
					});
				$(".Buzz").click(function()
					{
						$(this).effect("bounce");
					});
				$(".FizzBuzz").click(function()
					{
						$(this).effect("shake",500);
					});
			}
		else if($times > 1)
		{
			$("p").remove();
			$times = 0;
			$fizz = 0;
			$buzz = 0;
			$fizzbuzz = 0;		
		}
		else
		{
			alert("You already Fizz Buzzed :) Click again to reset the Fizzbuzz!");
			$times += 1;
		}
	});
});

