import React,{useEffect,useState} from 'react';
function ToDoList(){
  const [list,setList]=useState([]);
  const [item,setItem]=useState('');
  const [pepole,setPeople]=useState([]);
  const [name,setName]=useState('');
  const [StatusOfList,setStatusForList]=useState(false);
    
  const _changeItemText = (event) =>{
    setItem(event.target.value);
  };
  const _changeName = (event) =>{
    setName(event.target.value);
  };
  const _changeStatus=()=>{
        
    setStatusForList(list.length%2===0);  
  };
  const _addItem = (event) => {
    event.preventDefault();
    event.target.reset();
    // setStatusForList(list.length>0)
    item && setList([...list,item]);
  };
  const _addperson = (event) => {
    event.preventDefault();
    event.target.reset();
    name && setPeople([...pepole,name]);
  };
  useEffect(()=>{
    console.log('item added');
    if(list.length>=1){document.title = `Status of list,${StatusOfList} `;}
  },[list]);

  return(
    <section>
      <form onSubmit={_addItem}>
        <label>To Do Item Text</label>
        <input onChange={_changeItemText}/><br></br>
        <form onSubmit={_addperson}>
          <label>Assigned To</label>
          <input onChange={_changeName}/>
        </form>
        <p>Status Of List {StatusOfList.toString()}</p>
        <button onClick={_changeStatus}></button>
      </form>
      {list.map(item=>
        <li key={item}>{item}</li>
      )}
      {pepole.map(item=>
        <p key={item}>{item}</p>
      )}
    </section>
  );
}
export default ToDoList;