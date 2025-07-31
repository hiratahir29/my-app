import EventDetail from '@/components/EventDetail/EventDetail'
import { useRouter } from 'next/router'
import React from 'react'
import { getEventById } from '@/utils/dummyData';

function Details() {
  const router = useRouter();
  const id = router.query.id
  const event = getEventById(id);
  return (
    <EventDetail name = {event?.name} description = {event?.desc} date= {event?.date} image = {event?.image_url}/>
  )
}

export default Details
