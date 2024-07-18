import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchData = async (queryFn: () => Promise<any>) => {
  const data = await queryFn()
  return data
}

const useFetch = (key: string, queryFn: () => Promise<any>) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [key],
    queryFn: queryFn,
  })
  return { data, isLoading, error, refetch }
}

export default useFetch
