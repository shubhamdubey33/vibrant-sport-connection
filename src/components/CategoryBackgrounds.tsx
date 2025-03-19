
// Cricket Background
export const CricketBackground = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    {/* Cricket field */}
    <div className="absolute inset-0 bg-green-100"></div>
    
    {/* Cricket pitch */}
    <div className="absolute top-1/2 left-1/2 w-20 h-[80%] -translate-x-1/2 -translate-y-1/2 bg-green-200"></div>
    
    {/* Cricket balls animation */}
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute w-4 h-4 rounded-full bg-red-500 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 10}s`
        }}
      ></div>
    ))}
  </div>
);

// Tug of War Background
export const TugOfWarBackground = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    {/* Rope texture */}
    <div className="absolute top-1/2 left-0 right-0 h-8 bg-amber-800 -translate-y-1/2"></div>
    
    {/* Rope marks */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute top-1/2 h-10 w-2 bg-amber-900 -translate-y-1/2"
        style={{
          left: `${i * 5 + 2.5}%`,
        }}
      ></div>
    ))}
    
    {/* Center mark */}
    <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"></div>
    
    {/* Pulsing force indicators */}
    <div className="absolute top-1/2 left-[30%] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 animate-pulse-soft"></div>
    <div className="absolute top-1/2 left-[70%] w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
  </div>
);

// Volunteer Background
export const VolunteerBackground = () => (
  <div className="absolute inset-0 opacity-10 overflow-hidden">
    {/* Registration table */}
    <div className="absolute bottom-0 left-[10%] right-[10%] h-[20%] bg-blue-100 rounded-t-lg"></div>
    
    {/* Confetti animation */}
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-float"
        style={{
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          background: `hsl(${Math.random() * 360}, 100%, 70%)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          transform: `rotate(${Math.random() * 360}deg)`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 10}s`
        }}
      ></div>
    ))}
  </div>
);

// General Background
export const GeneralBackground = () => (
  <div className="absolute inset-0 opacity-5 overflow-hidden">
    {/* Wave animation */}
    <div className="absolute inset-0 flex flex-col">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="h-[20%] bg-current animate-wave"
          style={{
            opacity: 0.1 + i * 0.1,
            animationDelay: `${i * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  </div>
);
