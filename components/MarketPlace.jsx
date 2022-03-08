import { data } from "../data/data";
import { ethers } from "ethers";
import axios from "axios";
import {useEffect, useState} from 'react'
import Web3Modal from "web3modal";
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/Market.json'
import { NftContractAddress, marketContractAddress } from "../config";


 function MarketPlace() {

useEffect(() => {
	loadNFTs()
}, [])
 
	 async function loadNFTs() {
const provider = new ethers.providers.Web3Provider(window.ethereum)
const nftContract = new ethers.Contract(NftContractAddress, NFT.abi, provider)
const marketContract = new ethers.Contract(marketContractAddress, Market.abi, provider)	
const data = await marketContract.fetchItemsCreated()	 
console.log(data)
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
        {data.map((nft, i) => {
          return (
            <div key={i} className={`relative `}>
              <img src={nft.image} alt={nft.description} className=" h-72" />
              <div className=" absolute top-60 w-full">
                <p className="text-white float-right px-2 text-active-1 font-bold">
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
};

export default MarketPlace;
