# Getting Started with Create React App

## Making the Frontend of your Marketplace

### Setting Up React
Now create the framework for a basic react app quickly using the command.
```
npx create-react-app collections_react 
```
You should now see a folder called collections_react with all of the basic react template code inside it.

Note: You can also make this react app directory separately from the smart contract directory. But to do that you will have to install ethers in the new react directory using this command -
```
npm i ethers 
```
## Setting Up Pinata
Before we start minting NFTs, we need to define what they will look like.

We need to find images that we want to use, we need to write metadatas for our NFTs (Remember when we talked about metadatas before?)

So go ahead and download the [“assets”](https://github.com/Ashokanandhu/NFT_Collection/tree/main/collections_react/public) folder from here in the public directory of your react app.

Note:you can put up your own images and create your own metadatas and replace them in the assets folder.
We will be creating 5 NFTs for our marketplace. You can find the images for these NFTs in the [assets/images](https://github.com/Ashokanandhu/NFT_Collection/tree/main/collections_react/public/assets) folder.

You can’t pass a complete image to your smart contract. You first need to host it onto a decentralized IPFS (Inter Planetary File System). The InterPlanetary File System is a protocol and peer-to-peer network for storing and sharing data. We will be using <ins>[Pinata](https://www.pinata.cloud/)</ins> for storing the metadata of our NFTs.

So go and make a [Pinata](https://www.pinata.cloud/) account quickly and come back.

🚨 This is important, follow the steps

Once you login to your pinata dashboard, upload the images folder from assets folder to it. Once you have uploaded the images onto the IPFS, we will now add the individual link of all of these images to their respective metadatas. These metadata files are in your assets folder. So click on the images folder, then click on each individual image and copy its url from the browser. 

Enter this URL into the image field of the metadata that this image corresponds to.

To do this, you now have to go the assets/metadata folder, and fill all 5 of the empty “image” values, with the corresponding IPFS link.

```
{
    "description": "This is polar bear NFT",
    "image": "<your-image-pinata-link-here>",
    "name": "Polar Bear"
}
```

Now that you have filled in the metadata folder completely, upload it to the IPFS using Pinata, just like we did for the images!


## Making your marketplace frontend
you will only be concerned with 2 files

+ App.css - will hold some very basic css styling for our marketplace
+ App.js - will hold the code for the mint button and connecting to metamask

So first let’s get the styling out of the way. Go to your App.css file and delete everything from it.

Now copy and paste the following lines of code to it --[App.css](https://github.com/Ashokanandhu/NFT_Collection/blob/main/collections_react/src/App.css)

This is just some basic CSS styling for our webpage to make it look a little more neat

## The contract ABI
Every smart contract has something called an ABI or the Application Binary Interface.

🚨 🚨 🚨 This is a super important step.🚨 🚨 🚨

An ABI provides a description of the contract’s interface.

We can interact with a smart contract using its ABI.

Remember that artifacts folder that I told you to keep an eye out for?

Our contracts ABI is automatically stored in that folder by Hardhat.

To make it more accessible to our react frontend, make a new file called ‘contractABI.json’ in the src folder of the collections_react directory.

Now go to your smart contract project, open artifacts directory and copy the contents of the ‘contracts / Collection.sol / Collection.json’ file.Paste these contents into your newly created contractABI.json file.We will use this ABI to mint NFTs from our react frontend in the next step!
