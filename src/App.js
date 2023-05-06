import {ChatEngine} from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = ()=>{

    if(!localStorage.getItem('username'))return<LoginForm/>
    return (
        <ChatEngine
        height="100vh"
        projectID="ee988bd5-f6e8-4441-8292-ce1b71319c8a"
        privateKey="764c78ab-bd91-4717-8835-4b4995a53ace"
        userName={localStorage.getItem('username')}
        userSecret= {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed { ...chatAppProps}/>}
        /> 
    )
}
export default App;