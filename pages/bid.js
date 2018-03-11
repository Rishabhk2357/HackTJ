
//import contract from "ethereum/contract";
//import Layout from "components/Layout";
import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
//var fs = require('fs');
import web3 from "ethereum/web3";
import contract from "ethereum/contract";
import Layout from "components/Layout";

class Bid extends Component {
  state = {
    bidAmount: 0
  };
  
  
  handleOnSubmit = async event => {
    //event.preventDefault();

    try {
	 
      //const accounts = await web3.eth.getAccounts();
      //var arr=fs.readFileSync('./addresses.txt').toString().split('\n');
      
      // reset state
      this.setState({
        bidAmount: 0
      });
    } catch (err) {
      console.log("An Error occured: " + err);
    }
  };

  render() {
  	
    
    const accounts = web3.eth.getAccounts(function(err,res){
    console.log("fjksdlfjas;kldfja;lsdjflaks;djf");
    //web3.personal.unlockAccount("0x3103c1fa371d81867cdc95d22426746dfa98c43d", 'vishnurthy');
    //web3.personal.unlockAccount("0x5503f8e4fa992f1053469e89dc26a0e58c460de9",'Rk963017');
    var start=res[0];//arr[0].trim();
      var end="0x3103c1fa371d81867cdc95d22426746dfa98c43d";//arr[1].trim();
      var amount="3";/*parseInt(arr[2].trim());*/
    
      console.log(start);
    contract.methods.receive(start).send({
        from: start,
        value: web3.utils.toWei(amount, "ether")
      });
    
    });
    console.log ("We're finished!!!!!");
    
   //  contract.methods.forward(end).send({
//         from: end,
//         value: 0
//       });
	
    return (
      <Layout>
        <h3>Place Bid</h3>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Field required>
            <Input
              label="Bid Amount in Ether"
              type="number"
              icon="money"
              value={this.state.bidAmount}
              onChange={event =>
                this.setState({ bidAmount: event.target.value })
              }
            />
          </Form.Field>
          <Button type="submit">Place Bid</Button>
        </Form>
      </Layout>
    );
  }
}

export default Bid;

