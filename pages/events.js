
import events from "../data/events.json";
import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <>
    
      <main className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-blue-900 mb-6">Upcoming Events</h1>
        {events.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </main>
    
    </>
  );
}
