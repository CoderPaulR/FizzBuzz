for x in (1..100)
	if x % 3 == 0 && x % 5 == 0
		puts "FizzBuzz"
	elsif x % 3 == 0 
		puts "Fizz"
	elsif x % 5 == 0 
		puts "buzz"
	else 
		puts x
	end
end