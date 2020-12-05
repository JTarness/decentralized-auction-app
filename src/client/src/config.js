import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


// Replace '' with a real account from ganache
let account0 = '0xfA36EAE5551C19589b14381F6b5bb298e9f3129a'

// Replace [] with rating ABI obtained by truffle console. Only the part between [] (inclusive)
let ratingABI =[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"auctionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"auctionWinners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auctions","outputs":[{"internalType":"string","name":"itemName","type":"string"},{"internalType":"uint256","name":"minBid","type":"uint256"},{"internalType":"uint256","name":"highestBid","type":"uint256"},{"internalType":"address payable","name":"leadingBidder","type":"address"},{"internalType":"address payable","name":"auctionCreator","type":"address"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"bool","name":"completed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bidders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"},{"internalType":"address payable","name":"winner","type":"address"}],"name":"setAuctionWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"}],"name":"getLastSoldVal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"}],"name":"viewPreviousAuction","outputs":[{"components":[{"internalType":"string","name":"itemName","type":"string"},{"internalType":"uint256","name":"minBid","type":"uint256"},{"internalType":"uint256","name":"highestBid","type":"uint256"},{"internalType":"address payable","name":"leadingBidder","type":"address"},{"internalType":"address payable","name":"auctionCreator","type":"address"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"bool","name":"completed","type":"bool"}],"internalType":"struct AuctionHouse.Auction","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"},{"internalType":"uint256","name":"bidValue","type":"uint256"}],"name":"placeBid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]
let ratingAddress='0x11963498df2b42cB77ee7c361de5A97DBD30fa3F'
// Initialize the rating contract with web3
// Reference: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html
const ratingContract=new web3.eth.Contract(ratingABI, ratingAddress)

export {ratingContract, account0};
