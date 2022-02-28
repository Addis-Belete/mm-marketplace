import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex">
      <h3>NFT's</h3>
<div>
      <Link href="/">
        <a>Marketplace</a>
      </Link>
      <Link href="/sold_items">
        <a>Marketplace</a>
      </Link>
      <Link href="/your_nfts">
        <a>Marketplace</a>
      </Link>
</div>

      <button>Connect</button>
    </div>
  );
};

export default NavBar;
