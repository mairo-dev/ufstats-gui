const MockService = {

  listSeasons: () => {
    const seasons = ["Season 1/1990", "Season 2/1990", "Season 3/1990", "Season 4/1990"];
    return Promise.resolve({seasons: seasons});
  },

  seasonsTableData: () => {
    const headers = ["Маюн", "Ділай", "Мельничук", "Сікорський", "Чикуров", "Шарга", "Тремпольцева", "Балишин", "Гундарцев"];
    const tableData = [
      ["-50", "-50", "", "-50", "", "", "", "-50", ""],
      ["", "", "-25", "-25", "-25", "-25", "", "", ""],
      ["-25", "-25", "", "-25", "", "-25", "", "", ""],
      ["-25", "", "", "-25", "-25", "-25", "", "", ""],
      ["-25", "", "", "", "-25", "", "-25", "", "-25"]
    ];
    return Promise.resolve({headers: headers, tableData: tableData});
  }
};

export default MockService;
