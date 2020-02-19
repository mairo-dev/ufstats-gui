import React from 'react';
import StatsService from '../services/statsService.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import '../styles/statsTable.css'
class StatsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    renderTableData() {
        return StatsService.list().map((stat, index) => {
            console.log(stat);
            let columns = stat.map((e, i) => {

                return (<td style={this.checkStyle(e)}>{e}</td>);
            });
            return (<tr>{columns}</tr>);
        });
    }

    checkStyle(tdData) {
        if (tdData === "+50") {
            return {backgroundColor: '#006400', color: '#FFFFFF'};
        } else if (tdData === "+25") {
            return {backgroundColor: '#98FB98'};
        } else if (tdData === "-25") {
            return {backgroundColor: '#FFA07A'};
        } else if (tdData === "-50") {
            return {backgroundColor: '#B22222',color: '#FFFFFF'};
        } else {
            return {backgroundColor: '#FFFFFF'};
        }
    }

    renderHeaders() {
        return StatsService.headersList().map((h, i) => {
            return (
                <th>{h}</th>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 id='title' class="center">UTF STATS</h1>
                <Table bordered hover size="sm">
                    <thead>
                    <tr>
                        {this.renderHeaders()}
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default StatsTable;