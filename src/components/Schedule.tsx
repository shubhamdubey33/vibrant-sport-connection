
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const scheduleData = [
  {
    day: "April 26, 2025",
    events: [
      { time: "09:00 AM", title: "Opening Ceremony", location: "Main Field" },
      { time: "10:00 AM", title: "Cricket Match: Knight Vipers vs Royal Strikers", location: "Cricket Field A" },
      { time: "10:00 AM", title: "Cricket Match: Eagle Warriors vs Supreme Spartans", location: "Cricket Field B" },
      { time: "12:30 PM", title: "Lunch Break", location: "Food Court" },
      { time: "01:30 PM", title: "Tug of War Preliminary Rounds", location: "Event Area" },
      { time: "03:30 PM", title: "Cricket Finals", location: "Cricket Field A" },
      { time: "04:30 PM", title: "Tug of War Finals", location: "Event Area" },
      { time: "05:30 PM", title: "Special Events & Games", location: "Various Locations" },
      { time: "06:30 PM", title: "Closing Ceremony & Award Presentation", location: "Main Stage" }
    ]
  }
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Event Schedule</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mark your calendar for an exciting day of competitions, team spirit, and fun activities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              className="glass-card rounded-xl p-6 relative"
            >
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="text-primary" size={20} />
                <h3 className="text-xl font-bold">{day.day}</h3>
              </div>

              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={`${event.time}-${event.title}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * eventIndex }}
                    className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-right min-w-[80px] flex items-center gap-1">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-500">{event.time}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
