import { axiosClient } from "../../../utils/axios"

export const getCategories = async () => await axiosClient.get('/categories')
