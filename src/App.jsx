import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [count, setCount] = useState(0)
  const [banlist, setbanlist] = useState([])
  const [dog, setDog] = useState({})
  const [img, setImg] = useState('')
  const [tags, setTags] = useState([])
  const [name, setName] = useState(" ")


  const random = () => {
    while(true){
      let rand = Math.floor(Math.random() * 100)
      if (rand == count){
        continue
      }else{
        const Tags = dog[rand]['temperament'].split(',').map(dog => dog.trim()).slice(0, 3)
        const hasBannedTag = Tags.filter(tag => banlist.includes(tag));
        if (hasBannedTag.length > 0) {
            continue;
        }
        setName(dog[rand]['name'])
        getImage(dog[rand]['reference_image_id'])
        setTags(Tags)
        setCount(rand)
        break
      }
    }
  }

  const getImage = async(id) => {
    const response = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
    const json = await response.json();
    setImg(json['url'])
  }

  const add = (tag) => {
    if(banlist.includes(tag)){
      return
    }else{
      setbanlist([...banlist, tag])
    }
  }
  const remove = (tag) => {
    setbanlist(banlist.filter(item => item !== tag))
  }

  useEffect(() => {
    const start = async() => {
      const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${ACCESS_KEY}&limit=100&page=0`);
      const json = await response.json();
      setDog(json)
    }
    start()
  }, [])
  return (
    <div className='container'>
      <div className='info-box'>
        <h1>RandiDogs</h1>
        <p>Displays random dogs at every click, featuring tag filtering with their attributes.</p>
    </div>
      <div className="middle-box">
        {name && <h4>{name}</h4>}
        {img && <img src={img} alt="cat"></img>}
        {tags && tags.map((tag, index) =>(
          <button className='tags' onClick={() => add(tag)}>{tag}</button>
        ))}
        <button className="random" onClick={() => random()}>
          Random dog
        </button>
      </div>
      <div className='ban-list'>
        <h1>Ban List</h1>
        {banlist && banlist.map((tag, index) =>(
          <button className='tags' onClick={() => {remove(tag)}}>{tag}</button>
        ))}
        
      </div>
    </div>
  )
}

export default App
