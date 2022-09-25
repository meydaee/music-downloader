import React, {useState,useEffect} from 'react'
import SongView from './SongView'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  const [Input, setInput] = useState("")
  const [Response, setResponse] = useState({})

  const changeHandler = (e) => {
    setInput(Input=> e.target.value)
    console.log(Input)
  }

  const handleSearch = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4871e6fb9dmsh1a2bf028fff40cap1d55aajsnf7bf7e777ae0',
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
      }
    };

    if (Input){
      fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${Input}`, options)
      .then(response => response.json())
      .then(response => {
        if (response) {
          setResponse(Response=>Response = response?.result?.songs);
        }
        console.log(Response)
      })

      .catch(err => console.error(err));
    } else {
      console.warn("Enter Something")
    }
  }
  

  return (
    <>
    <div className='search'>
        <input onChange={(e)=>changeHandler(e)} type="text" placeholder='Search for a Song' />
        <button className='text-red-800' onClick={handleSearch}><SearchIcon/></button>
    </div> {

    }
    <SongView data={Response}/>
    </>
  )
}

export default SearchBox