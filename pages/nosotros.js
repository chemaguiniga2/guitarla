import Image from 'next/image'
import React from 'react'
import Layour from '../components/Layout'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
      <Layour
        pagina="Nosotros"
      >
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.contenido}>
                <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tellus interdum, interdum ipsum ac, rhoncus odio. Sed congue fermentum quam vitae auctor. Donec vel sodales turpis. Proin maximus, ligula quis molestie tincidunt, risus enim elementum velit, et maximus mi nisi vitae ex. Nunc euismod efficitur aliquet. Cras ipsum lacus, lobortis quis viverra nec, elementum accumsan lacus. In felis lectus, semper a varius vel, aliquam eget tortor. Donec quis rutrum diam, et pretium velit. Nam pellentesque ligula vitae euismod euismod. Donec interdum efficitur auctor. Mauris eget metus justo. Curabitur at tellus at orci rhoncus eleifend ut in ex. Morbi sollicitudin placerat leo.

Nullam ut volutpat leo, eu tempus justo. Aliquam egestas condimentum lectus vel malesuada. Mauris eleifend nibh ut velit tempor vestibulum. Maecenas sodales scelerisque mollis. Nulla facilisi. Suspendisse condimentum odio ac lectus maximus semper. Integer non mi in nunc ornare porta sit amet a urna.</p>
                </div>
            </div>
        </main>
      </Layour>
  )
}

export default Nosotros