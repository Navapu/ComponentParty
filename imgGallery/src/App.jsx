import './App.css'
import ImgGallery from './ImgGallery';

function App() {
  const imageList = [
    { src: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" , alt: 'Rick Sanchez' },
    { src: "https://rickandmortyapi.com/api/character/avatar/2.jpeg" , alt: 'Morty Smith' },
    { src: "https://rickandmortyapi.com/api/character/avatar/3.jpeg" , alt: 'Summer Smith' },
    ];
  return (
    <>
      <ImgGallery data={imageList}/>
    </>
  )
}

export default App
