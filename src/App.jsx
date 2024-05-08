
import './App.css'
import Header from './Components/Header'
import { Carousel } from './Components/Swiper/Carousel'
import VideoCard from './Components/VideoCard/VideoCard'

function App() {


  return (
    <>
      <div className='w-screen min-h-screen bg-[#FAF9F6]  '>
        <Header/>
        <Carousel/>
        <VideoCard/>

      </div>
    </>
  )
}

export default App
