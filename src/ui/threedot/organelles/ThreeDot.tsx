import "../styles/ThreeDot.css";

import Ellipse from '../../../assets/icon/threeDot/ellipse.svg'
import { useEffect, useState } from "react";

export const ThreeDot = () => {
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 200); // Интервал времени между сменой элементов в миллисекундах (400ms в данном примере)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={"ThreeDot"} >
      {[0, 1, 2].map((index) => (
        <img
          key={index}
          src={Ellipse}
          alt="Ellipse"
          className={index === animationIndex ? "animated" : ""}
        />
      ))}
    </div>
  );
};
