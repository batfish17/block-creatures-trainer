const BaseSmartContract = require('./base-smart-contract');
const ethers = require('ethers');

const BlockCreaturesNFTContract = (function(){

    let contract = new BaseSmartContract("block-creatures-nft");
    let nonce = 0;
    let sessions = 0;

    async function PrepareForTraining(){
        let signerAddress = await contract.signer.getAddress();
        
        nonce = await contract.provider.getTransactionCount(signerAddress);
        sessions = 0;
    }

    async function IsCooledOff(id){
        return (await contract.functions.cooledOFF(id))[0];
    }

    async function Train(id){
        let gas = {
            gasLimit: 150000,
            gasPrice: ethers.utils.parseUnits("5.5", "gwei").toNumber()
        }

        let unsignedTransaction = await contract.populateTransaction.train(id, gas);

        unsignedTransaction.chainId = 56;
        unsignedTransaction.nonce = nonce + sessions;

        sessions++;

        let signedTransaction = await contract.signer.signTransaction(unsignedTransaction);

        return contract.provider.sendTransaction(signedTransaction);
    }

    return {
        PrepareForTraining: PrepareForTraining,
        IsCooledOff: IsCooledOff,
        Train: Train
    }

})(); 

module.exports = BlockCreaturesNFTContract;