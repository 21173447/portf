import { useEffect, useState } from 'react';

const ScrollDarkenSection = () => {
  const [darkness, setDarkness] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxDarkness = 0.4; 
      const calculated = Math.min(scrollY / 500, maxDarkness);
      setDarkness(calculated);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
 
      <div
        className="absolute inset-0 z-0 transition-all duration-300"
        style={{
            background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)',
        }}
      ></div>

    
      <div
        className="absolute inset-0 z-10 transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${darkness})`,
        }}
      ></div>

      <div className="relative z-20 text-white p-10">
        <h1 className="text-3xl font-bold">Scroll to Darken</h1>
        <p className="mt-4 max-w-xl">This section gets darker as you scroll down.</p>
      </div>
    </div>
  );
};

export default ScrollDarkenSection;
