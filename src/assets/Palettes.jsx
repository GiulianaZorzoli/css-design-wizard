import React from 'react'
import { Link } from 'react-router-dom';

const palettes = [
  {
    id : 1,
    colors : ['#324047','#EFEFEF','#00CECE','#00A8A8']
  },
  {
    id : 2,
    colors : ['#0E0741','#FFFFFF','#8236FD','#ABABB9']
  },
  {
    id : 3,
    colors : ['#212832','#F2F2F2','#F96C00','#393D46']
  },
  {
    id : 4,
    colors : ['#32293F','#F0F7F4','#705D56','#99E1D9']
  },
  {
    id : 5,
    colors : ['#132E35','#AFB3B7','#2D4A53','#0D1F23']
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