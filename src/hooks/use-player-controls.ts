import { useEffect } from "react";

interface UsePlayerControlsProps {
  handleArrowUp: () => void;
  handleArrowDown: () => void;
  handleArrowLeft: () => void;
  handleArrowRight: () => void;
}

export function usePlayerControls({
  handleArrowUp,
  handleArrowDown,
  handleArrowLeft,
  handleArrowRight,
}: UsePlayerControlsProps) {
  // we're using use effect to re-render the component
  // on every observed change, in this case key press.
  useEffect(() => {
    const handleKeyDown = function (evt: KeyboardEvent) {
      switch (evt.code) {
        case "ArrowDown":
          handleArrowDown();
          break;
        case "ArrowUp":
          handleArrowUp();
          break;
        case "ArrowLeft":
          handleArrowLeft();
          break;
        case "ArrowRight":
          handleArrowRight();
          break;
      }
    };

    // add key press event listener
    document.addEventListener("keydown", handleKeyDown);

    // cleanup event listener
    return () => document.removeEventListener("keydown", handleKeyDown);

    // run this effect hook on every arrow key press
  }, [handleArrowUp, handleArrowDown, handleArrowLeft, handleArrowRight]);
}
