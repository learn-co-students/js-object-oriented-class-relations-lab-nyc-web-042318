// Set the incrementing id's globally
let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    return this.trips().map(trip => trip.passObj)
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() { 
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    return this.trips().map(trip => trip.driverObj)
  }
}
class Trip {
  constructor(driverObj, passObj) {
    this.driverId = driverObj.id
    this.passengerId = passObj.id
    this.passObj = passObj
    this.driverObj = driverObj
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return this.driverObj
  }

  passenger() {
    return this.passObj
  }
}

