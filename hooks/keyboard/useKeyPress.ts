import { useCallback, useEffect, useState } from 'react';

// NOTE: keyboard event handler defined here rather than imported from react becase
// the event listener will return a native event, not a synthetic event
type KeyboardHandler = (event: KeyboardEvent) => void;
type UseKeyPressProps = {
	targetKey: string;
	listenWhen: boolean;
	downHandler?: KeyboardHandler;
	upHandler?: KeyboardHandler;
};

/**
 * Takes a target key, when to listen, and optional [up|down] handlers. Returns
 * whether the target key is pressed.
 */
export function useKeyPress({
	targetKey,
	downHandler,
	upHandler,
	listenWhen,
}: UseKeyPressProps): boolean {
	// Keep track of whether the target key is pressed
	const [keyPressed, setKeyPressed] = useState(false);

	// handle key down
	const onDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === targetKey) {
				setKeyPressed(true);

				if (typeof downHandler === 'function') {
					downHandler(event);
				}
			}
		},
		[targetKey, downHandler]
	);

	// handle key up
	const onUp = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === targetKey) {
				setKeyPressed(false);

				if (typeof upHandler === 'function') {
					upHandler(event);
				}
			}
		},
		[targetKey, upHandler]
	);

	// add event listeners
	useEffect(() => {
		if (listenWhen) {
			window.addEventListener('keydown', onDown);
			window.addEventListener('keyup', onUp);

			// Remove event listeners on cleanup
			return () => {
				window.removeEventListener('keydown', onDown);
				window.removeEventListener('keyup', onUp);
			};
		}
		// NOTE: only call when the value of `listenWhen` changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [listenWhen]);

	return keyPressed;
}
