let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name;
    store.drivers.push(this);
    this.id = ++driverId;
  }

  trips() {
    var placeholder = this.id;

    const answer = store.trips.filter(trip => placeholder === trip.driverId);
    return answer;
  }

  passengers () {
    return this.trips().map( trip => trip.passenger())
  }

}

class Passenger {
  constructor(name) {
    this.name = name;
    store.passengers.push(this);
    this.id = ++passengerId;
  }

  trips() {
    var placeholder = this.id;

    const answer = store.trips.filter(trip => placeholder === trip.passengerId);
    return answer;
  }

  drivers () {
    return this.trips().map(trip => trip.driver())
  }
}



class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);

  }


  passenger() {

    if (this.passengerId) {
      var placeholder = this.passengerId

      var found = store.passengers.find(function(element) {
        return element.id === placeholder;
      });
    }

    return found;
  }

  driver () {
    if (this.driverId) {
      var placeholder = this.driverId

      var found = store.drivers.find(function(element) {
        return element.id === placeholder;
      });
    }
    return found;
  }



}
