import Web3 from 'web3';

const web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


// Replace '' with a real account from ganache
let account0 = '0xd0C890879189261b4cE8b8586A3f7B2B3c1760D1'

// Replace [] with rating ABI obtained by truffle console. Only the part between [] (inclusive)
let ratingABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"auctionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"auctionWinners","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"auctions","outputs":[{"internalType":"string","name":"itemName","type":"string"},{"internalType":"address payable","name":"leadingBidder","type":"address"},{"internalType":"address payable","name":"auctionCreator","type":"address"},{"internalType":"uint256","name":"bid","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"h","type":"uint256"},{"internalType":"uint256","name":"m","type":"uint256"},{"internalType":"uint256","name":"s","type":"uint256"},{"internalType":"bool","name":"completed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bidders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pastAuctions","outputs":[{"internalType":"string","name":"itemName","type":"string"},{"internalType":"address payable","name":"leadingBidder","type":"address"},{"internalType":"address payable","name":"auctionCreator","type":"address"},{"internalType":"uint256","name":"bid","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"h","type":"uint256"},{"internalType":"uint256","name":"m","type":"uint256"},{"internalType":"uint256","name":"s","type":"uint256"},{"internalType":"bool","name":"completed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"bidStart","type":"uint256"},{"internalType":"uint256","name":"shours","type":"uint256"},{"internalType":"uint256","name":"sminutes","type":"uint256"},{"internalType":"uint256","name":"sseconds","type":"uint256"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"},{"internalType":"address payable","name":"winner","type":"address"}],"name":"setAuctionWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"}],"name":"getLastSoldVal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"}],"name":"viewPreviousAuction","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"bid","type":"uint256"},{"internalType":"uint256","name":"hour","type":"uint256"},{"internalType":"uint256","name":"minute","type":"uint256"},{"internalType":"uint256","name":"second","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"completed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"}],"name":"viewPastAuctions","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"bid","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPastLeng","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAuctionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"},{"internalType":"uint256","name":"bidValue","type":"uint256"}],"name":"placeBid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"auctionID","type":"uint256"},{"internalType":"uint256","name":"hs","type":"uint256"},{"internalType":"uint256","name":"ms","type":"uint256"},{"internalType":"uint256","name":"ss","type":"uint256"}],"name":"updateTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let ratingAddress='0x5136FA668f6d7aBa7DFcDbC550063415D935027D'
// Initialize the rating contract with web3
// Reference: https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html
const ratingContract=new web3.eth.Contract(ratingABI, ratingAddress)

export {ratingContract, account0};
