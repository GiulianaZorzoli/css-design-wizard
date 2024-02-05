import React, { useEffect, useState } from 'react'
import CssBox from './CssBox';

export const Gradient = () => {

    const [firstColor, setFirstColor] = useState("#0197AF");

    const [secondColor, setSecondColor] = useState("#4B227A");
    
    const [firstColorCant , setFirstColorCant] = useState(50);

    const [degrees, setDegrees] = useState(0);

    const [gradient, setGradient] = useState('');

    const [radial, setRadial] = useState(false);

    const [code, setCode] = useState('');

    useEffect (()=>{generateGradient();},[firstColor,secondColor,firstColorCant,degrees,radial]);

    const generateGradient = () => {
        const gradientValue = radial ? `radial-gradient( ${secondColor} , ${firstColorCant}% , ${firstColor})`
                                     : `linear-gradient(${degrees}deg , ${secondColor} , ${firstColorCant}% , ${firstColor})`;
        setGradient(gradientValue);
        setCode(`background : ${gradientValue}`);
    }



  return (
    <article className='gradient'>
        <section className='gradientContainer'>
            <div className='gradientBox' style={{background:gradient}}></div>
        </section>
        <section className='gradientControls'>
            <div>
                <label htmlFor="firstColor"> Color 1</label>
                <input type="color" id='firstColor' value={firstColor} onChange={(e)=>setFirstColor(e.target.value)}/>
                
                <label htmlFor="cant1" >Cantidad del primer color</label>
                <input type="range" id='cant1' className='rangeInput' value={firstColorCant} onChange={(e)=>setFirstColorCant(e.target.value)} min={0} max={100}/>
                
                <label htmlFor="secondColor"> Color 2</label>
                <input type="color" id='secondColor' value={secondColor} onChange={(e)=>setSecondColor(e.target.value)}/>
                
                <label htmlFor="degrees" >Ángulo</label>
                <input type="range" id='degrees' className='rangeInput' value={degrees} onChange={(e)=>setDegrees(e.target.value)} min={-90} max={180}/>

                <label htmlFor="checkbox">Gradiente radial</label>
                <input type="checkbox" id='radial' checked={radial} onChange={(e)=>setRadial(e.target.checked)}/>
            </div>
            <CssBox code={code}></CssBox>
        </section>
    </article>
  )
}
export default Gradient;