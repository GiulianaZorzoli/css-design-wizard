import React from 'react'



export const CssBox = ({code}) => {
  const copiarTexto= async () =>{
    try{
        await navigator.clipboard.writeText(code);
        console.log("copiado");
    }catch(err){
        console.log("error al copiar");
    }
  }
  return (
    <div className='cssBox'>
      <div>
        <h5>CSS</h5>
        <i className="bi bi-clipboard" onClick={copiarTexto}></i>
      </div> 
      <p>{code}</p>
    </div>
  )
}
export default CssBox;