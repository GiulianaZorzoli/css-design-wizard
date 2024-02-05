import React from 'react'
import { Link } from 'react-router-dom';

const palettes = [
  {
    id : 1,
    colors : ['#4be811','#b6e811','#11e888','#11e5e8']
  },
  {
    id : 2,
    colors : ['#e811e1','#b6e811','#11e888','#11e5e8']
  },
  {
    id : 3,
    colors : ['#4be811','#b6e811','#11e888','#11e5e8']
  },
  {
    id : 4,
    colors : ['#4be811','#b6e811','#11e888','#11e5e8']
  },
  {
    id : 5,
    colors : ['#4be811','#b6e811','#11e888','#11e5e8']
  },
  {
    id : 6,
    colors : ['#4be811','#b6e811','#11e888','#11e5e8']
  },
  {
    id : 7,
    colors : ['#4be811','#b6e811','#11e888','#11e5e8']
  },
  {
    id : 8,
    colors : ['#4be811','#b6e811','#11e888','#11e5e8']
  }

]

export const Palettes = () => {
  return (
    <section className='palettes'>
      <div className='palettesContainer'>
      { palettes.map(palette =><div className='paletteContainer' key={palette.id}> <div className='palette' >
            <div  style={{backgroundColor:palette.colors[0]}}></div>
            <div style={{backgroundColor:palette.colors[1]}}></div>
            <div style={{backgroundColor:palette.colors[2]}}></div>
            <div style={{backgroundColor:palette.colors[3]}}></div>
            
      </div>
      <Link to={'/palette'} state={{color : palette.colors}}><button>TRY IT</button></Link>
      </div>)}
      </div>

    </section>
  )
}
export default Palettes;