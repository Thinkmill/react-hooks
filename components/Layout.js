import { Global } from '@emotion/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';

import { Wrapper } from './Wrapper';
import { Footer } from './Footer';
import { Header } from './Header';
import { reset } from './reset';

const DOMAIN = 'https://example.com';

export function Layout({
	children,
	title = 'Thinkmill React Hooks',
	description = 'A Thinkmill guide to using React Hooks in front-end projects',
	ogImage, //= {
	//   url: '/og-image.png',
	//   width: 1522,
	//   height: 820,
	// },
}) {
	const router = useRouter();

	return (
		<Fragment>
			<Global styles={reset} />
			<Global
				styles={{
					':root': {
						// font tokens
						'--font-body':
							'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
						'--font-brand':
							'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
						'--font-mono':
							'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
						// color tokens
						'--text': '#47546b',
						'--headline': '#1a202c',
						'--brand': '#166bff',
						'--focus': '#166bff',
						'--disabled': '#6c7689',
						'--border': '#e2e8f0',
						'--bg': '#f6f8fb',
						'--danger': '#dc2626',
					},
					html: {
						height: '100%',
					},
					body: {
						fontFamily: 'var(--font-body)',
						lineHeight: 1.2,
						margin: 0,
						padding: 0,
						color: 'var(--text)',
						height: '100%',
					},
					'#__next': {
						minHeight: '100%',
						display: 'grid',
						gridTemplateRows: 'auto 1fr',
						gridTemplateAreas: '"header" "main" "footer"',
						gridTemplateColumns: 'minmax(0, 1fr)', // https://css-tricks.com/preventing-a-grid-blowout/
					},
					a: {
						color: 'var(--focus)',
						textDecoration: 'none',
						transition: 'color 0.3s ease',
						textUnderlineOffset: '3px',
					},
					'a:hover': {
						color: 'var(--text)',
						textDecoration: 'underline',
					},
					'*:focus-visible, input:focus-visible, button:focus-visible, [type="submit"]:focus-visible':
						{
							outline: '1px dashed var(--focus)',
							outlineOffset: '3px',
						},
					'input:focus-visible': {
						outlineStyle: 'solid',
						outlineWidth: '3px',
						outlineOffset: '0',
					},
					'*, *:before, *:after': {
						boxSizing: 'border-box',
					},
				}}
			/>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#062959" />
				<meta name="msapplication-TileColor" content="#062959" />
				<meta name="theme-color" content="#062959" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
				{ogImage && (
					<Fragment>
						<meta property="og:image" content={`${DOMAIN}${ogImage.url}`} />
						<meta property="og:image:width" content={ogImage.width} />
						<meta property="og:image:height" content={ogImage.height} />
					</Fragment>
				)}
			</Head>

			<Header />

			<main
				css={{
					gridArea: 'main',
					position: 'relative',
					zIndex: 1,
				}}
			>
				<Wrapper>{children}</Wrapper>
			</main>

			<Footer />
		</Fragment>
	);
}
