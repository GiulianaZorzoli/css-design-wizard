import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';


const copiarTexto= async (text) =>{
    try{
        await navigator.clipboard.writeText(text);
        console.log("copiado");
    }catch(err){
        console.log("error al copiar");
    }
  }
export const Palette = () => {
    const location = useLocation();
    const { color } = location.state

    const c1 = color[0];
    const c2 = color[1];
    const c3 = color[2];
    const c4 = color[3];
    return (
    <article className='selectedPalette'>
        <section className='paletteInfo'>
            <div className='palette'>
                <div style={{backgroundColor:c1}}></div>
                <div style={{backgroundColor:c2}}></div>
                <div style={{backgroundColor:c3}}></div>
                <div style={{backgroundColor:c4}}></div>
            </div>
            <div className='circles'>
                <div className='circle'><div style={{backgroundColor:c1}}></div><span onClick={e => copiarTexto(c1)}>{c1}</span></div>
                <div className='circle'><div style={{backgroundColor:c2}}></div><span onClick={e =>copiarTexto(c2)}>{c2}</span></div>
                <div className='circle'><div style={{backgroundColor:c3}}></div><span onClick={e =>copiarTexto(c3)}>{c3}</span></div> 
                <div className='circle'><div style={{backgroundColor:c4}}></div><span onClick={e =>copiarTexto(c4)}>{c4}</span></div>
            </div>
        </section>
        <section className='paletteDemoContainer'>
            <div className='paletteDemo' style={{background : c2}}>
                <div className='demoNav' style={{background : c1}}>
                    <h6>ABOUT</h6>
                    <h6>PRODUCTS</h6>
                    <h6>CONTACT</h6>
                </div>
                <div className='demoMain'>
                    <div className='demoTitle'>
                        <h2 style={{color : c3}}>COOL PAGE</h2>
                        <p style={{color : c1}}>Esta es una página muy cool, donde hay info cool de cosas muy cool. Bienvenido a esta página cool.</p>
                    </div>
                    <div className='demoSection' style={{background : c3}}>
                        <p>Esta sección muestra más info de esta página tan cool, si quieres conocer mas puedes seguir navegando por esta página tan cool.</p>
                    </div>
                    <div className='demoButton'>
                        <button style={{borderColor : c3}} >PAGINA SUPER COOL</button>
                    </div>

                </div>
                <div className='demoFooter' style={ {background : c4}}>
                    <p>CONTACTO DE COOL PAGE</p>
                    <p>page@coolpage.com</p>
                </div>
            </div>
        </section>
    </article>
  )
}
export default Palette;