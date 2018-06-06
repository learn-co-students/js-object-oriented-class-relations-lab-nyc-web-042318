let tripId = 0
let driverId = 0
let passengerId = 0
let store ={trips: [], drivers: [], passengers: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    let trips = this.trips()
    return trips.map(trip => {
      return trip.passenger()
    })
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    let trips = this.trips()
    return trips.map(trip => {
      return trip.driver()
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++ tripId
    if(driver) {
      this.driverId = driver.id
    }
    if(passenger) {
      this.passengerId = passenger.id
    }

    store.trips.push(this)
  }

  setDriver(driver) {
    this.driverId = driver.id
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id
  }

  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId
    }.bind(this))
  }

  passenger() {

    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }

}
