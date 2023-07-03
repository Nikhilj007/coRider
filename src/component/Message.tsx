


type Props = {
    image: string,
    message: string,
    index: number
}

const Message = ({ image, message, index }: Props) => {
    const rand = Math.floor(Math.random() * 10);
    message?.length > 50 ? message = message.slice(0, 100) : message = message;
    return (
        
            <div className={((index%rand)=== 0 ? "justify-end w-11/12 relative " : "pr-6 ") + "flex gap-2 "}>
                <img className={((index%rand)=== 0 ? "hidden " : "") + "rounded-full w-6 h-6 "} src={image} alt="dfs" />
                <div className={((index%rand)=== 0 ? "bg-blue-600  text-white rounded-br-none overflow-hidden float-left w-3/4 " : "bg-white w-11/12 text-[#606060] rounded-tl-none ") + "shadow-xl rounded-2xl   p-2 "}>{message}</div>
            </div>
    )
}

export default Message