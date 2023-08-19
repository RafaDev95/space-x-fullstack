import { LaunchesOverallDetails, LaunchesResponse } from '@/types'

export const getLaunches = async (
  page = '1',
  limit = '5',
  search?: string
): Promise<LaunchesResponse> => {
  const queryParams = new URLSearchParams({
    page,
    limit,
    search: search || '',
  })

  const url = `${
    process.env.NEXT_PUBLIC_API_URL
  }/launches?${queryParams.toString()}`

  const res = await fetch(url)

  const data = await res.json()
  return data
}

export const getOverallDetails = async (): Promise<LaunchesOverallDetails> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/launches/stats/overall`,
    { cache: 'no-store' }
  )

  const data = await res.json()

  return data
}
