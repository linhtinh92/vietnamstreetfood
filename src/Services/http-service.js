import HeaderRequestService from './header-request-helper';

export class HttpService {

    static get(url, options) {

        this.defaultHeader = HeaderRequestService.setHeaderRequest()
        const headers = Object.assign(this.defaultHeader, (options || {}).headers || {});
        return fetch(url, {
            headers: headers,
        }).then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });

    }

    static post(url, data, options) {
        this.defaultHeader = HeaderRequestService.setHeaderRequest()
        const headers = Object.assign(this.defaultHeader, (options || {}).headers || {});
        return fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    }

    static postFormData(url, data, options) {

        //let defaultHeader = HeaderRequestService.setHeaderRequest()
        const headers = Object.assign((options || {}).headers || {});
        return fetch(url, {
            method: "POST",
            headers: headers,
            body: data
        }).then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    }

    static defaultHeader = {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json',
    }

    // delete

    // put

    // upload


}