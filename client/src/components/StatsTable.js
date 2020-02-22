import React from 'react';
import ResourceRouter from '../services/resourceRouter.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton, Table} from 'react-bootstrap';
import '../styles/statsTable.css';

class StatsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonName: "Select season",
      seasons: [],
      headers: [],
      tableData: []
    };
  }

  async componentDidMount() {
    await this._initData();
  }

  componentWillUnmount() {
  }

  async _initData() {
    let seasonsJson = await ResourceRouter.listSeasons();
    let table = await ResourceRouter.seasonsTableData(seasonsJson.seasons[0]);
    this.setState({
      seasons: seasonsJson.seasons,
      headers: table.headers,
      tableData: table.tableData
    });
  }

  renderTableData() {
    return this.state.tableData.map((stat, index) => {
      let columns = stat.map((e, i) => {

        return (<td style={this.checkStyle(e)} key={index + i + "td"}>{e}</td>);
      });
      return (<tr key={index + "tr"}>{columns}</tr>);
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
    return this.state.headers.map((h, i) => {
      return (
          <th key={h + i}>{h}</th>
      );
    });
  }

  _prepareDropdownItems() {
    let items = (this.state.seasons.map((e, i) => {
      return (<Dropdown.Item onClick={() => this._updateDropdownName(e)} key={i + "ddi"}>{e}</Dropdown.Item>);
    }));
    return (items);
  };

  _updateDropdownName = async (season) => {
    let tableJson = await ResourceRouter.seasonsTableData(season);
    this.setState({
      seasonName: season,
      headers: tableJson.headers,
      tableData: tableJson.tableData
    });
    this._prepareDropdownItems();
  };

  render() {
    return (
        <div className="full-container">
          <div className="custom-row white">
            <div className="col center">UTF STATS</div>
            <div className="col right">
              <DropdownButton id="dropdown-button"
                              variant="secondary"
                              title={this.state.seasonName}
                              size="sm">
                {this._prepareDropdownItems()}
              </DropdownButton>
            </div>
          </div>

          <div className="custom-row full-container">
            <Table bordered hover size="sm">
              <thead className="white">
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