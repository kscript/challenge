const KsMock = require("ks-mock");
const datas = require('./datas.js');
const rules = require('./rules.js');
new KsMock({
    mockData: datas,
    headConfig: null,
    crossDomain: true,
    port: 3030,
    rules: rules,
    // loginUrl: 'login',
    // https: {
    //   key: '',
    //   cert: ''
    // }
}).server();