const Creature = require("./creature");
const BlockCreaturesNFTContract = require("./smart-contracts/block-creatures-nft");

const Trainer = class {

    constructor(creatures){
        this.creatures = creatures.map(id => { return new Creature(id) });
    }

    async Train(){
        console.log("=== Starting training for " + this.creatures.length + " Creatures ====");

        await BlockCreaturesNFTContract.PrepareForTraining();

        let trainingSessions = this.creatures.map(creature => { return creature.Train() });

        await Promise.all(trainingSessions);

        console.log("=== Completed Training ===");

        return Promise.resolve();
    }
}

module.exports = Trainer 