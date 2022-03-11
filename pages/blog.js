
import Layour from '../components/Layout'
import ListadoBlog from '../components/ListadoBlog';



const Blog = ({ entradas }) => {


  return (
      <Layour
        pagina="Blog"
      >
        <main className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
          
        </main>
      </Layour>
  )
}

export async function getStaticProps() {

  const url = `${process.env.API_URL}/blogs`
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
 

  return {
    props: {
      entradas
    }
  }
}

export default Blog