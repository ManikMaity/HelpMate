import { getUserEvents } from '@/actions/events';
import EventCard from '@/components/EventCard/EventCard';
import React, { Suspense } from 'react'

function Events() {
  return (
    <Suspense fallback={<div>Loading Events...</div>}>
      <UserEvent />
    </Suspense>
  )
}


async function UserEvent (){

  const {events, username} = await getUserEvents();

  if (events.length === 0) {
    return (
      <div>
        <h1>No events found</h1>
      </div>
    )
  }


  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {events.map((event) => 
        <EventCard key={event.id} event={event} username={username} />
      )}
    </div>
  )
}

export default Events
