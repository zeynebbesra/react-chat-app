import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./UserInfo/UserInfo"


const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
  
    </div>
  )
}

export default List