import React from 'react'
import { useParams } from 'react-router-dom'
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
    title: 'Cafe Kreams',
    description: 'Cool, nature-themed venue brewing a range of specialty coffees, plus pizza & finger foods.',
    imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN3PoGeTW7Lot866dHKxMUaJEovdFIBBukWKzZn=w408-h544-k-no',
    address: '32 Maxwell Rd, #01-07 Maxwell Chambers, Singapore 069115',
    location: {
      lat: 1.2775235,
      lng: 103.8441313
    },
    creator: 2
  }
]

const UserPlaces = () => {
  const userId = useParams().userId // Gives us access to dynamic segments of the url that we set up in the routes
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === parseInt(userId))

  return (
    <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces
