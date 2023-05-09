import React from 'react'
import Pagina from '../../components/Pagina'
import apiAnimes from '../../services/apiAnimes'

const Generos = (props) => {
  return (
    <Pagina titulo='genres'>
 <ul>
         {props.animes.map(item => (
  
            <p>{item.genres}</p>
            ))}
</ul>
            
    </Pagina>
  )
}

export default Generos

export async function getServerSideProps(context) {

    const res = await apiAnimes.get('/anime/')
    const animes = res.data.data
  
    return {
        props: { animes },
    }
  }