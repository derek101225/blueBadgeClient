let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'nas-movieview-client.herokuapp.com':
        APIURL = 'https://nas-movieview.herokuapp.com'
}

export default APIURL;