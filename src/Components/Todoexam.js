import React,{useState} from 'react'

const Todoexam = () => {
    var[inputval,setInputval]=useState('');
    var[todos,setTodos]=useState([]);
    function handleonchange(e){
        setInputval(e.target.value);
    }
    function handleonclick(){
        setTodos([...todos,inputval]);
        setInputval('')
    }
    function handledelete(index){
        var newtodos=[...todos]
        newtodos.splice(index,1);
        setTodos([...newtodos]);
    }
  return (
    <div>
        <h1>List</h1>
        <input type='text' value={inputval} onChange={handleonchange}/>
        <button onClick={handleonclick}>Add</button>
        <ul>
        {
            todos.map((value)=>(
                <li key={value}>{value}
                <button onClick={handledelete}>Delete</button></li>
            ))
        }
        </ul>
    </div>
  )
}

export default Todoexam