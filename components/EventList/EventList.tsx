import React from 'react'
import Event from '../Event/Event'


const EventList = ({eventArr}: any) => {
  return (
    <div>
      {eventArr?.map((eve: any)=>{
        return <Event id={eve.id} name = {eve.name} description = {eve.desc} date= {eve.date} image = {eve.image_url}/>
      })}
    </div>
  )
}

export default EventList
