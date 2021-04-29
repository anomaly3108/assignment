import './App.css';
import PersonList from './employee'
import Adduser from './addemployee'

function App() {
    return ( 
        <div className = "App" >
            <PersonList></PersonList>  
            <Adduser></Adduser> 
        </div>
    );
}

export default App;