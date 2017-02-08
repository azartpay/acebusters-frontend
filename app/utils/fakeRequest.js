import server from './fakeServer';

server.init();

const fakeRequest = {
  /**
  * Pretends to post to a remote server
  * @param  {string}  endpoint The endpoint of the server that should be contacted
  * @param  {?object} data     The data that should be transferred to the server
  */
  post(endpoint, data) {
    switch (endpoint) {
      case '/login':
        return server.login(data.email);
      case '/register':
        return server.register(data.email, data.allet);
      case '/logout':
        return server.logout();
      default:
        break;
    }
    return null;
  },
};

export default fakeRequest;