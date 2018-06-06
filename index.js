let driverId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return tripId === trip.driverId
    })
  }

  passengers(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    }).map(trip => {
      return store.passengers.find(function(passenger) {
        return passenger.id === trip.passengerId
      })
    })
  }
}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    return store.trips.filter(trip => trip.passengerId === this.id).map(trip => {
      return trip.driver()
    })
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if (driver){
      this.driverId = driverId
    }
    if (passenger){
      this.passengerId = passengerId
    }
    store.trips.push(this)
  }
  setDriverId(driver) {
    this.driverId = driver.id
  }

  setPassengerId(passenger) {
    this.passengerId = passenger.id
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
}
