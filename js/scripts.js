// Business Logic for Visited Places 
function Log() {
  this.places = {};
  this.currentId = 0;
 }

 Log.prototype.addPlaces = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;

  if (!(place instanceof Places)) {
    return;
  }
}

 Log.prototype.assignId = function() {
  this.currentId +=1
  return this.currentId; 
 }

// Business Logic for Places
function Places(country, state, city, year ) {
  this.country = country;
  this.state = state;
  this.city = city;
  this.year = year;
} 
