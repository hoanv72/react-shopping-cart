import React, { Component } from 'react';

export const DataContext =  React.createContext();

export class DataProvider extends Component {
	state = {
		products : [
			 {
                "_id": "1",
                "title": "VANS 01",
                "src": "https://pilireplica.com/wp-content/uploads/2019/03/giay-vans-old-skool-trang-soc-xanh-replica.jpg",
                "description": "Giày Vans Era Classic True White",
                "content": "Đây là bản era ver2. Phần thiết kế cải tiến hơn ver 1, ở bản màu trắng nhận rõ nhất là phần viền đen. Era được đánh giá cao hơn authentic vì phần gót có 1 lớp da độn nên sẽ không làm đau cổ chân.",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "VANS 02",
                "src": "https://media3.scdn.vn/img3/2019/10_1/b6892D_simg_de2fe0_500x500_maxb.jpg",
                "description": "Giày Vans Era Classic True White",
                "content": "Đây là bản era ver2. Phần thiết kế cải tiến hơn ver 1, ở bản màu trắng nhận rõ nhất là phần viền đen. Era được đánh giá cao hơn authentic vì phần gót có 1 lớp da độn nên sẽ không làm đau cổ chân.",
                "price": 19,
                "colors":["red","crimson","teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "VANS 03",
                "src": "https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a4bv4v8v-1.png",
                "description": "Giày Vans Era Classic True White",
                "content": "Đây là bản era ver2. Phần thiết kế cải tiến hơn ver 1, ở bản màu trắng nhận rõ nhất là phần viền đen. Era được đánh giá cao hơn authentic vì phần gót có 1 lớp da độn nên sẽ không làm đau cổ chân.",
                "price": 50,
                "colors":["lightblue","white","crimson","teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "VANS 04",
                "src": "https://shopgiayreplica.com/wp-content/uploads/2018/11/vans-fear-of-god-replica.jpg",
                "description": "Giày Vans Era Classic True White",
                "content": "Đây là bản era ver2. Phần thiết kế cải tiến hơn ver 1, ở bản màu trắng nhận rõ nhất là phần viền đen. Era được đánh giá cao hơn authentic vì phần gót có 1 lớp da độn nên sẽ không làm đau cổ chân.",
                "price": 15,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "VANS 05",
                "src": "https://ostun.com/image/cache/catalog/giay/vans/2017/authentic/vn0a2xryml6/fear-of-god-fog-x-vans-era-95-1-600x450.jpg",
                "description": "Giày Vans Era Classic True White",
                "content": "Đây là bản era ver2. Phần thiết kế cải tiến hơn ver 1, ở bản màu trắng nhận rõ nhất là phần viền đen. Era được đánh giá cao hơn authentic vì phần gót có 1 lớp da độn nên sẽ không làm đau cổ chân.",
                "price": 10,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "VANS 06",
                "src": "https://product.hstatic.net/1000382698/product/vn000ewzw00-drake3-650x650_981423f9e329489f8732ae3f5488e65c_master.jpg",
                "description": "Giày Vans Era Classic True White",
                "content": "Đây là bản era ver2. Phần thiết kế cải tiến hơn ver 1, ở bản màu trắng nhận rõ nhất là phần viền đen. Era được đánh giá cao hơn authentic vì phần gót có 1 lớp da độn nên sẽ không làm đau cổ chân.",
                "price": 17,
                "colors":["orange","black","crimson","teal"],
                "count": 1
            }
		],
		cart: [], 
		total: 0
	};

	addToCart = (id) => {
		const {products, cart} = this.state;
		const check = cart.every( item =>{
			return item._id !== id 
		})
		if(check){
			const data = products.filter( product => {
				return product._id === id
			})
			this.setState({cart: [...cart, ...data]})
		}
		else{
			alert('Sản phẩm này đã có trong giỏ hàng')
		}
		this.getTotal();
		
	}

	reduction = id =>{
		const {cart} = this.state;
		cart.forEach(item =>{
			if(item._id === id){
				item.count === 1 ? item.count = 1 : item.count -= 1;
			}
		})
		this.setState({cart: cart});
		this.getTotal();
	}
	increase = id =>{
		const {cart} = this.state;
		cart.forEach(item =>{
			if(item._id ===id){
				item.count += 1;
			}
		})
		this.setState({cart: cart});
		this.getTotal();
	}
	onDelete = id =>{
		if(window.confirm("Bạn có chắc chắn muốn xóa sản phẩm?")){
			const {cart} = this.state;
			cart.forEach((item, index) =>{
			if(item._id === id){
				cart.splice(index, 1)
			}
		})
			this.setState({cart: cart})
		}
		this.getTotal();
	
	}
	getTotal = () =>{
		const {cart} = this.state;
		const res = cart.reduce( (prev, item) =>{
			return prev + (item.price * item.count)
		},0)
		this.setState({total: res})
	}
	componentDidUpdate(){
		localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
		localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
	}
	componentDidMount(){
		const dataCart = JSON.parse(localStorage.getItem('dataCart'));
		if(dataCart !== null){
			this.setState({cart: dataCart})
		}
		const dataTotal = JSON.parse(localStorage.getItem(dataTotal));
		if(dataTotal !== null){
			this.setState({total: dataTotal});
		}
	}
	render() {
		const {products, cart, total} = this.state;
		const {addToCart, reduction,increase, onDelete, getTotal} = this;
		return (
			<DataContext.Provider value={{products,total, getTotal, cart, addToCart, reduction, increase, onDelete}} >
				{this.props.children}
			</DataContext.Provider>
		);
	}
}
