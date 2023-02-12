// Business Logic for Places
function Places(country, state, city, year ) {
  this.country = country;
  this.state = state;
  this.city = city;
  this.year = year;
} 

Places.prototype.locationTime = function() {
  return this.state + this.country + this.city + this.year; 
}