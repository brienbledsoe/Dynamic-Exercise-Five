import React from 'react'

//this is the componenet that we're pushing here
import UserProfileInfo  from "../../components/UserProfileComponents"

export default function UserProfile({ user }) {
  console.log("user",user);
  return(
    <div>
      <h1>UserProfile for {user.uid && user.uid}</h1>
      <UserProfileInfo email={user.email ? user.email : "whoops"} />
    </div>
  );

}
