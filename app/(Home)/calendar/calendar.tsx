'use client';
import React from 'react';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

const Calendar = () => {
  return (
    <div className='w-full'>
      <div className='flex'>
        <div className='flex-1 h-full'>
          <FullCalendar
            droppable={true}
            editable={true}
            events={{}}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'resourceTimelineWook, dayGridMonth, timeGridWeek',
            }}
            nowIndicator={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            selectMirror={true}
            selectable={true}
          ></FullCalendar>
        </div>
        <div>
          <div className='bg-gray-100 h-full p-4'>
            <h2 className='text-lg font-bold'>Draggable Events</h2>
            <div className='mt-4'>
              <div className='bg-white p-2 rounded-lg shadow-md'>
                <div className='text-sm'>Event 1</div>
              </div>
              <div className='bg-white p-2 rounded-lg shadow-md mt-2'>
                <div className='text-sm'>Event 2</div>
              </div>
              <div className='bg-white p-2 rounded-lg shadow-md mt-2'>
                <div className='text-sm'>Event 3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
