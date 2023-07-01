import { useContext } from "react"
import { AppContext } from "../Context/AppContext";
import moment from "moment";
import Message from "./Message";
import InfiniteScroll from 'react-infinite-scroll-component';

const Chats = () => {
  const { chats,fetchChats } = useContext(AppContext);
  const date = moment(chats[1]?.time).format("DD MMMM YYYY");

  return (
    <div className="z-0">
      <h1 className="pt-80 mb-20 w-11/12 m-auto text-center border-b-[1px] border-gray-400 leading-[0.1rem] ">
        <span className="bg-[#FAF9F4] px-4 py-2 mb-5 text-gray-400">{date}</span>
      </h1>
      <InfiniteScroll
            dataLength={chats.length} //This is important field to render the next data
            next={fetchChats}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            className="flex flex-col gap-4 p-6 items-start mb-12 text-sm ">
        {chats?.map((chat: any, i) => {           
           return (<Message key={i} index={i} image={chat?.sender?.image} message={chat?.message} />) })}
        </InfiniteScroll>
    </div>
  )
}

export default Chats
