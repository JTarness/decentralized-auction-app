import React, { Component }  from 'react';
import Timer from 'react-compound-timer';
import { ratingContract, account0 } from '../config';
import Modal from 'react-modal';
import './Table.css';



export class Table extends Component{
	constructor(props) {
		super(props);
		this.state = {
			auction: [this.props.auction],
			showModal: false,
			bidAmount: 0,
			i: 0,
			times: []
		};
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeBid = this.handleChangeBid.bind(this);
	}


	handleOpenModal(event,inp) {
		this.setState({showModal: true, i: inp});
	}

	handleCloseModal() {
		this.setState({showModal: false});
	}


	handleChange(event) {
		this.props.bid(this.state.i, this.state.bidAmount);
	}


	handleChangeBid(event) {
		this.setState({bidAmount: event.target.value});
	}

	handleEndAuction(event, inp) {
		this.props.setWinner(inp);
	}


	//switch i and this.props.auction[i].id

	render() {
		let auctionList = this.props.auction.map((auction, i)=>
			<tr key={i} onClick={event => this.handleOpenModal(event,i)}>
			<td>{this.props.auction[i].name}</td>
			<td>{this.props.auction[i].bid}</td>
			<td>
			<Timer
				formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
				initialTime={ 60000 * 60 * this.props.auction[i].hours + this.props.auction[i].minutes * 60000 + this.props.auction[i].seconds * 1000}
				direction="backward"
				lastUnit="h"
				checkpoints={[
					//{
					//	callback: ratingContract.methods.updateTime(i, Timer.Hours, Timer.Minutes, Timer.Seconds).send({from: account0, gas:670000}),
					//},
					{
						time: 0,
						callback: event => this.handleEndAuction(event,i), //switch like above
					}
				]}
			>
				{() => (
					<React.Fragment>
						<Timer.Hours />:
						<Timer.Minutes />:
						<Timer.Seconds />
					</React.Fragment>
				)}

			</Timer>
			</td>
			</tr>
		)

		return (
			<div>
			<h3>Auctions</h3>
			<table >
				<tbody>
					<tr>
						<th>Item</th>
						<th>Highest Bid</th>
						<th>Time Remaining</th>
					</tr>
					{auctionList}
				</tbody>
			</table>
			<Modal
				isOpen={this.state.showModal}
				ariaHideApp={false}
			>
				<form onSubmit={this.handleChange}>
					<label>
						Enter bid amount:
						<input type="number" value={this.state.bidAmount} onChange={event => this.handleChangeBid(event)} />
					</label>
						<input type="submit" value="Submit" />
				</form>
			</Modal>
			</div>
		);
	}

}
export default Table;
