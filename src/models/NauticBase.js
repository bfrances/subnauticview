export default class NauticBase {
  id = -1;
  name = '';
  description = '';
  address = '';
  city = '';
  postalCode = '';

  constructor(name) {
    this.name = name;
  }

  unmarshall(json) {
    this.id = json.id ? json.id : this.id;
    this.name = json.name ? json.name : this.name;
    this.description = json.description ? json.description : this.description;
    this.address = json.address ? json.address : this.address;
    this.city = json.city ? json.city : this.city;
    this.postalCode = json.postalCode ? json.postalCode : this.postalCode;
    return this;
  }

  isValidName() {
    return this.name != null && this.name.length > 0;
  }

  isValidAddress() {
    return this.address != null && this.address.length > 0;
  }

  isValidCity() {
    return this.city != null && this.city.length > 0;
  }

  isValidPostalCode() {
    return this.postalCode != null && this.postalCode.length > 0;
  }

  isValid() {
    return this.isValidName() && this.isValidAddress() &&
      this.isValidCity() && this.isValidPostalCode();
  }

  haveDescription() {
    return this.description.length > 0;
  }
}
