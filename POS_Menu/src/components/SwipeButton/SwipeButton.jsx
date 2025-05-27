import { useState, useRef } from "react";
import "./SwipeButton.css";

const SwipeButton = ({ onComplete }) => {
  const [swiping, setSwiping] = useState(false);
  const [position, setPosition] = useState(0);
  const buttonWidth = useRef(0);
  const containerWidth = useRef(0);
  const startX = useRef(0);
  const button = useRef(null);
  const container = useRef(null);

  const handleTouchStart = (e) => {
    if (container.current && button.current) {
      buttonWidth.current = button.current.offsetWidth;
      containerWidth.current =
        container.current.offsetWidth;
      startX.current = e.touches[0].clientX;
      setSwiping(true);
    }
  };

  const handleTouchMove = (e) => {
    if (!swiping) return;

    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;
    const newPosition = Math.max(
      0,
      Math.min(
        containerWidth.current - buttonWidth.current,
        diff
      )
    );

    setPosition(newPosition);

    if (
      newPosition >
      containerWidth.current - buttonWidth.current - 20
    ) {
      handleComplete();
    }
  };

  const handleTouchEnd = () => {
    if (!swiping) return;

    if (
      position <
      (containerWidth.current - buttonWidth.current) / 2
    ) {
      setPosition(0);
    } else {
      handleComplete();
    }

    setSwiping(false);
  };

  const handleComplete = () => {
    setPosition(
      containerWidth.current - buttonWidth.current
    );
    onComplete();
  };

  return (
    <div
      className='swipe-container'
      ref={container}
    >
      <div
        className='swipe-button'
        ref={button}
        style={{ transform: `translateX(${position}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className='swipe-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14'></path>
            <path d='M12 5l7 7-7 7'></path>
          </svg>
        </div>
      </div>
      <div className='swipe-text'>Swipe to Order</div>
    </div>
  );
};

export default SwipeButton;
