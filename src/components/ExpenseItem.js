import '../styles/expenseItems.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function ExpenseItem(props)
{

 
  return (<>
    <Container className='expense-item'>
    <Row>
      <Col xs='auto' md={4} >
          <div>{props.date.toLocaleString('en-US', { month: 'long' })}</div>
        <div>{props.date.getDay()}</div>
        <div>{props.date.getFullYear()}</div>
        </Col>
      <Col xs='auto' md={4}>{props.title}</Col>
      <Col xs={4} md={2}></Col>
      <Col  xs='auto' className="expense">{props.am}</Col>
    </Row>
      <Row>
        <Col xs='auto' md={4} >
          <div>{props.date.toLocaleString('en-US', { month: 'long' })}</div>
          <div>{props.date.getDay()}</div>
          <div>{props.date.getFullYear()}</div>
        </Col>
        <Col xs='auto' md={4}>{props.title}</Col>
        <Col xs={4} md={2}></Col>
        <Col xs='auto' className="expense">{props.am}</Col>
      </Row>
      <Row>
        <Col xs='auto' md={4} >
          <div>{props.date.toLocaleString('en-US', { month: 'long' })}</div>
          <div>{props.date.getDay()}</div>
          <div>{props.date.getFullYear()}</div>
        </Col>
        <Col xs='auto' md={4}>{props.title}</Col>
        <Col xs={4} md={2}></Col>
        <Col xs='auto' className="expense">{props.am}</Col>
      </Row>
      <Row>
        <Col xs='auto' md={4} >
          <div>{props.date.toLocaleString('en-US', { month: 'long' })}</div>
          <div>{props.date.getDay()}</div>
          <div>{props.date.getFullYear()}</div>
        </Col>
        <Col xs='auto' md={4}>{props.title}</Col>
        <Col xs={4} md={2}></Col>
        <Col xs='auto' className="expense">{props.am}</Col>
      </Row>
      
    
  </Container>
  </>)
  // <div className="row">
  //     <div className="col">2 OCT 2021</div>
  //     <div className="col expense-item__description">
  //         <h2>Car Insurance</h2>
  //     </div>
  //     <div className="col expense-item__price">$200.67</div>
  // </div>
}
 export default ExpenseItem