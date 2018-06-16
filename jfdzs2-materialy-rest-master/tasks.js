var apiHost = 'https://co-nas-loczy.firebaseio.com/';

class ApiClient {
    sendRequest(method, resource, data = null) {
        return fetch(`${apiHost}${resource}.json`, {
            method,
            body: data ? JSON.stringify(data): null,
        }).then(response => response.json())
        .then(json => {
            console.log('Response: ', json);

            return json;
        });
    }


   addUser(user){
        return this.sendRequest('POST', '/users', user);
    }


    getUsers(user){
        return this.sendRequest('GET', '/users', user);
    }

    putUser(userId, user){
        return this.sendRequest('PUT', `/users/${userId}`, user);
    }

    deleteUser(userId){
        return this.sendRequest('DELETE', `/users/${userId}`);
    }

    addUserPost(userId, post){
        return this.sendRequest('POST', `/users/${userId}/posts`);
    }

    getUserPosts(userId){
        return this.sendRequest('GET', `/users/${userId}/posts`);
    }

}


