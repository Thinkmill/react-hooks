export function Wrapper({ offset = 0, ...props }) {
	return (
		<div
			css={{
				maxWidth: `${78.875 - offset}rem`,
				margin: '0 auto',
				padding: '0 2rem',
			}}
			{...props}
		/>
	);
}
