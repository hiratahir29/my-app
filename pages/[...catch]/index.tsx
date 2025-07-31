import EventList from '@/components/EventList/EventList';
import { getfilteredEvents } from '@/utils/dummyData';
import { useRouter } from 'next/router'
import React from 'react'

const FilteredEventsPage = () => {
    const router = useRouter();
    //@ts-ignore
    const [year, month] = router?.query?.catch ?? [];
    // console.log(r);

    

  return (
    
    <div>
        <EventList eventArr= {getfilteredEvents(year,month)}/>
    </div>
  )
}

export default FilteredEventsPage
