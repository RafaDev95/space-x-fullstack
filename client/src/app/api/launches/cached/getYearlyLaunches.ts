export const getYearlyLaunches = async (year?: string) => {
  let query = ''

  if (year) {
    query = `?year=${year}`
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/launches/stats/yearly${query}`,
    { next: { revalidate: 86400 } }
  )

  const data = await res.json()

  return data
}
