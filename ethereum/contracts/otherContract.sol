pragma solidity ^0.4.17;

    

contract ForwardExample {
    // Keep the target contract in, instead of passing it as a parameter
    // To forward function.
    function receive(address benefactor) payable
        returns (bool) {
            received=msg.value;
        // Receives msg.value from msg.sender, in your case ForwardExample
        // But understands benefactor is the one who "paid".
        return true;
    }
    address public receiverAddress;
    uint public received;
    function ForwardExample(address receiverAddr) {
        receiverAddress = receiverAddr;
    }

    function forward(address myOtherAddress) payable
        returns (bool) {
        // Pass on the whole ether received.
        myOtherAddress.transfer(received);
        
        return true;
    }
}