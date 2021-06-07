import { useEffect } from 'react';

/**
 *  Calls your effect only on mount, not on update.
 */
export function useMountEffect(effect: () => any): void {
	useEffect(() => {
		if (typeof effect === 'function') {
			effect();
		}
	}, []);
}
