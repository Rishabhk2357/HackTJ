// import our web3 instance
import web3 from "./web3";
import Contract from "./ForwardExample.json";

// get Contract instance
// replace <> with the address of your deployed Contract instance
// use web3 to get the contract instance
const instance = new web3.eth.Contract(
  JSON.parse(Contract.interface),
  "0x20927FcDe787160Be9c1f95BEA4E891812916d7e"
);

export default instance;
