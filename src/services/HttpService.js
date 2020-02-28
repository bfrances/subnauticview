import axios from 'axios';

/**
 * Override axios
 */
class HttpService {
  url = 'http://127.0.0.1';
  port = '8600';
  headers = { 'Content-Type': 'application/json' };

  getURL() {
    return `${this.url}:${this.port}/api/v1/`;
  }

  getDefaultHeaders() {
    return this.headers;
  }

  /*
  ** method http
  */
  get(url, headers, callbackSuccess, callbackError) {
    axios.get(this.getURL() + url, { headers }).then(
      response => callbackSuccess(response)).catch(
      error => callbackError(error));
  }

  post(url, data, headers, callbackSuccess, callbackError) {
    axios.post(this.getURL() + url, data, { headers }).then(
      response => callbackSuccess(response)).catch(
      error => callbackError(error));
  }

  put(url, data, headers, callbackSuccess, callbackError) {
    axios.put(this.getURL() + url, data, { headers }).then(
      response => callbackSuccess(response)).catch(
      error => callbackError(error.response));
  }

  delete(url, headers, callbackSuccess, callbackError) {
    axios.delete(this.getURL() + url, { headers }).then(
      response => callbackSuccess(response)).catch(
      error => callbackError(error.response));
  }
}


export default new HttpService();
