import { useEffect, useState } from 'react';

const useCountUp = (target, start) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const begin = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - begin) / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
};

export default useCountUp;
