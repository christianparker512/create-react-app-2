import React, { useEffect } from "react"
import Page from "./Page"
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import StateContext from `../StateContext`

function Profile() {
  const {username} = useParams()
  const appState = useContext(StateContext)
  const [profileData, setProfileData] = useState ({
    profileUsername:"...",
    profileAvatar:'https://gravatar.com/avatar/placeholder?128',
    isFollowing: false,
    counts: {postCount: "", followerCount: "", followingCount: ""}
  })

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await Axios.post(`/profile/${username}`,{token: appState.user.token})
        setProfileData(response.data)
      }catch (e){
        console.log("there was a problem")
      }
    }
  }, [])
  return (
   <Page titl="Profile Screen">
     <h2>
        <img class="avatar-small" src="{profileData.profileAvatar}"/> {profileData.profile.username}
        <button class="btn btn-primary btn-sm ml-2">Follow <i class="fas fa-user-plus"></i></button>
      </h2>

      <div class="profile-nav nav nav-tabs pt-2 mb-4">
        <a href="#" class="active nav-item nav-link">
          Posts: {profileData.counts.postCount}
        </a>
        <a href="#" class="nav-item nav-link">
          Followers: {profileData.followers.postCount}
        </a>
        <a href="#" class="nav-item nav-link">
          Following: {profileData.following.postCount}
        </a>
      </div>

      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #1</strong>
          <span class="text-muted small">on 2/10/2020 </span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #2</strong>
          <span class="text-muted small">on 2/10/2020 </span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <img class="avatar-tiny" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #3</strong>
          <span class="text-muted small">on 2/10/2020 </span>
        </a>
      </div>
    
   </Page>
  )
}

export default Profile