import React from 'react';
import StatsService from '../services/statsService.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton, Dropdown, Table} from 'react-bootstrap';
import '../styles/statsTable.css';

class StatsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
      return {backgroundColor: '#B22222', color: '#FFFFFF'};
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

  _prepareOptions() {
    return (["option 1", "option 2", "option 3"].map((e) => {
      return <option>{e}</option>;
    }));
  };

  render() {
    return (
        <div>
          <div className="col-sm-12 row">
            <div className="col-sm-10 center">UTF STATS</div>
            <div className="col-sm-2 dropdown-padding">
              <DropdownButton id="dropdown-button"
                              variant ="secondary"
                              title="Select awesome period"
                              size="sm">
                <Dropdown.Item onClick={console.log("action")}>Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="col-sm-12 row full-container">
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

        </div>
    );
  }
}

export default StatsTable;