export const SelectColor = ({colores, optionSelected}) => {

    return (
        <select onChange={(evt) => optionSelected(evt.target.value)}>
            {colores.map( (color) =>
                <option key={color.id} value={color.id}>{color.id}</option> ) 
            }
        </select>
    )
    
}