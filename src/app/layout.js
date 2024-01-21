import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Navbar'
import About from '@/Components/About'
import Services from '@/Components/Services'
import Gif from '@/Components/Gif'
import Contactus from '@/Components/Contactus'
import Slider from '@/Components/Slider'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Waste',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
      <Navbar/>
      </div>
      <div style={{background: `url('/main.png')`, backgroundRepeat:"no-repeat", backgroundSize:"cover",height:"1000px", backgroundPosition:"center"}} className="main-header flex flex-col items-center" >
         
         <p className='mt-32 text-green-900 text-5xl font-bold text-center leading-snug'>"Discover, Dispose, and Earn:
         <br />
        <span>Your Ultimate E-Waste Solution Hub!"</span>
        </p>
        
        <span className='home-heading text-green-900 text-center text-2xl font-normal mt-5'>Turn Your Old Gadgets into Green Rewards!</span> 
        
       </div>

       <div>
        <About/>
       </div>

       <div>
        <Services/>
       </div>

       <div>
        <Gif/>
       </div>

       <div>
        <Slider/>
       </div>

       <div>
        <Contactus/>
       </div>

       <div>
        <Footer/>
       </div>
      {children}
      </body>
    </html>
  )
}
