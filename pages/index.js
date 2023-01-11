

import { useState, useEffect } from 'react'
import { client, recommendProfiles } from '../api'

export default function Home() {
  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    fetchEffect()
  }, [])

  async function fetchEffect() {
    try {
      const response =await client.query(recommendProfiles).toPromise()
      console.log({ response })
      setProfiles(response.data.recommendProfiles)
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <>
   
    </>
  )
}
