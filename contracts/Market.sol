//SPDX-License-Identifier: Unlicense
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract Market is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemsIds;
    Counter.Counter private _itemsSold;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    mapping(uint256 => MarketItem) private idToMarketItem;
    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can excute this function ");
        _;
    }

    function getMarketOwner() public view returns (address) {
        return owner;
    }

    // places an item for sale on market place

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public onlyOwner {
        require(price > 0, "Price must be atleast 1wei");
        _itemsIds.increment();
        uint256 itemId = _itemsIds.current();
        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(owner),
            payable(address(0)),
            price,
            false
        );
        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    // Sell NFts
    function sellNFts(address nftContract, uint256 itemId)
        public
        payable
        nonReentrant
    {}
}
