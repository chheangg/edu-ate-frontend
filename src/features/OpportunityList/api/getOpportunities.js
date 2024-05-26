import { axiosClient } from "../../../utils/axios";

export const getOpportunities = ({ q = null, category_id = null, tag_ids = null, country = null, city = null}) => 
  axiosClient.get('/opportunities', {
    params: {
      q, category_id, tag_ids, country, city,
    }
  })