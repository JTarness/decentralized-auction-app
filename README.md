Final Project for Blockchain Technologies by Andrew Hogan, James Moy, and Jonathan (J) Tarness

# **Introduction**
  While there are many auction apps/sites such as Ebay, Facebook marketplace, and Amazon marketplace, they all share the commonality of being centralized services. This prevents auctioneers and bidders from enjoying true privacy while browsing new items to bid on. These large companies are able to gather unnecessary data about each user such as the types of items they normally bid and the average amount they bid per item. A decentralized auction app like FreeTrade will protect the privacy of all parties involved as they conduct business.  
  FreeTrade is an auction app that allows user to place any item they wish on the site for sale among other users. The app utilizes blockchain technologies to establish a decentralized service that is able to keep track of all transactions. Each item placed for auction and subsequent transaction mines a new block in the chain, and users are able to easily keep track of recent activity on the app. 
## **Features**
- Selecting an Item for Auction-
Users should be able to select a desired item and place it up for auction at a starting transaction price. Information needed: name/type of item, description, starting price 
- Placing a Bid on an Item-
Upon searching for an item or browsing the market homepage, the user will have the ability to    place a bid on their desired item. By specifying gas price and the max ETH a user is willing to give up, an item’s current bid total will be adjusted. 
- Finalizing an Auction-
After a period of time passes or a specific amount of funds are received through bids, the item will be sold to the last highest bidder. The user will be sent a receipt for the transaction reflecting the ETH lost in the purchase as well as the information of the item purchased. This can be observed in the blocks mined by the user’s ganache server as he/she runs the app and places bids.
- Viewing Previous Auctions-
Users should be able to view the previous auctions from their account by tracking the auctions that have expired since the app has launched.
## **Getting Started**
**Installation and Setup**
1. Install Node.js and Ganache
2. Clone this repository and all neccessary assets
3. In a separate shell start GancheCli
4. Configure the config file with your Ganache account and address

**Run**
1. From within the NPM or Yarn directory start the server
2. Open the browser and navigate to https://localhost:3000

## **Demo Video**
The following link will allow new users to see the application in action and act as a tutorial for their first experience with FreeTrade
https://youtu.be/flLxxljHTOM

## **Future Work**
As the team continues to update and improve the features of the FreeTrader app, the following areas will be released in a future version of the application

-An option to add images to show items currently up for auction

-Built in network server on the application for buyers and sellers to communicate (chat room)

-A more refined system for notifications sent to auction winners including information about how they will receive their item (if applicable)


## **Contributors**
- J Tarness, Frontend Developer
- Andrew Hogan, Smart Contract and Backend Developer 
- James Moy, Integration Lead and Bug Fixes
