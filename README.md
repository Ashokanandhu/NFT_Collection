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
You can check out the <ins>[hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#overview)</ins> for any help with installation.

now let’s set up hardhat by running this command inside our project folder.
```
npx hardhat
```
create an empty hardhat config file during installation.

Once you have installed hardhat, quickly create 2 new directories - contracts and scripts in your root directory using these commands. The contracts directory will have all your smart contracts and the scripts directory will have all the scripts related to deployment of the contract.
```
mkdir contracts
mkdir scripts
```
### Installing OpenZeppelin
Openzeppelin is a library used for secure and efficient smart contract development.

It is very time consuming to code the ERC721 contract from scratch. So we use already completed and security audited smart contracts from openzeppelin

download openzeppelin using this command
```
npm install @openzeppelin/contracts
```
This is how your project folder will look like now.
```
NFT-collection
-> cache
-> contracts
-> node_modules
-> scripts
- hardhat.config.js
- package-lock.json
- package.json
```
### Creating  MetaMask wallet
Metamask wallet is your key to the web3 world. You can interact with the blockchain via a Metamask account. It is your digital wallet to store, swap and buy cryptocurrencies, tokens, NFTs, and other amazing things in the web3 world.

Go to <ins>[MetaMask.io](https://metamask.io/)</ins>

### Creating Quick Node endpoint
Set up [QuickNode](https://www.quicknode.com/?utm_source=partner&utm_campaign=metaschool&utm_content=metaschool-guides&utm_medium=partner) with Ethereum testnet nodes

QuickNode is a platform which helps you access the blockchain environment without going through the hassle of hosting your own node, saving time and resources. This platform lets you access blockchain nodes in a few clicks and you can scale the node performance according to your need thus creating an environment for you to scale your DApp.

+ Sign in / Sign up to your QuickNode account
+ Click on create an QuickNode endpoint 
+ Now select Ethereum as Network and Goerli as chain and continue
+ We don’t need any add-on so click **create endpoint **now

Once you create the endpoint you can start setting up our Metamask Wallet with QuickNode.

+ Go to your Metamask wallet and click on the list of networks.
+ A drop-down list will show up with a list of networks but you need to click on **ADD NETWORK** at   the bottom of the list
+ Now you will have a form to fill up to add a new network to your metamask account
+ Let’s go back to QuickNode Endpoint Dashboard, and copy the HTTPS

Now let’s go back to the Metamask add network form and 
+ Paste the HTTPS in New RPC Url field with 5 as Chain ID, 
+ “ETH” as Currency Symbol, 
+ Ethereum Goerli as Network Name (Any name as you like) and 
+ Finally https://goerli.etherscan.io/ as Block Explorer URL. 
+ Click Save

### Get some fake ETH $$
 Try to get some fake ETHs. This fake money will be used for deploying your contract and doing transactions on your contract. This is not real money, you can’t buy NFTs, or other assets via these ETH.
 
 Drop your public address on the following links and the ETH will be transferred.
 
+ https://goerlifaucet.com/

### Storing information the right way
 we will create the **.env** file and for that we need the HTTP address from quicknode dashboard which you can copy from the dashboard itself and the private key from Metamask
   ####Get your private  (MetaMask key)
   Open the Metamask extension to find your private key. While writing and deploying your contract you sign off each contract with your private key to tell the blockchain that you are a legit person creating a real transaction. Now if that private key is made visible, the hacker can gain access to your account and then the rest will be history.
   
Keep your account and private key safe in the next steps

 🚨 DON’T COMMIT YOUR PRIVATE KEY ON GITHUB, DON’T SHARE IT ON DISCORD, DON’T SHARE IT ANYWHERE!
 
 IF YOUR KEY IS PUBLIC, HACKERS AND STEALERS WILL TAKE ALL YOUR FUND AND EVERYTHING THAT IS ASSOCIATED WITH THAT ACCOUNT.
 
 While writing and deploying your contract you sign off each contract with your private key to tell the blockchain that you are a legit person creating a real transaction. Now if that private key is made visible, the hacker can gain access to your account and then the rest will be history. In order to avoid this issue. Let’s do the following.
 ```
 npm install dotenv --save
npx touch .gitignore
touch .gitignore
```
Go ahead and create .env file at the root of your project.

Open your .gitignore file and write **.env** there.


All the secrets and important keys related to your project will be stored in .env file and we can access this data whenever and wherever. In the gitignore file we simply write .env, it tells git to ignore that file from future commits.

Open the .env file you have just created. Add your MetaMask Private Key and QuickNode App HTTP URL there. Should be something like this.
```
API_URL_KEY = YOUR_QUICKNODE_APP_URL
PRIVATE_KEY = YOUR_PRIVATE_KEY
```
Now we will be able to securely use all of our private information in this project.

## Writing smart contract
Go to your contracts directory and make a new file called Collection.sol.


## Install this command (npm install) if node packages not available
Then go to collection_react directory to run the react app
