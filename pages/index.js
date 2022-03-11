import Curso from '../components/Curso'
import Layour from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog'



export default function Home({guitarras, curso, entradas}) {

  return (
    <div>
      <Layour
        pagina="Inicio"
        guitarra={guitarras[3]}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>

        <Curso
          curso={curso}
        />

        <section className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
        </section>
      </Layour>

    </div>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=2`

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entradas
    }
  }
}