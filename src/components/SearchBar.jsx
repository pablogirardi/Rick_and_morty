import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   function handleChange(event) {
      setId(event.target.value)
      console.log(event)
   }
   return (
      <div>
          <input value={id} onChange={handleChange} type='search'/>
          <button onClick={() => {onSearch(id); setId('')}}>AGREGAR</button> 
      </div>
   );
}
 