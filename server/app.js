const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const port = 5000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api/seasonTable', (req, res) => {
  const tableData = [
    ["+50", "-50", "", "+50", "", "", "", "-50", ""],
    ["", "", "-25", "+25", "+25", "-25", "", "", ""],
    ["+25", "-25", "", "+25", "", "-25", "", "", ""],
    ["+25", "", "", "+25", "-25", "-25", "", "", ""],
    ["+25", "", "", "", "+25", "", "-25", "", "-25"]
  ];
  if (req.query.season.indexOf("3") > 0) {
    const headers = ["Ділай", "Маюн", "Мельничук", "Сікорський", "Чикуров", "Шарга", "Тремпольцева", "Балишин", "Гундарцев"];
    res.send({headers: headers, tableData: tableData});
  }else{
    const headers = ["Маюн", "Маюн", "Мельничук", "Маюн", "Маюн", "Шарга", "Тремпольцева", "Балишин", "Гундарцев"];
    res.send({headers: headers, tableData: tableData});
  }

});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/seasons', function (req, res) {
  let data = ["Season 2/2019", "Season 3/2019", "Season 4/2019", "Season 1/2020"];
  res.send(JSON.stringify({seasons: data}));
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));