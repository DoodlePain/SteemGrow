import steem from 'steem';

var api = {
  getInfo(url) {
    url = 'https://uploadbeta.com/api/steemit/account/?id=' + url
    return fetch(url, {method: 'GET'}).then((res) => {
      // console.log(res.json());
      return res.json()
    });
  }
};

export default api;
