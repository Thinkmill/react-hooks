import { Wrapper } from './Wrapper';
import { Emoji } from './Emoji';

export function Footer() {
	return (
		<footer
			css={{
				gridArea: 'footer',
				padding: '1rem 0',
				zIndex: 2,
				textAlign: 'center',
			}}
		>
			<Wrapper>
				Made in <Emoji symbol="🇦🇺" alt="Australia" /> by Thinkmill.
			</Wrapper>
		</footer>
	);
}
