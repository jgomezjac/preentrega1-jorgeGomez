export const FormCart = ({formData, handleOnChange,handleOrder, errors, validateForm}) => {
    
    const handleSubmit = ( evt ) => {
        evt.preventDefault()
        if( validateForm()) {
            handleOrder( formData );
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input className='form-control' type='text' name='name' placeholder="Ingrese nombre"  onChange={handleOnChange} value={formData.name} />
            {errors && errors.name && <span className='text-danger'>{errors.name}</span>}
            <br />
            <label>Email</label>
            <input required className='form-control' type='text' name='email' placeholder="Ingrese email"  onChange={handleOnChange} value={formData.email} />
            {errors && errors.email && <span className='text-danger'>{errors.email}</span>}
            <br />
            <label>Teléfono</label>
            <input className='form-control' type='text' name='phone' placeholder="Ingrese Teléfono"  onChange={handleOnChange} value={formData.phone} />
            <br />
            <button className="btn btn-success">Terminar compra</button>
        </form>
    )
}