import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-8 px-5">
      <h3 className="text-white text-3xl font-bold">NFT's</h3>
      <div>
        <Link href="/">
          <a className="text-white-1 text-xl mr-10 visited:text-active-1">Marketplace</a>
        </Link>
        <Link href="/nfts-sold">
          <a className="text-white-1 text-xl mr-10 visited:text-active-1">Post NFTs</a>
        </Link>
        <Link href="/sold_items">
          <a className="text-white-1 text-xl mr-10 visited:text-active-1">Sold NFTs</a>
        </Link>
        <Link href="/your_nfts">
          <a className="text-white-1 text-xl">Your NFTs</a>
        </Link>
      </div>

      <button className="text-white bg-button-1 py-3 px-10">Connect</button>
    </div>
  );
};

export default NavBar;
