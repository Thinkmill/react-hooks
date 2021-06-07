import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { Wrapper } from './Wrapper';

export function Header(props: HTMLAttributes<HTMLElement>) {
	return (
		<header
			css={{
				gridArea: 'header',
				zIndex: 2,
			}}
			{...props}
		>
			<Wrapper
				css={{
					margin: '1rem auto 1rem auto',
					display: 'grid',
					gridTemplateColumns: 'auto 1fr',
					alignItems: 'center',
				}}
			>
				<Link href="/" passHref>
					<a>
						<h1>Thinkmill React Hooks</h1>
					</a>
				</Link>
			</Wrapper>
		</header>
	);
}
