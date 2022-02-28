import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

	return (
		<body className='h-screen bg-gradient-to-b
                 from-green-200 to-green-500"'>

			<Component {...pageProps} />
		</body>
	)
}

export default MyApp
