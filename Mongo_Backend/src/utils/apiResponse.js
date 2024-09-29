class apiResponse {
  constructor(statuscode,success, message="Success", data) {
    this.statuscode = statuscode < 400;
    this.success = success;
    this.message = message;
    this.data = data;
  }
}