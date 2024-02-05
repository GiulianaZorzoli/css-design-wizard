import React from 'react'
import HomeSection from './HomeSection';

const sections = [
  {
    id : 1,
    title : 'SOMBRAS',
    img : '/images/example-shadows.png',
    description : 'Crea tus propias sombras, configurando los colores, tamaños, opacidad, propagación y mucho más. Prueba en vivo como se ven y usalas directamente en tu código.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse neque nisl, commodo et erat ut, eleifend posuere sapien. Fusce consectetur, erat non mattis laoreet, ex urna tincidunt est, vel pellentesque purus purus a dolor. Proin sed sem nunc. Sed orci ligula, tempus in feugiat in, commodo at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse neque nisl, commodo et erat ut, eleifend posuere sapien. Fusce consectetur, erat non mattis laoreet, ex urna tincidunt est, vel pellentesque purus purus a dolor. Proin sed sem nunc. Sed orci ligula, tempus in feugiat in, commodo at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link : '/shadows',
    color : '#1d3066ad'
  },
  {
    id : 2,
    title : 'GRADIENTES',
    img : '/images/example-gradients.png',
    description : 'Crea tus propios gradientes, configurando los colores, tamaños, ángulos y mucho más. Prueba en vivo como se ven y usalas directamente en tu código.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse neque nisl, commodo et erat ut, eleifend posuere sapien. Fusce consectetur, erat non mattis laoreet, ex urna tincidunt est, vel pellentesque purus purus a dolor. Proin sed sem nunc. Sed orci ligula, tempus in feugiat in, commodo at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse neque nisl, commodo et erat ut, eleifend posuere sapien. Fusce consectetur, erat non mattis laoreet, ex urna tincidunt est, vel pellentesque purus purus a dolor. Proin sed sem nunc. Sed orci ligula, tempus in feugiat in, commodo at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link : '/gradients',
    color : '#4abac7b6'
  }

]

export const Home = () => {
  return (
    <section className='home'>
      <div className='introduction'>
        <img src="./images/logo.png" alt="logo-css-design-wizard" />
        <p>CSS Design Wizard es una aplicación que te ayudara con el CSS, dándole vida a tu página. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse neque nisl, commodo et erat ut, eleifend posuere sapien. Fusce consectetur, erat non mattis laoreet, ex urna tincidunt est, vel pellentesque purus purus a dolor. Proin sed sem nunc. Sed orci ligula, tempus in feugiat in, commodo at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac purus in nisi pellentesque rutrum. In vel fringilla tellus, id vestibulum massa. In hac habitasse platea dictumst. Etiam a vulputate velit, condimentum mattis elit. Praesent vestibulum pulvinar dui, eget dapibus nisi dapibus et. Praesent malesuada risus nec velit gravida cursus.us purus a dolor. Proin sed sem nunc. Sed orci ligula, tempus in feugiat in, commodo at augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac purus in nisi pellentesque rutrum. In vel fringilla tellus.</p>
      </div>
      {
        sections.map(section => <HomeSection key={section.id} title={section.title} image={section.img} description={section.description} link={section.link} color ={section.color}></HomeSection> )
      }
      
    </section>
  )
}
export default Home;