import { use } from "chai";
import Link from "next/link";
import { useState } from "react";
import Web3Modal from 'web3modal'
const NavBar = () => {
const [connect, setConnect] = useState(false)
const [selectedAddress, setSelectedAddress] = useState("")
const connectToNetwork =async () => {
const web3Modal = new Web3Modal()
 const connection = await web3Modal.connect();

setSelectedAddress(connection.selectedAddress)
setConnect(true)

} 

  return (
    <div className="flex justify-between items-center py-8 px-5">
      <h3 className="text-white text-3xl font-bold">NFT's</h3>
      <div>
        <Link href="/">
          <a className="text-white-1 text-lg mr-10 visited:text-active-1">Marketplace</a>
        </Link>
        <Link href="/nfts-sold">
          <a className="text-white-1 text-lg mr-10 visited:text-active-1">Post NFTs</a>
        </Link>
        <Link href="/sold_items">
          <a className="text-white-1 text-lg mr-10 visited:text-active-1">Sold NFTs</a>
        </Link>
        <Link href="/your_nfts">
          <a className="text-white-1 text-lg">Your NFTs</a>
        </Link>
      </div>

      <button className="text-white text-lg bg-button-1 py-2 px-10" onClick={connectToNetwork}>{connect ? "Disconnect" : "Connect"} {connect && <span className="text-white block text-xs">{selectedAddress}</span>}</button>
    </div>
  );
};

export default NavBar;
