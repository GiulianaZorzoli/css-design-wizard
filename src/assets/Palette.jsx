import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

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
                <div style={{backgroundColor:c1}}></div><span>{c1}</span>
                <div style={{backgroundColor:c2}}></div><span>{c2}</span>
                <div style={{backgroundColor:c3}}></div><span>{c3}</span>
                <div style={{backgroundColor:c4}}></div><span>{c4}</span>
            </div>
        </section>
        <section className='paletteDemo'>
            <div>
            </div>
        </section>
    </article>
  )
}
export default Palette;