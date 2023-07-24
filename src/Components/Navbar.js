import memeLogo from '../images/meme-logo.png'
export default function Navbar(){
    return(
        <nav>
            <img alt="meme-logo" src={memeLogo} className='nav--image' />
            <h3 className='nav--title'>Meme Generator</h3>
            <h4 className='nav--project'>React Course - Project 3</h4>

        </nav>
    )
}