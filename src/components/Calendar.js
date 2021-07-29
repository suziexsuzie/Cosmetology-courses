import React from "react";
import {useStaticQuery} from "gatsby";
import {graphql} from "gatsby";
import {Link} from "gatsby";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import interactionPlugin from '@fullcalendar/interaction';


const Calendar = () => {


    const {
        allDatoCmsDate: {
            nodes: data
        }
    }
        = useStaticQuery(graphql`
    {
      allDatoCmsDate {
    
          nodes {
            date
            id
            title
          
          color
        }
      }
    }
  `);
    const handleClick = () => {
        window.open("/form/")
    }


    console.log(data);
    return (
        <div className="container">
        <FullCalendar locale="pl"
                      buttonText={{today: "dzisiaj"}}
                      defaultView="dayGridMonth"
                      height="85vh"
                      plugins={[dayGridPlugin, interactionPlugin]}
                      events={data}
                      eventColor={data.color}
                      firstDay={1}
                      eventClick={handleClick}

        />
        </div>
    )


};

export default Calendar;

