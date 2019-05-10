import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            truck: {}
        }
    }

    callAPI() {
        console.log('passou aki')
        fetch("http://localhost:9000/")
            .then(res => res.json())
            .then(data => {
                console.log('data',data)
                this.setState({ truck: JSON.parse(data) })
            })
            .catch((error) => console.warn(error))
    }

    componentWillMount() {
        this.callAPI();
    }

    renderTableData() {
        console.log('aki',this.state.truck.containers)
        const containers = this.state.truck.containers
        console.log('setOfItens', containers)
        // return  <h1>{"teste"}</h1>
        
        // return containers.setOfItems.map((container, index) => {
        //     const { _id, tempature, max, min, status, type } = container //destructuring
        //     return (
        //         <tr key={_id}>
        //             <td>{type}</td>
        //             <td>{max}</td>
        //             <td>{min}</td>
        //             <td>{tempature}</td>
        //             <td>{status}</td>
        //         </tr>
        //     )
        // })
    }
    
    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                {/* <table id='students'>
                    <tbody> */}
                        {this.renderTableData()}
                    {/* </tbody>
                </table> */}
            </div>
        )
    }
}

export default Table