import React, { useEffect, useState } from 'react'
import CssBox from './CssBox';

export const Shadow = () => {
    const [shadowX, setShadowX] = useState(10);

    const[shadowY, setShadowY] = useState(10);

    const [shadowRatio, setShadowRatio] = useState(5);

    const [propagation, setPropagation] = useState (0);

    const [opacity,setOpacity] = useState (1);

    const [color,setColor] = useState ('#000000');

    const [inset, setInset] = useState(false);

    const [boxShadow, setBoxShadow] = useState ('');

    const [backgroundColor, setBackgroundColor] =useState ("#D4E1F5");

    const [boxColor, setBoxColor] = useState ("#8C57CF");

    const [code,setCode] = useState('');

    
    useEffect (()=> {generateShadow();},[shadowX,shadowY,shadowRatio,propagation,opacity,color,inset]);

    const generateShadow = () => {
        const boxShadowValue = inset ? `inset ${shadowX}px ${shadowY}px ${shadowRatio}px ${propagation}px rgba(${hexToRgb(color,opacity)})`
                                     : `${shadowX}px ${shadowY}px ${shadowRatio}px ${propagation}px rgba(${hexToRgb(color,opacity)})`;
        setBoxShadow(boxShadowValue);

        const codeValue = `box-shadow:${boxShadowValue};`
        setCode (codeValue);
        
    }

    const hexToRgb = (color, opacity) => {
        return `${parseInt(color.slice(1,3),16)},${parseInt(color.slice(3,5),16)},${parseInt(color.slice(5,7),16)},${opacity}`
    }

  
    return (

    <article className='shadow'>
        <section className='shadowContainer' style={{backgroundColor:backgroundColor}}>
            <div className='shadowSubBox' style={{backgroundColor:boxColor}}></div>
            <div className='shadowBox' style={{boxShadow:boxShadow}}></div>
        </section>
        <section className='shadowControls'>
            <div>
                <label htmlFor="color" className='colorLabel'>Color de la sombra</label>
                <input id='color' type='color' className='colorSelector' value={color} onChange={(e)=>setColor(e.target.value)}/>

                <label htmlFor="width"> Ancho de la sombra</label>
                <input id='width' type="range" max={'100'} min={'-100'} value={shadowX} onChange={(e)=>setShadowX(e.target.value)}/>

                <label htmlFor="height">Alto de la sombra</label>
                <input id='height' type="range" max={'100'} min={'-100'} value={shadowY} onChange={(e)=>setShadowY(e.target.value)}/>

                <label htmlFor="backgroundColor" className='colorLabel'>Color de fondo</label>
                <input id='backgroundColor' type="color" className='colorSelector' value={backgroundColor} onChange={(e)=>setBackgroundColor(e.target.value)}/>
                
                <label htmlFor="backgroundColor" className='colorLabel'>Color de la caja</label>
                <input id='backgroundColor' type="color" className='colorSelector' value={boxColor} onChange={(e)=>setBoxColor(e.target.value)}/>

                <label htmlFor="shadowRatio"> Radio de la sombra</label>
                <input id='shadowRatio' type="range" max={'100'} min={'-0'} value={shadowRatio} onChange={(e)=>setShadowRatio(e.target.value)} />

                <label htmlFor="propagation"> Propagación de la sombra</label>
                <input id='propagation' type="range" max={'50'} min={'-50'} value={propagation} onChange={(e)=>setPropagation(e.target.value)}/>

                <label htmlFor="opacity"> Opacidad de la sombra</label>
                <input id='opacity' type="range" max={'1'} min={'0'} step={'0.01'} value={opacity} onChange={(e)=>setOpacity(e.target.value)}/>

                <label htmlFor="innerShadow" className='innerShadowLabel'>Sombra interna</label>
                <input id='innerShadow' type="checkbox" className='innerShadow'  checked={inset} onChange={(e)=>setInset(e.target.checked)}/>
            </div>
            <CssBox code={code}></CssBox>
        </section>
        
    </article>
    
  )
}
export default Shadow;