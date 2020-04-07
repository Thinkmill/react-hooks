import { RefObject, useCallback, useEffect } from "react";

// NOTE: mouse event handler defined here rather than imported from react becase
// the event listener will return a native event, not a synthetic event
type MouseHandler = (event: MouseEvent) => void;
type UseClickOutsideProps = {
  handler: MouseHandler;
  refs: RefObject<HTMLElement>[];
  listenWhen: boolean;
};

export function useClickOutside({
  handler,
  refs,
  listenWhen,
}: UseClickOutsideProps) {
  const handleMouseDown = useCallback(
    (event: MouseEvent) => {
      // bail on mouse down "inside" any of the provided refs
      if (
        refs.some(
          (ref) => ref.current && ref.current.contains(event.target as Node)
        )
      ) {
        return;
      }

      handler(event);
    },
    [handler, refs]
  );

  useEffect(() => {
    if (listenWhen) {
      document.addEventListener("mousedown", handleMouseDown);

      return () => {
        document.removeEventListener("mousedown", handleMouseDown);
      };
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [listenWhen, handleMouseDown]);
}
