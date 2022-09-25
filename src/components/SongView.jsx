import React, {useState} from 'react'

import DownloadIcon from '@mui/icons-material/Download';

const SongView = ({data}) => {
    const [URL, setURL] = useState("")
    const handleDownload = (t) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4871e6fb9dmsh1a2bf028fff40cap1d55aajsnf7bf7e777ae0',
                'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
            }
        };
        
        fetch(`https://youtube-music1.p.rapidapi.com/get_download_url?id=${t.id}&ext=mp3`, options)
            .then(response => response.json())
            .then(response => {
                 const href = response.result?.download_url;
                 window.open(href, '_self')
            })
            .catch(err => console.error(err));
    }
  return (
    <>
    <div>
        <div className='flex mt-4 view'>
            {
                data.length> 0 ? data.map((t)=>(
                    <div className='single bg-red-900 flex'>
                    <img src={t.thumbnail} alt="" />
                    <div className='details p-2'>
                        <p className='name truncate w-[200px] text-md mono text-white'>{t.title}</p>
                        <p className='family truncate text-xs w-[200px] mb-1 mono text-white tracking-tighter'>{t.name}</p>
                    </div>
                    <button onClick={()=>handleDownload(t)} className='text-white w-[70px]'><DownloadIcon/></button>
                </div>
                )) : <></>
            }
        </div>
    </div>
    
    </>
  )
}

export default SongView