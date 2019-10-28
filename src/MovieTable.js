import React, {Component} from 'react'
import './App.css'

const TableHeader = () => {
    return(
        <thead>
            <tr>
              <td>Popularity</td>
              <td>Overview</td>
              <td>Original title</td>
              <td>Title</td>
              <td>Release Date</td>
            </tr>
        </thead>

    )
}
const TableData = (props) => {
    const list = props.data.map((value,index)=> {
        return (
    <tr key={index}>
        <td>{value.popularity}</td>
        <td>{value.overview}</td>
        <td>{value.original_title}</td>
        <td>{value.title}</td>
        <td>{value.release_date}</td>
    </tr>
        )
    }
    )
    return <tbody>{list}</tbody>
}




class MovieTable extends Component{

render()
{
const {data} = this.props;
    return(
<div>
<table>
<TableHeader/>
<TableData data ={data}/>
</table>
</div>
    )
}
}
export default MovieTable
