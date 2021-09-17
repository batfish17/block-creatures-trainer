# Block Creatures Trainer
Currently training creatures requires clicking "Train" when a creature is "cooled off". This means remembering / making the time to do this  throughout the day. Missing a training session means less earnings & ROI.

This project simplifies the process by interacting with the block creatures NFT smart contract to auto train creatures when they are "cooled off"

## Setup

### Install Node.js
The app requires nodejs to run. If you don't have it on your machine, you can download it here: https://nodejs.org/en/download/

### Clone the project locally
From the command line, go to the folder you want the project to live the run
```
git clone "https://github.com/batfish17/block-creatures-trainer"
```

If you don't have git, you can install it here: https://git-scm.com/downloads

### Add app dependencies
Go into the block-creatures-trainer folder and run
```
npm install
```

## Running the Trainer
The trainer looks for new creatures to train every 5 minutes and outputs whether a creature was skipped (not cooled down) or submitted for training. The trainer will continue running in the background as long as your computer is running. Use the instructions below to configure your settings.

### Add creatures to train
Open `creatures.csv` in the setup folder. Add the id's of the creatures you'd like to train. Do not remove / change the header

### Add wallet information
Open `wallet.json` in the setup folder. Add the private key of the wallet the owns your creatures. This is needed to send signed transactions to the blockchain. **If you share your local version of this project, remove your private key from this file.**

### Start the app
Go into the block-creatures-trainer folder and run
```
 node main.js
```

## Notes
This is a prototype and the trainer has limited error handling. If you get an error ensure that
1. You have enough BNB in your wallet for gas
2. Your setup information is correct (account, creatures) 
