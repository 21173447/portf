import { useEffect, useState } from 'react';

const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const initialSnowflakes = [];
    for (let i = 0; i < 150; i++) {
      initialSnowflakes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        drift: Math.random() * 2 - 1,
        settled: false,
      });
    }
    setSnowflakes(initialSnowflakes);

    const animateSnow = () => {
      setSnowflakes(prevSnowflakes =>
        prevSnowflakes.map(snowflake => {
          if (snowflake.settled) return snowflake;

          const newY = snowflake.y + snowflake.speed;
          const newX = snowflake.x + snowflake.drift * 0.3;

          if (newY > window.innerHeight - 50) {
            return {
              ...snowflake,
              y: window.innerHeight - Math.random() * 30 - 20,
              x: newX,
              settled: true,
              opacity: Math.random() * 0.6 + 0.3,
            };
          }

          const resetX =
            newX < -10 ? window.innerWidth + 10 :
            newX > window.innerWidth + 10 ? -10 : newX;

          const resetY = newY < -10 ? window.innerHeight : newY;

          return {
            ...snowflake,
            y: resetY,
            x: resetX,
          };
        })
      );
    };

    const interval = setInterval(animateSnow, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Falling and settled snow */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {snowflakes.map(snowflake => (
          <div
            key={snowflake.id}
            className={`absolute rounded-full bg-white ${snowflake.settled ? 'blur-[1px]' : ''}`}
            style={{
              left: `${snowflake.x}px`,
              top: `${snowflake.y}px`,
              width: `${snowflake.size}px`,
              height: `${snowflake.size}px`,
              opacity: snowflake.opacity,
              filter: snowflake.settled ? 'blur(0.8px)' : 'blur(0.5px)',
              animation: snowflake.settled ? 'none' : `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Snow accumulation */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-white/30 to-transparent"></div>

        <div className="absolute top-[20%] left-[10%] w-32 h-1 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute top-[40%] right-[15%] w-24 h-1 bg-white/15 rounded-full blur-sm"></div>
        <div className="absolute top-[60%] left-[20%] w-20 h-1 bg-white/10 rounded-full blur-sm"></div>
        <div className="absolute top-[80%] right-[25%] w-28 h-1 bg-white/12 rounded-full blur-sm"></div>
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
      `}</style>
    </>
  );
};

export default SnowEffect;
