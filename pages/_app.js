import '../styles/globals.css'
import {motion} from 'framer-motion'
import Header from '../components/Header'
function MyApp({ Component, pageProps,router }) {
  return (
    <div className='container px-6 xl:px-8 xl:m-auto py-8'>
    <Header/>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial:{
        opacity:0
      },
      pageAnimate:{
        opacity:1,
        transition:{
          duration:1.5,
          ease:[0.6,-0.05,0.01,0.99]
        }
      },
    }}>
      <Component {...pageProps} />
    </motion.div>
    </div>
  )
}

export default MyApp
