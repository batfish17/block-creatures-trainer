const csv = require('csvtojson');
const Trainer = require("./src/trainer");

async function RunTrainingSession(){
    let creatures = await csv().fromFile('./setup/creatures.csv');
    let ids = creatures.map(creature => { return creature.id });

    let trainer = new Trainer(ids);

    return trainer.Train();
}

let trainingInterval = (1000 * 60 * 5) // 5 minutes

RunTrainingSession();
setInterval(RunTrainingSession, trainingInterval)