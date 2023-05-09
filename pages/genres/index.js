import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'

function tabela() {
    const [anim, setanim] = useState([]);
  
    useEffect(() => {
      axios.get('https://api.jikan.moe/v4/anime')
        .then(response => {
          setanim(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  

const tabela = (props) => {
  return (
    <Pagina>
         <Table striped bordered hover>
      <thead>
        <tr>
        <td>titulo</td>
          <td>duração</td>
          <td>ano</td>
        </tr>
      </thead>
      <tbody>
      {anim.map(item => (
          <tr key={anim.id}>
            <td>{anim.title}</td>
            <td>{anim.duration}</td>
            <td>{anim.year}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Pagina>
  )
}
}
export default tabela

