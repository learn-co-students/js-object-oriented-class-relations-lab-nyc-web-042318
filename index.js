let store = {drivers: [], passengers: [], trips: []}
// initialize store with key of items and users that each point to an empty array

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  };

  trips(){
    return store.trips.filter(trip => trip.driverId === this.id);
  };

  passengers(){
    let ts = this.trips();
    return ts.map(function (trip) {
      return trip.passenger();
    })
  };

}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  };

  trips(){
    return store.trips.filter(trip => trip.passengerId = this.id)

  };

  drivers(){
    return this.trips().map(trip => trip.driver())
  };
}


let tripId = 0;

class Trip {
  constructor(driver,passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  };

  passenger(){
    return store.passengers.filter(function (passenger) {
      return passenger.id === this.passengerId;}.bind(this))[0]
  };

  driver(){
    return store.drivers.filter(function (driver) {
      return driver.id === this.driverId;}.bind(this))[0]
  };

}
