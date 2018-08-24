class HeaderRequestService {
  static setHeaderRequest() {
    let defaultHeader = {
      Accept: "application/json, */*",
      "Content-Type": "application/json"
    };

    const headers = Object.assign(defaultHeader, {});

    return headers;
  }
}

export default HeaderRequestService;
