import React,  { Component } from 'react';
import Table from './components/Table.js';
import { ratingContract, account0 } from "./config";
import Modal from 'react-modal';
import './components/Table.css';

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			auction: [],
			pastAuctions: [],
			showModal: false,
			showBidModal: false,
			showPModal: false,
			cTime: "Enter Time as hh:mm:ss",
			cItem: '',
			cBid: 0,
			cHour: 0,
			cMinute: 0,
			cSecond: 0
		};
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeItem =this.handleChangeItem.bind(this);
		this.handleChangeBid = this.handleChangeBid.bind(this);
		this.handleChangeTime = this.handleChangeTime.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.bid = this.bid.bind(this);
		this.setWinner = this.setWinner.bind(this);
		this.handlePShowModal = this.handlePShowModal.bind(this);
		this.handlePCloseModal = this.handlePCloseModal.bind(this);
	}



	async setTable() {
		let leng = await ratingContract.methods.getAuctionCount().call();
		for(let i = 0; i < leng; i++) {
			let list = await ratingContract.methods.viewPreviousAuction(i).call();
			let tempList = {name: list[0], bid: list[1], hours: list[2], minutes: list[3], seconds: list[4], id: list[5], completed: list[6]};
			this.setState({auction: this.state.auction.concat(tempList)});
		}
	}

	async setPastTable() {
		let leng = await ratingContract.methods.getPastLeng().call();
		for(let i = 0; i < leng; i++) {
			let list = await ratingContract.methods.viewPastAuctions(i).call();
			let tempList = {name: list[0], bid: list[1], winner: account0};
			this.setState({pastAuctions: this.state.pastAuctions.concat(tempList)});
		}
	}

	async componentDidMount() {
		await this.setTable();
		await this.setPastTable();
	}

	//getSnapshotBeforeUpdate(prevProps, prevState) {
	//	ratingContract.methods.updateTime(h,s,m).send({from: account0, gas:670000});
	//}

	handleOpenModal() {
		this.setState({showModal: true});
	}

	handlePShowModal() {
		this.setState({showPModal: true});
	}

	handlePCloseModal() {
		this.setState({showPModal: false});
	}

	handleCloseModal() {
		this.setState({showModal: false});
	}


	handleOpenBidModal() {
		this.setState({showBidModal: true});
	}

	handleCloseBidModal() {
		this.setState({showBidModal: false});
	}

	handleChangeItem(event){
		this.setState({cItem: event.target.value});
	}

	handleChangeBid(event){
		this.setState({cBid: event.target.value});
	}

	handleChangeTime(event){
		this.setState({cTime: event.target.value});
		let h = parseInt(this.state.cTime.substring(0,2), 10);
		let m = parseInt(this.state.cTime.substring(3,5), 10);
		let s = parseInt(this.state.cTime.substring(6), 10);
		this.setState({cHour: h, cMinute: m, cSecond: s});
	}


	handleSubmit(event){
		ratingContract.methods.createAuction(this.state.cItem, this.state.cBid, this.state.cHour, this.state.cMinute, this.state.cSecond).send({from: account0, gas:670000});
	}


	bid(auction, bidAmount){
		ratingContract.methods.placeBid(auction, bidAmount).send({from: account0, gas:670000});
	}

	setWinner(i) {
		ratingContract.methods.setAuctionWinner(i, account0).send({from: account0, gas: 670000});
		//ratingContract.methods.updateTime(i, 0, 0, 0).send({from: account0, gas: 670000});
		//let auction = [...this.state.auction];
		//auction.splice(i, 1);
		//this.setState({auction: auction});
	}

	render() {
			let past = this.state.pastAuctions.map((auction, i)=>
				<tr key={i}>
				<td>{this.state.pastAuctions[i].winner}</td>
				<td>{this.state.pastAuctions[i].name}</td>
				<td>{this.state.pastAuctions[i].bid}</td>
				</tr>
			)

		return (
			<div className="App">
			<header>Freetrade</header>
			<button onClick={this.handleOpenModal}>Create an Auction</button>
			<button onClick={this.handlePShowModal}>View Past Auctions</button>
			<Modal
				isOpen={this.state.showModal}
				ariaHideApp={false}
			>
				<form onSubmit={this.handleSubmit}>
					<label>
						Item Name:
						<input type="text" value={this.state.cItem} onChange={event => this.handleChangeItem(event)} />
					</label>
					<label>
						Set time:
						<input type="text" value={this.state.cTime} onChange={event => this.handleChangeTime(event)} />
					</label>
					<label>
						Set minimum bid amount:
						<input type="number" value={this.state.cBid} onChange={event => this.handleChangeBid(event)} />
					</label>
					<input type="submit" value="Submit" />
				</form>
			</Modal>
			<Modal
				isOpen={this.state.showPModal}
			>
				<table >
					<tbody>
						<tr>
							<th>Winner</th>
							<th>Item</th>
							<th>Final Bid</th>
						</tr>
						{past}
					</tbody>
				</table>
				<button onClick={this.handlePCloseModal}>Close</button>
			</Modal>
			<div className="current-table">
			<Table auction={this.state.auction} bid={this.bid} setWinner={this.setWinner} />
			</div>
			</div>
		);
	}
}
export default App;
