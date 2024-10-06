import useSWR from "swr"
import { postLink } from "../utils/constants"
import { fetcher } from "../apiConfig/swrConfig"

export const useGetPosts = () => {
    const { data, error, isValidating, isLoading } = useSWR(postLink, fetcher)
   
    return {
      posts: data,
      isLoading,
      isError: error,
      isValidating
    }
  }

  export const useGetPostById = (id: string) => {
    const { data, error, isValidating, isLoading } = useSWR(`${postLink}/${id}`, fetcher)
   
    return {
      post: data,
      isLoading,
      isError: error,
      isValidating
    }
  }