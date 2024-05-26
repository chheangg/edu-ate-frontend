import { axiosClient } from "../../../utils/axios"

export const getLocations = async () => await axiosClient.get('/locations')
