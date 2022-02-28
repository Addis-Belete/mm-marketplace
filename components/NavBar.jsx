import Link from "next/link";

const NavBar = () => {
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

      <button className="text-white text-lg bg-button-1 py-2 px-10">Connect</button>
    </div>
  );
};

export default NavBar;
