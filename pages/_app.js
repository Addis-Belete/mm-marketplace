import '../styles/globals.css'
import NavBar from '../components/NavBar'
function MyApp({ Component, pageProps }) {

	return (
		<body className='h-screen bg-gradient-to-b
                 from-blue-black-1 to-blue-black-2'>
			<NavBar />
			<Component {...pageProps} />
		</body>
	)
}

export default MyApp
