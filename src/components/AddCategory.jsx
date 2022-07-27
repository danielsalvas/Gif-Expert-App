import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChanged = (e) => {
        setInputValue( e.target.value )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!inputValue)  return; //Si no hay ningun valor en el input, se termina la función y no inserta ningún espacio. 
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

  return (
    <form onSubmit={ (e) => onSubmit(e)}>
        <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ (e) => onInputChanged(e) }
        />
    </form>
    
  )
}
