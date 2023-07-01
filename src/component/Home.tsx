
import Chats from './Chats'
import Navbar from './Navbar'
import TypeMessage from './TypeMessage'


const Home = () => {
    return (
        <div className='bg-[#FAF9F4]'>
            <Navbar/>
            <Chats/>
            <TypeMessage/>
        </div>
    )
}

export default Home
