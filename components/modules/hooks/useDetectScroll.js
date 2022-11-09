import { useEffect, useState } from "react";

let previousScrollPosition = 0;

const useDetectScroll = () => {
  const [isScrollingToBottom, setIsScrollingToBottom] = useState(false);
  const [isOverMiddle, setIsOverMiddle] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.onscroll = () => {
        const detectScrollOverMiddle = () => {
          if (window.pageYOffset > window.innerHeight / 2) {
            setIsOverMiddle(true);
          } else {
            setIsOverMiddle(false);
          }
        };

        const isScrollingDown = () => {
          let goingDown = false;
          let scrollPosition = window.pageYOffset;

          if (scrollPosition > previousScrollPosition) {
            goingDown = true;
          }
          previousScrollPosition = scrollPosition;

          return goingDown;
        };
        detectScrollOverMiddle();
        setIsScrollingToBottom(isScrollingDown());
      };
    }
  }, []);

  return {
    isScrollingToBottom,
    isOverMiddle,
  };
};

export default useDetectScroll;
