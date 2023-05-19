import React from "react"

const user = {
  name: "Hedy Lamarr",
  imageUrl:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTXgWCJS1CTWVT0kRtciSsId3w9F4Jxb5ZkxomAuIpBVzPc25NQYQpepn30cuqWxwkbrn1kjKVetp6KyD8&psig=AOvVaw0hBzOEKqJlhbFqHyOwvGIC&ust=1684507172659000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKj-nK-M__4CFQAAAAAdAAAAABAE",
  imageSize: 400,
}

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  )
}
