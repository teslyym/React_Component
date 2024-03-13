import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Image from './Image';

function App() {
  let name= "David"
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description />
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
  
    <h1>Hello {name?name:"there"}</h1>
    {
      name && <Image/>
    }
    </>
  )
}

export default App
