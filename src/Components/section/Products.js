import React, { Component } from 'react';
import '../../css/Products.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom'
import {DataContext} from '../Context'
export class Products extends Component {

	static contextType = DataContext;

	render() {
		const {products} = this.context;
		return (
			<div id="product">
				{
					products.map( product => (
						<div className="card" key={product._id} >
							<Link to={`/product/${product._id}`} >
								<img src={product.src} alt="" />
							</Link>
							<div className="content">
								<h3>
									<Link to={`/product/${product._id}`}> {product.title} </Link>
								</h3>
									<span> ${product.price}</span>
									<p>{product.description} </p>
									<button onClick={ () => this.context.addToCart(product._id)} >MUA HÀNG</button>
							</div>
						</div>
					))
				}
			</div>
		);
	}
}
export default Products