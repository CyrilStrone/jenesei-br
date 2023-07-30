import { useState, useEffect } from "react";

const useIsMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)"); // Пороговое значение для мобильных устройств

    const handleResize = (event:any) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobileDevice;
