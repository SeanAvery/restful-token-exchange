import Promise from 'bluebird';
import Web3 from 'web3';
let {
  TESTRPC_PROVIDER,
  TESTRPC_PORT
} = require('./.env.json');
let web3;

Promise.delay(0).then(() => {
  web3 = new Web3(new Web3.providers.HttpProvider(TESTRPC_PROVIDER))
  console.log('web3', web3)
}).then(() => {
  // let deployEngines = {
  //
  // }
})
