import Layour from '../components/Layout'
import Listado from '../components/Listado'


const Tienda = ({guitarras}) => {
  return (
      <Layour
        pagina="Tienda Virtual"
      >
        <main className='contenedor'>

          <h1 className='heading'>Nuestra Coleccion</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
      </Layour>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}


export default Tienda