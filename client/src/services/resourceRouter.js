import RestClient from '../services/restClient';
import MockService from '../services/mockService';

const useMocks = false;

const ResourceRouter = {

  listSeasons: () => {
    if (useMocks) {
       return  MockService.listSeasons();
    }else {
       return RestClient.listSeasons();
    }
  },

  seasonsTableData: (season) => {
    if (useMocks) {
       return MockService.seasonsTableData();
    }else{
       return RestClient.seasonsTableData(season)
    }
  }
};
export default ResourceRouter;

