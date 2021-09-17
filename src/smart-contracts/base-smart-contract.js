const ethers = require('ethers');
const contracts = require('./contracts.json');
const wallet = require('../../setup/wallet.json');

const BaseSmartContract = class extends ethers.Contract {

    constructor(name){
        let contract = contracts.filter(x => { return x.name == name })[0];
        
        if(!contract)
            throw "Contract not found";

        let provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
        let signer = new ethers.Wallet(wallet.private_key, provider);

        super(contract.address, contract.abi, signer);
    }
}

module.exports = BaseSmartContract;