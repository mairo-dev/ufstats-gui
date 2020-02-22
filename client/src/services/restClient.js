const host = "http://localhost:";
const port = 5000;
const root = host + port;

const RestClient = {
  listSeasons: async () => {
    return fetch(root + "/api/seasons", )
        .then(result => {return result.json()},error => {console.log(error)});
  },

  seasonsTableData: (season) => {
    const uri = new URL(root + "/api/seasonTable");
    uri.searchParams.append("season", season);
    return fetch(uri)
        .then(result => {return result.json()}, error => {console.log(error)});
  }
};
export default RestClient;