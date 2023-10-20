
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(1,34058,3,4,5,6,7,8,9,10)

console.log("The total is "+theTotal)

typeof Array;
print( );
console.log( typeof array); 
console.log( typeof Array);

const names = ["George", "Cara"];
console.log(names[0]);
let aname = names[1];
console.log(aname);
names.push("George");
console.log(names);

function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += aNumber*1//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
		//* it adds two zeros together like a string!
		//but I don't get what makes Javascript think they're a string!?
	}
	return sum
}
