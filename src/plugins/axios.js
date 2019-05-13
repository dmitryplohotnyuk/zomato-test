import axios from 'axios';

let server = axios.create({
	baseURL: 'https://developers.zomato.com/api/v2.1/'
});

server.interceptors.request.use(function(request){
    request.headers = {
        'user-key': '76e612d689a7c16fc2bdddd946461d74'
    };
    return request;
});

export default server;