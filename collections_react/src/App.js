import "./App.css";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import contractABI from "./contractABI.json";
 
const contractAddress = "0xd6a7a1DE44e47dFb18E534B318dd0B3122Ed123a";
 
function App() {
 
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

  const data = [
    {
      url: "./assets/images/1.png",
      param: "handleMint('https://gateway.pinata.cloud/ipfs/QmSTPKMpECmsaCvy58sVfcfhtKN8ytZ5sqMhDzYS7eH3re?_gl=1*1duj0ka*_ga*NDY5MjQ0NTExLjE2NzQyODM2MjY.*_ga_5RMPXG14TE*MTY3NDI4MzYyNi4xLjEuMTY3NDI4ODgyOS41OC4wLjA.')",
    },
    {
      url: "./assets/images/2.png",
      param: "handleMint('https://gateway.pinata.cloud/ipfs/QmVn8CtAUGVtuA1YfSgADJNLEy2haShKCKHrHBGiL6YbXN?_gl=1*1i6bte7*_ga*NDY5MjQ0NTExLjE2NzQyODM2MjY.*_ga_5RMPXG14TE*MTY3NDI4MzYyNi4xLjEuMTY3NDI4ODgyOS41OC4wLjA.')",
    },
    {
      url: "./assets/images/3.png",
      param: "handleMint('https://gateway.pinata.cloud/ipfs/QmSsoXkaXRBcrjGmeg1sZ3vXVaDLJyVk4ACmUnqJbbg9YY?_gl=1*1i6bte7*_ga*NDY5MjQ0NTExLjE2NzQyODM2MjY.*_ga_5RMPXG14TE*MTY3NDI4MzYyNi4xLjEuMTY3NDI4ODgyOS41OC4wLjA.')",
    },
    {
      url: "./assets/images/4.png",
      param: "handleMint('https://gateway.pinata.cloud/ipfs/QmSNzFCGZCGXsWPoYCVd82yBVBBq5HPnUCVg9aJbpbBiuL?_gl=1*1agwg2d*_ga*NDY5MjQ0NTExLjE2NzQyODM2MjY.*_ga_5RMPXG14TE*MTY3NDI4MzYyNi4xLjEuMTY3NDI4ODgyOS41OC4wLjA.')",
    },
    {
      url: "./assets/images/5.png",
      param: "handleMint('https://gateway.pinata.cloud/ipfs/QmdkdL8v1FdkL4jKgKjKqUWmoPcP4Wy3Kk5cYpcQrJ4NSq?_gl=1*1ypk9pl*_ga*NDY5MjQ0NTExLjE2NzQyODM2MjY.*_ga_5RMPXG14TE*MTY3NDI4MzYyNi4xLjEuMTY3NDI4ODgyOS41OC4wLjA.')",
    },
  ];
 
  async function withdrawMoney(){
    try {
      const response = await NFTContract.withdrawMoney();
      console.log("Received: ", response);
    } catch (err) {
      alert(err);
    }
  }
 
  async function handleMint(tokenURI) {
    setIsMinting(true);
      try {
        const options = {value: ethers.utils.parseEther("0.01")};
        const response = await NFTContract.mintNFT(tokenURI, options);
        console.log("Received: ", response);
      } catch (err) {
        alert(err);
      }
      finally {
        setIsMinting(false);
      }
  }
 
  if (account === null) {
    return (
      <>
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
 
  return (
    <>
      <div className="container">
        <br/>
        <h1>Meta_Mob_Labs</h1>
      
        <h2>NFT Marketplace</h2>
          {data.map((item, index) => (
            <div className="imgDiv">
              <img
                src={item.url}
                key={index}
                alt="images"
                width={250}
                height={250}
              />
              <button isLoading={isMinting}
                onClick={() => {
                  eval(item.param);
                }}
              >
                Mint - 0.01 eth
              </button>
            </div>
          ))}
            <button 
              onClick={() => {
                withdrawMoney();
              }}
            >
              Withdraw Money from Contract
            </button>
      </div>
    </>
  );
}
 
export default App;