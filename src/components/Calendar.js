import React, {Component} from "react";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const plLocale = {
    today: 'dzisiaj'
};

export default class Calendar extends Component {

    render() {
        return (
            <FullCalendar locale="pl" buttonText={{today: "dzisiaj"}} defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
        )
    }

};
