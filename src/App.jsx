import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')


  // useEffect(()=>{
  //   fetch( `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
  //   .then(res => res.json())
  //   // .then(data => console.log(data))
  //   // .catch(err => console.log(err))
  // },[]);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=42370495-3d5bc4d685ac14a32f63d8352&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])
  console.log(images)

  return (
    <div className='container mx-auto'>
      <ImageSearch funcSearchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 &&
        <h1 className="text-6xl text-center mx-auto mt-32">
          Images Not Found :(
        </h1>
      }
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">
        Loading...
      </h1> : <div className="grid grid-cols-3 gap-4">
        {
          images.map(image => <ImageCard key={image.id} image={image} />)
        }
      </div>}
    </div>
  )
}

export default App
