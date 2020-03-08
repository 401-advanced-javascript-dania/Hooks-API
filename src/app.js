import React from 'react';
import Header from './component/header.js';
import Footer from './component/footer.js';
// import ToDoList from './component/toDoList.js';
import ToDoListTwo from './component/toDoList2.js'
 
function App(){
    return(
        <React.Fragment>
            <Header/>
            {/* <ToDoList/> */}
            <ToDoListTwo/>
            <Footer/>
        </React.Fragment>
    )
}
export default App;