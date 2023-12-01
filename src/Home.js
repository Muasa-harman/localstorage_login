import React from "react";
import './App.css';
function Home(){
    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }
    
    return(
        <div>
            <div className="header">
            <h1>Dashboard Page </h1>
            <p>Wellcome {localStorage.getItem('name')}</p>
            <button onClick={logout} className="logout">LogOut</button>
            <button onClick={deleteAccount} className="delete">Delete</button>

            </div>
        </div>
    );
}
export default Home;