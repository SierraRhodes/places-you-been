Describe: Places()

Test: "It should create an object type of the places I have been." 
Code: 
Places()
 let place = new Places("Germany","N/A", "Vilsek", 2005);
 Expected Output: ["Germany","N/A", "Vilsek", 2005];


Describe: Log()

Test: "It should take the information from place and store it."
Code: 
Log()
let place = new Places("USA", "California", "San Francisco", 2020);
 let log = new Log();
log.place = place; 
console.log(log);
Expected Output: ["USA", "California", "San Francisco", 2020]  