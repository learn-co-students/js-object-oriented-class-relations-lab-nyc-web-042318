let store = {drivers: [], passengers: [], trips: []}


let userId = 0

class Driver {
  constructor (name){
    this.id = ++userId
    this.name = name

    store.drivers.push(this)
  }

  trips () {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers () {
    const result = []
      this.trips().forEach(function (el) { result.push(el.passenger() )  } )
    return result
  }
}

let passengerId = 0

class Passenger {
  constructor (name) {
    this.name = name
    this.id = ++passengerId

    store.passengers.push(this)
  }

  trips () {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers () {
    const result = []
      this.trips().forEach(function (el) { result.push(el.driver() )  } )
    return result
  }

}

let tripId = 0

class Trip {
  constructor (driver, passenger) {
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  passenger (){
    return store.passengers.find(function(pass){
      return pass.id === this.passengerId
    }.bind(this))
  }

  driver () {
    return store.drivers.find(function (driver) {
      return driver.id == this.driverId
    }.bind(this))
  }

}
