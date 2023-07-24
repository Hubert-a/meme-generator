import React ,{useEffect, useState}from "react"

export default function Meme(){
    const [meme, setMeme]=useState({
        topText:'',
        bottomText:'',
        randomImage:'https://i.imgflip.com/261o3j.jpg'
    })
    const [allMemes, setAllMemes] =useState([])

    function getMemeImage(){
        const randomMeme = Math.floor(Math.random()* allMemes.length)
        const url = allMemes[randomMeme].url

        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        }))
    }
    console.log(meme)

    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
    useEffect(()=>{
        async function getMemes(){
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])
     
    return(
        <main className="meme">
            <div className="form">
                <input placeholder="Top text"  className="form--input"
                    type='text'
                    onChange={handleChange}
                    name='topText'
                    value={meme.topText}

                />
                <input placeholder="Bottom text"  className="form--input"
                    type='text'
                    onChange={handleChange}
                    name='bottomText'
                    value={meme.bottomText}

                />
                <button className="form--button" onClick={getParasm}>Get a new meme image</button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} alt='meme' className='meme--image'/>
            <h2 className="meme--text top" >{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}