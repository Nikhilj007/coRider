import { createContext, useState } from "react";
import axios from "axios";

interface Props {
    id:String,
    message:String,
    sender:objProp,
    time:string,
} 

interface objProp {
    image:string,
    user_id:String,
}
  
type valueProps = {
    loading: boolean,
    chats: Props[],
    data: any,
    fetchChats() :any,
    page: number
}
export const AppContext= createContext<valueProps>({
    loading: false,
    chats: [
        {
            id:" ",
            message:" ",
            sender:{ image:" ",user_id:" "},
            time:" ",
        }
    ],
    data:" ",
    fetchChats() {},
    page: 1
});

export function AppContextProvider({children}:any){
    const [loading,setLoading] = useState(false);
    const [chats,setChats] = useState([{id:"da0165b8bf7f4027a711c164cbb42774 ",message:"Quisque vitae varius ex, eu volutpat orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lo ",sender:{ image:"https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o ",user_id:"123"},time:" "}]);
    const [data,setData] = useState(" ");
    const [page,setPage] = useState(1);
    // DATA FILLING

    async function fetchChats(page=1){
        setLoading(true)
        try{
            const chatx = await axios.get(`https://qa.corider.in/assignment/chat?page=${page}`)
            setChats((prev)=>[...prev,...chatx?.data?.chats]);
            console.log(chats)
            setData(chatx?.data);
            setPage(page);
        }catch(err){
            console.log("error",err)
        }
        setLoading(false);
    }
    const value: valueProps = {
       fetchChats,
       chats,
       loading,
       data,
       page
    }

    return <AppContext.Provider value= {value}>
        {children}
    </AppContext.Provider>
}