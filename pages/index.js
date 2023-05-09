import React from 'react'
import { Button, Card, Col, Container, NavItem, Row, Table } from 'react-bootstrap'
import Pagina from '../components/Pagina'
import apiAnimes from '../services/apiAnimes'

const index = (props) => {
  return (
    <Pagina titulo='anime'>
     
        <Row>

          <Col md={3}>
            <Card border='danger' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://cdn.myanimelist.net/images/anime/4/19644.jpg" />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="danger">voltar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '30rem', left: '5rem'}}>
              <Card.Body>
                <Card.Title>Cowboy Bebop</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                
                  <p><strong>epsiodio: </strong>{}</p>
                  <p><strong>status: </strong>{ }</p>
                  <p><strong>duração: </strong>{ } min</p>
                  <p><strong>score: </strong>{ }</p>
                
              </Card.Body>
            </Card>
          </Col>

        </Row>



      
    </Pagina>
  )
}

export default index

export async function getServerSideProps(context) {


  const resultado = await apiAnimes.get('/anime')
  const anime = resultado.data.data

  return {
    props: { anime },
  }
}




