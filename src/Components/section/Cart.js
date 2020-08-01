import React, { Component, Fragment } from 'react'
import {DataContext} from '../Context'
import {
	Link
} from 'react-router-dom'
import Colors from './Colors'
import '../../css/Details.css'
import '../../css/Cart.css'

export class Cart extends Component {
	static contextType = DataContext;
	componentDidMount(){
		this.context.getTotal();
	}
	render() {
		const {cart, reduction, increase, onDelete, total} = this.context;
		if(cart.length === 0){
			return <h2 style={{textAlign:"center"}}> Gio hang trong</h2>
		}
		else{
			return (
			<Fragment>
				{
					cart.map( item =>(
						<div className="details" key={item._id}>
							<img src={item.src} atl="" />
							<div className="box">
								<div className="row">
									<h2>{item.title} </h2>
									<span>${item.price * item.count} </span>
								</div>
								<Colors colors={item.colors} />
								<p>{item.description} </p>
								<p>{item.content} </p>
								<div className="amount">
									<button className="count" onClick={() => reduction(item._id)}> - </button>
									<span> {item.count} </span>
									<button className="count" onClick={() => increase(item._id)}> + </button>
								</div>
							</div>
							<div className="delete" onClick={ () => onDelete(item._id)} > X </div>
						</div>
					))
				}
				<div className="total">
					<Link to="/payment" >Payment</Link>
					<h3>Tong: ${total} </h3>
				</div>
			</Fragment>
		
		
		);
	}
}
}
export default Cart