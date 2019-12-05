import React, { Component } from 'react';
import '../App.css';
import Books from './books';
import SearchBar from './searchbar';
// import NavbarHome from './navbar';
// import Leftbar from './leftbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PrimarySearchAppBar from './appbar'
import { Row, Col ,Pagination} from 'react-bootstrap';


class search extends Component {
	// alert({bookId})
	changePage = (e) => {
		let page = this.state.activePage;
		if (e.target.text === ">" && page !== parseInt(e.target.name)) {
			page += 1;
		} else if (e.target.text === "<" && page !== parseInt(e.target.name)) {
			page -= 1;
		} else {
			page = parseInt(e.target.name);
		}
		this.setState({
			activePage: page
		});
	};

	render() {
		let booksArray = [],
			pageBooks = [],
			pagesBar = null,
			active = 1,
			itemsToShow = 3;
		if (this.state && this.state.books) {
			booksArray = this.state.books;
		}
		if (this.state && this.state.activePage) {
			active = this.state.activePage;
		}
		if (this.state && this.state.books) {
			let books = this.state.books;
			let cardCount = 0;
			for (let i = (active - 1) * itemsToShow; i < books.length; i++) {
				pageBooks.push(books[i]);
				cardCount++;
				if (cardCount === itemsToShow)
					break;
			}

			let pages = [];
			let pageCount = Math.ceil(books.length / itemsToShow);

			for (let i = 1; i <= pageCount; i++) {
				pages.push(
					<Pagination.Item key={i} active={i === active} name={i} onClick={this.changePage}>
						{i}
					</Pagination.Item>
				);
			}
			pagesBar = (
				<div>
					<br />
					<Pagination>
						<Pagination.Prev name="1" onClick={this.changePage} />
						{pages}
						<Pagination.Next name={pageCount} onClick={this.changePage} />
					</Pagination>
				</div>
			);
		}
		return (
			<div>
				{/* <NavbarHome /> */}
				<PrimarySearchAppBar />

				<Row>
					{/* <Leftbar/> */}
					<Col>
						<SearchBar />
						<Row>
							<Books books={pageBooks} />
						</Row>
						<Row>
							<Col sm={5}></Col>
							<Col>{pagesBar}</Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
	state = {
		books: []
	}

	componentDidMount() {
		var bookId = window.location.search
		// console.log('bookid', bookId)


		var url2='https://lmp.nupursjsu.net/v1/books'+bookId;


		let url = url2;
		//   fetch(url)
		//   .then(res => res.json())
		//   .then(data => {
		//     console.log(data)
		//     const a=[]
		//     for (var i in data){
		//     a.push(data[i])
		//   }
		//   console.log(a)
		//   this.setState({ books: a })
		//   })
		//   .catch(console.log)
		// }
		axios.get(url)
			.then(data => {
				// console.log(firebase.auth().currentUser.displayName);
				console.log(data)
				const a = []
				for (var i in data.data) {
					a.push(data.data[i])
				}
				console.log('a', a)
				this.setState({ books: a })
			})
			.catch(console.log)
	}



}
//http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books
//http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books
//http://ec2-52-53-153-16.us-west-1.compute.amazonaws.com/v1/books/authors?=J.K.%20Rowling-Mary%20GrandPr%C3%A9
//Export the App component so that it can be used in index.js
export default search;
