const BlockCreaturesNFTContract = require("./smart-contracts/block-creatures-nft");

const Creature = class {
    constructor(id){
        this.id = Number(id);
    }

    async Train(){
        let isCooledOff = await BlockCreaturesNFTContract.IsCooledOff(this.id);

        if(isCooledOff) {
            console.log("Training: " + this.id);

            return BlockCreaturesNFTContract.Train(this.id);
        }
        else {
            console.log("Skipping: " + this.id + " creature is not cooled off");

            return Promise.resolve();
        }
    }
}

module.exports = Creature;