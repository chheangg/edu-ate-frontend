import { axiosClient } from "../../../utils/axios";

export const getOpportunities = ({ q = null, category_id = null, tag_ids = null, location_id = null}) => 
  axiosClient.get('/opportunities', {
    params: {
      q, category_id, tag_ids, location_id
    }
  })