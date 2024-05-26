import { axiosClient } from "../../../utils/axios"

export const getTags = async () => await axiosClient.get('/tags')
