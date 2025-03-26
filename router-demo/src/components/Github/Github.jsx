// import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
  const followers = useLoaderData
  // const [followers, setFollowers] = React.useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/javedKathat')
  //   .then(response => response.json())
  //   .then(data => {console.log(data); setFollowers(data)})
  // },[])
  return (
    <div className="relative flex items-top justify-center min-h-[340px] gap-6 bg-gray-400 sm:items-center sm:pt-0">
      <img src={followers
      .avatar_url} alt="Andrew's Github Avatar" className="w-20 h-20 rounded-full" />
     {followers.name}'s Followers : {followers.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/javedKathat')
  return await response.json()
}