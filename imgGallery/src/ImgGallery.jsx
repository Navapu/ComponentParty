import './App.css'
const ImgGallery = ({ data }) => {
    return (
        <div className='gallery'>
            {data.map(({src, alt}, idx)=>(
                <img key={idx} src={src} alt={alt} />
            ))}
        </div>
    )
}

export default ImgGallery