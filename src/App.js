import React, { Component } from 'react'
import MovieTable from './MovieTable'


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: []
		};
	  }
	componentDidMount(){
		fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ad032b563c37e6b1b18d1d681e7b3219")
		.then(res=> res.json())
		.then(
			(result) => {
				this.setState({
				isLoaded:true,
				items:result.results
				});
			},
			(error) =>{
				this.setState({
					isLoaded:true,
					error
				})
			}

		)
	}
	render() {
		const {error,isLoaded,items} = this.state;
		if(error)
		return <div>Error Loading Data</div>
		else if(!isLoaded)
		return <div>Still loading Data</div>
		else
		return (
			<div className="container">
			<MovieTable data={items}/>
			</div>
		)
	}
}

export default App