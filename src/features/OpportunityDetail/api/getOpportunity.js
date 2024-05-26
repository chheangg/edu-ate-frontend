import { axiosClient } from "../../../utils/axios";

export const getOpportunity = async (id) => await axiosClient.get(`/opportunities/${id}`)