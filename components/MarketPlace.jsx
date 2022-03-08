import { data } from "../data/data";
import { ethers } from "ethers";
import axios from "axios";
import { useEffect, useState } from "react";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/Market.json";
import { NftContractAddress, marketContractAddress } from "../config";

function MarketPlace() {
  const [nfts, setNfts] = useState([]);
  const [loaded, setLoaded] = useState("loading");
  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const nftContract = new ethers.Contract(
      NftContractAddress,
      NFT.abi,
      provider
    );
    const marketContract = new ethers.Contract(
      marketContractAddress,
      Market.abi,
      provider
    );
    const data = await marketContract.fetchItemsCreated();
    const items = await Promise.all(
      data.map(async (i) => {
        const nftUri = await nftContract.tokenURI(i.tokenId);
        const meta = await axios.get(nftUri);
        let price = ethers.utils.formatUnits(i.price.toString());
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          owner: i.owner,
          image: meta.data.image,
          description: meta.data.decription,
        };
        return item;
      })
    );
    console.log(items);
    setNfts(items);
    setLoaded("loaded");
  }
  if (loaded == "loading") {
    return (
      <h1 className="text-white text-3xl mx-auto mt-40 w-400px">Loading...</h1>
    );
  }
  if (!nfts.length) {
    return (
      <h1 className="text-white text-3xl mx-auto mt-40 w-400px">
        No item in the Marketplace
      </h1>
    );
  }
  return (
    <div className="flex ">
      <div className="flex-1 mr-5 mt-20 px-10">
        {data.map((nft, i) => {
          return (
            <img
              key={i}
              src={nft.image}
              alt={nft.description}
              className={`${i == 0 ? "block" : "hidden"}`}
            />
          );
        })}
      </div>
      <div className=" flex-1 grid grid-cols-2 gap-x-5 gap-y-10  pr-5 hover:shadow-lg">
        {nfts.map((nft, i) => {
          return (
            <div key={i} className={`relative `}>
              <img src={nft.image} alt={nft.description} className=" h-72" />
              <div className=" absolute top-60 w-full">
                <p className="text-white float-right px-2  font-bold">
                  Price {nft.price} ETH
                </p>
                <button className="text-white w-full bg-button-1 py-2 text-lg">
                  Buy
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketPlace;
