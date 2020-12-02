import React, {useState, useEffect} from 'react';

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
    }

    getKeys = function() {
        return Object.keys(this.props.data[0]);
    }

    getHeader = function() {

    }

    getRowsData = function(){

    }

    render () {
        return(
            <div>
                <table>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const RenderRow = (props) => {

}



// const RatingTable = (props) => {

//     const [table, setTable] = useState([])

//     const fetchRating = () => {
//             fetch(`http://localhost:3000/ratings/myratings`, {
//                 method: 'GET',
//                 headers: new Headers ({
//                     'Content-Type': 'application/json',
//                     'Authorization': props.sessionToken
//                 })
//             })
//             .then ((res) => res.json())
//             .then ((tableData) => {
//                 setTable(tableData)
//                 console.log(tableData)
//             })
//         }
    
//         useEffect (() => {
//             fetchRating();
//         }, [])
// }