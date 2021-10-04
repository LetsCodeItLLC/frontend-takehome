import { useEffect, useState } from 'react'

interface Color {
  name: string
  hex: string
}

interface GetColorResponse {
  data: null | Color[]
  loading: boolean
}

const mockData = [
  { name: 'Red', hex: '#DB2D2D' },
  { name: 'Orange', hex: '#F2994A' },
  { name: 'Yellow', hex: '#F2C94C' },
  { name: 'Green', hex: '#27AE60' },
  { name: 'Blue', hex: '#2F80ED' },
  { name: 'Violet', hex: '#602FED' },
]

const mockFilterResponse = (query: string): Color[] => {
  return mockData.filter(({ name }) => {
    return name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

const queryPromise = (query: string): Promise<Color[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFilterResponse(query))
    }, 500)
  })
}

const useGetColor = ({ query = '' }: { query: string }): GetColorResponse => {
  const [data, setData] = useState<Color[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    if (!query.length) {
      setData(null)
      setLoading(false)
    }
    queryPromise(query).then((response) => {
      setData(response)
      setLoading(false)
    })
  }, [query])

  return {
    data,
    loading,
  }
}

export default useGetColor
