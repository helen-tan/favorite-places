import React from 'react'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 1,
    title: 'Cowpresso Coffee Roasters',
    description: 'Quiet cafe in Bukit Timah',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2021/12/cowpresso8.jpg',
    address: '21 Lor Kilat, #01-07, Singapore 598123',
    location: {
      lat: 1.3409543,
      lng: 103.7707994
    },
    creator: 1
  },
  {
    id: 2,
    title: 'Cowpresso Coffee Roasters',
    description: 'Quiet cafe in Bukit Timah',
    imageUrl: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2021/12/cowpresso8.jpg',
    address: '21 Lor Kilat, #01-07, Singapore 598123',
    location: {
      lat: 1.3409543,
      lng: 103.7707994
    },
    creator: 2
  }
]

const UserPlaces = () => {
  return (
    <PlaceList items={DUMMY_PLACES}/>
  )
}

export default UserPlaces
