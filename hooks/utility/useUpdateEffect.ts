import { useState, useEffect } from 'react';
import { useMountEffect } from './useMountEffect';

/**
 *  Calls your effect only on update, not on mount.
 */
export function useUpdateEffect(effect: () => any, deps?: Array<any>): void {
	const [hasMounted, setHasMounted] = useState(false);
	if (typeof deps !== 'undefined' && !Array.isArray(deps)) {
		deps = [deps];
	} else if (Array.isArray(deps) && deps.length === 0) {
		console.warn(
			'Using [] as the dependency array makes useUpdateEffect a noop. The dependency array should either be `undefined` or an array of length greater than 0.'
		);
	}
	useMountEffect(() => {
		setHasMounted(true);
	});
	useEffect(() => {
		if (hasMounted) {
			effect();
		}
	}, deps);
}
