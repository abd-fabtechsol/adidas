function EventsSidebar() {
  const events = [
    { id: 1, title: 'SHOW IN USA', location: 'USA' },
    { id: 2, title: 'ADIDAS SHOW IN USA', location: 'USA' },
    { id: 3, title: 'ADIDAS SHOW', location: 'USA' },
    { id: 4, title: 'ADIDAS IN USA', location: 'USA' },
  ];

  return (
    <aside className="events-sidebar">
      <h3 className="events-title">EVENTS</h3>
      <ul className="events-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <span className="event-number">{event.id}</span>
            <div className="event-info">
              <h4>{event.title}</h4>
              <p>{event.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default EventsSidebar;
