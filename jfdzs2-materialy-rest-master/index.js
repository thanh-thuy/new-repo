const api = 'http://api.football-data.org/v1/competitions/467';

class ApiClient {
    sendRequest(method, resource, data = null) {
        return fetch(`${apiHost}${resource}.json`, {
            method,
            body: data ? JSON.stringify(data) : null,
        }).then(response = > response.json()
    )
    .then(json = > {
            console.log('Response: ', json);

        return json;
    });
    }
}
const Client = new Client
