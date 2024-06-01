'use client';
import React from 'react';

import styled from '@emotion/styled';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

interface AnimeEvent {
  title: string;
  start: string;
  end: string;
  url: string;
  description: string;
  editable: boolean;
}

interface Props {
  animeEvents: AnimeEvent;
}

// add styles as css
export const StyleWrapper = styled.div`
  .fc td {
    height: 300px;
  }
  .fc {
    height: auto;
  }
`;

const Calendar = ({ animeEvents }: Props) => {
  return (
    <div className='w-full h-[5000px]'>
      <div className='flex'>
        <div className='flex-1 h-[5000px]'>
          <StyleWrapper>
            <FullCalendar
              droppable={true}
              editable={true}
              events={animeEvents}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth, timeGridWeek',
              }}
              nowIndicator={true}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              selectMirror={true}
              selectable={true}
            ></FullCalendar>
          </StyleWrapper>
        </div>
        <div>
          <div className='bg-gray-100 h-full p-4'>
            <h2 className='text-lg font-bold'>Anime Event</h2>
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
