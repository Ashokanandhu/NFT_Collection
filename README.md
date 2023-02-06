# NFT_Collection
A decentralised web app to mint nft from the given  nft collection.

## Statement of Purpose
My name is Anandhu Ashok, 
I have a very exciting tutorial lined up. NFTs (non-fungible tokens) are all the buzz these days, from BoredApes to Crypto Kitties EVERYONE is talking about them.
I am building 'your own NFT marketplace' from complete scratch.
We will be setting up a minting price for our NFTs so that we can make some money for our NFT collection.
We will also setup a maximum limit on the number of NFTs one public address can buy, so that more people can get their hands on our super popular NFT collection.
But how will a user mint our super popular NFT collection? Because an average user isn’t a top-notch programmer like you and me, so I think we should also make up a simple react webpage where the user can mint our NFTs on the click of a button.

This is a great head start for anyone looking to create NFT collection or a marketplace and making money through it. This is how our marketplace will look like. 

## Course Overview:

1. We will start of with setting up our development environment and downloading all the dependencies. The tech stack we will be using - Hardhat, Alchemy, Pinata, 
   React and Ethers.js
2. We will then use the openzepellin library’s ERC721 smart contract, and inherit it to create our own NFT smart contract called Collection.sol
3. After that we will need to deploy our smart contract using 'ethers.js' and check our deployment on 'etherscan'.
4. we’ll make a very simple react frontend for our website.
5. This webpage will be able to list 5 NFTs
6. A user would be able to connect to their metamask and mint any 2 of these NFTs.

   And that’s it, you will now be able to see and enjoy your NFT in your own metamask wallet!
   
## Skills You Will Learn
  1.  Writing Smart Contracts in Solidity
  2.  Using Open Zepellin
  3.  Working with ERC721 Smart Contracts
  4.  Hosting metadata on IPFS using Pinata
  5.  Compiling and Deploying Smart Contracts using hardhat
  6.  Connecting to the Alchemy Node Service
  7.  Setting a minting price on NFTs
  8.  Setting a minting limit per user
  9.  Creating a basic react marketplace for your NFTs
  10. Connecting metamask to react frontend
  11. Calling Solidity Smart Contract from react
  12. Withdrawing Money from a Smart Contract

## Pre Requisites
+ Install Node and npm in your machine.
+ Have VScode installed in your machine. And, install Solidity plugin!
+ Setup your metamask account.

### Setting Up The Environment
So first things first, let’s create a directory for our project.
Go to your command line and enter these commands
(WSL is recommended for easier installation in Windows)

```
mkdir nft-collection  
cd nft-collection
```
Time to set up npm in our project. We will use the node package manager to easily download and manage our dependencies.
```
npm init 
```
Just use the default values for all the installation questions and press enter.

Once you have completed installation, you should see a package.json file in your nft-collection directory.

### Installing Dependencies
We would now need a framework to help us to write, compile, test and deploy our smart contract 

#### Hardhat
Blockchain is like a public database and our smart contracts live on that database. This database is publicly available and accessible. Based on our contract’s configuration, anyone or only specific people can play around with our contract. Every time we publish a contract on blockchain, it gets an address - a digital footprint for us to track it. We’ll build everything in the Ethereum Blockchain and also use Solidity and other libraries for this project.
   
   Publishing a contract directly on blockchain for learning purposes will be an expensive deal. Every time we create a new contract, edit the contract or publish it on the blockchain, we incur some cost in the form of ETH, or MATIC. In order to avoid that and test the contracts properly, we will create a test environment which pretty much replicates the production environment, is free to use, and easy to access.
   
   For this purpose, we will use HardHat. Hardhat gives you a local Ethereum network designed for rapid development. It allows you to deploy your contracts, run your tests and debug your code without spending a dime.
   
   ```
   npm install --save-dev hardhat
   ```
You can check out the [hardhat documentation]([url](https://hardhat.org/hardhat-runner/docs/getting-started#overview)) for any help with installation.
## Install this command (npm install) if node packages not available
Then go to collection_react directory to run the react app
