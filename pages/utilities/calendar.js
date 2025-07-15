// pages/utilities/calendar.js

import Head from "next/head";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function CalendarPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Sample hardcoded events for immediate testing
  const events = [
    {
      id: "1",
      title: "AI Workshop",
      start: "2025-07-15T10:00:00",
      end: "2025-07-15T12:00:00",
      description: "Hands-on workshop on AI tools for undergraduates.",
    },
    {
      id: "2",
      title: "Departmental Meeting",
      start: "2025-07-20T14:00:00",
      end: "2025-07-20T16:00:00",
      description: "Monthly faculty and staff departmental meeting.",
    },
    {
      id: "3",
      title: "Hackathon 2025",
      start: "2025-08-01",
      end: "2025-08-02",
      description: "24-hour hackathon for BCA, MCA, and B.Sc. IT students.",
    },
    {
      id: "4",
      title: "Guest Lecture: Quantum Computing",
      start: "2025-07-28T11:00:00",
      end: "2025-07-28T13:00:00",
      description: "Talk by Dr. Raghav on advancements in quantum computing.",
    },
  ];

  return (
    <>
      <Head>
        <title>Department Calendar | Department of Computer Science</title>
        <meta name="description" content="Interactive calendar for the Department of Computer Science, DSVV." />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-4 border-b-2 border-[#003366] pb-2">
          Department Calendar
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Calendar */}
          <div className="w-full md:w-2/3 bg-white p-4 border border-gray-200 rounded shadow-sm">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventClick={(info) => {
                const clickedEvent = events.find((e) => e.id === info.event.id);
                setSelectedEvent(clickedEvent);
              }}
              height="auto"
            />
          </div>

          {/* Event Details */}
          <div className="w-full md:w-1/3 bg-white p-4 border border-gray-200 rounded shadow-sm">
            {selectedEvent ? (
              <>
                <h2 className="text-xl font-semibold text-[#003366] mb-2">{selectedEvent.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {new Date(selectedEvent.start).toLocaleString()}{" "}
                  {selectedEvent.end ? ` - ${new Date(selectedEvent.end).toLocaleString()}` : ""}
                </p>
                <p className="text-gray-700">{selectedEvent.description}</p>
              </>
            ) : (
              <p className="text-gray-500">Click on an event to view details here.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
