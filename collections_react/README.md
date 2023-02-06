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

To make it more accessible to our react frontend, make a new file called **‘contractABI.json’** in the src folder of the collections_react directory.

Now go to your smart contract project, open artifacts directory and copy the contents of the **‘contracts / Collection.sol / Collection.json’** file.

Paste these contents into your newly created **contractABI.json** file.

We will use this ABI to mint NFTs from our react frontend in the next step!

## Creating App.js functionalities
Populate the App.js file with the following code -- [App.js](Populate the App.js file with the following code)

Now let us break down what is this code exactly doing -

### Connecting to Metamask
```
const [account, setAccount] = useState(null);
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [NFTContract, setNFTContract] = useState(null);
  // state for whether app is minting or not.
  const [isMinting, setIsMinting] = useState(false);
 
  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);
 
  useEffect(() => {
      function initNFTContract() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setNFTContract(new Contract(contractAddress,contractABI.abi,signer));
      }
      initNFTContract();
  }, [account]);
 
 
  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }
```

+ useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. We are starting with a false state for if the wallet is installed. And a null state for if an account is connected.
+ When you call useEffect , you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render.
+ MetaMask injects a global API into websites visited by its users at window.ethereum. This API allows websites to request users’ Ethereum accounts, read data from blockchains the user is connected to, and suggest that the user sign messages and transactions. The function connectWallet simply does a remote procedure call to Ethereum via MetaMask. It returns a Promise that resolves to the result of the method call.

Note: Ensure that your metamask extension is logged in (Not asking for password) while running the react app, otherwise you will get an error.

 Our first page first checks  your metamask is connected or not, if it is not connected it gives you the option to connect using the connectWallet button
 
 ```
 <div className="container">
          <br/>
          <h1>MY_Mob_Labs</h1>
          <h2>NFT Marketplace</h2>
          <p>Buy an NFT from our marketplace.</p>

          {isWalletInstalled ? (
            <button onClick={connectWallet}>Connect Wallet</button>
          ) : (
            <p>Install Metamask wallet</p>
          )}
        </div>
      </>
    );
  }
```

next part of the code, is where you would populate your NFTs metadata into the marketplace. So you can display and mint these NFTs on the webpage.

🚨 Copy the assets folder provided to you, to the public folder in your react app.

Now populate this data with each image, and its corresponding metadata hosted on the IPFS.

```
const data = [
  {
    url: "./assets/images/1.png",
    param: "handleMint('<your_metadata_pinata_link_here>')",
  },
  {
    url: "./assets/images/2.png",
    param: "handleMint('<your_metadata_pinata_link_here>')",
  },
  {
    url: "./assets/images/3.png",
    param: "handleMint('<your_metadata_pinata_link_here>')",
  },
  {
    url: "./assets/images/4.png",
    param: "handleMint('<your_metadata_pinata_link_here>')",
  },
  {
    url: "./assets/images/5.png",
    param: "handleMint('<your_metadata_pinata_link_here>')",
  },
];    
```
So what is going on here?

Everytime the user mints an NFT we call the handleMint function with the tokenURI or the IPFS link of the metadata of that NFT.

+ We then check if the user has a metamask wallet using window.ethereum
+ We then use the providers functionality provided to us by the ethers.js library to get the       signer from your metamask wallet.
+ Then using the signer, the contract ABI, and the address of the contract you deployed to         goerli, we create a new instance of a contract. We can interact with this local instance of     the contract as if we are interacting with the deployed contract.
+ We then create a constant options which will hold the amount of money we want to buy the NFT     for, in our case the NFT is valued at 0.01 eth, so we pass that into the parseEther function.   If you put anything less than this the contract would reject your transaction, because we have   coded it that way :)

This options constant, will populate the msg.value field of our transaction with 0.01 ether, remember when we used msg.value to check the amount of ether that has been paid to the smart contract?

+ Lastly we come to the final step of our journey, minting the NFT using contract.mintNFT(), this calls the mintNFT function of the deployed smart contract and passes the tokenURI and the option constant along with it.

**You can now mint your NFTs on your very own NFT marketplace.**

But before we do that, here is some important information that you need to know before you start playing with your web app.

You will encounter some alert errors when you click on certain buttons, do not panic!

Read these alerts carefully and you’ll see that they actually show that our smart contract is working properly.

If you read the error carefully, you’ll see that if you try using the smart contract incorrectly, for example if you try to withdraw money from an account which is not the owner, then you will be reverted.

So essentially these alerts are a good thing.
 
## Time to launch your NFT marketplace
Run this command in the collections_react directory to start your react app.(Go to collection_react directory ain your project folder)

```
npm run start
```
 
Note: I already finished all the requirements and you can simply download the project from git hub and run it on the local host to see the nft market  place using "npm       run start" command -- [NFT_Collection](https://github.com/Ashokanandhu/NFT_Collection.git)

## You should be able to see your NFT marketplace in your browser.

 ![NFT_Marketplace](https://user-images.githubusercontent.com/119148713/217030943-e67404af-b774-48d7-bc53-b8d9fd81835f.png)
 
 ![NFT_MarketPlace0](https://user-images.githubusercontent.com/119148713/217033720-904744f4-873a-4b87-bc75-ae000a66f64b.png)

Try clicking random mint buttons and see what happens.

Play around with it, it is yours now!

Take care of 2 things though

+ That you have enough goerli eth in your metamask wallet to buy the NFTs
+ You can’t mint more than 2 NFT , because we have set a minting limit of one per address. So     you can try minting NFTs from other accounts if you want more than 2, or you can re-deploy       your smart contract with the new minting limit!
 
 ![NFT_Marketplace4](https://user-images.githubusercontent.com/119148713/217031548-86d0a7ab-fac5-4d1a-a8b0-4dc9993209a8.png)
 
 ![NFT_Marketplace2](https://user-images.githubusercontent.com/119148713/217031426-56514b61-073c-4a58-b8cb-2d7717c1b9c0.png)

![NFT_Marketplace3](https://user-images.githubusercontent.com/119148713/217031504-e88fd375-e79f-4f12-8a17-d1df5583d4c3.png)

## Viewing your NFTs in metamask & etherscan

You can now go to the goerli etherscan of your smart contract and see the various details of how the mint took place.

You can also check if the NFT has been airdropped to your account or not on goerli.etherscan.

1. Go to https://goerli.etherscan.io/ and check the contract address to see the latest              transactions.
2. Go to https://testnets.opensea.io/ and search your contract address to see minted NFTs.

![NFT_MarketPlace5](https://user-images.githubusercontent.com/119148713/217037187-00246a6b-15c1-4918-8139-bac60e45d15f.png)

![NFT_MarketPlace6](https://user-images.githubusercontent.com/119148713/217037225-8652afec-a88e-412e-afc0-4b2689aabbf1.png)

**To view your NFTs in your metamask account.**
+ Go to metamask’s mobile app.
+ Import your current metamask wallet using the recovery phrase.
+ And then click on import NFTs.
+ Enter your contract address and tokenID (you can find this on etherscan) of the NFT minted       here.
+ Refresh metamask a few times, and you now have your own NFT!

## Summary

Congratulations  we have completed the projects,How make an NFT marketplace with a mint price.


