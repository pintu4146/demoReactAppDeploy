import '../styles/expenseItems.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function ExpenseItem(props) {


  return (
    <>
      {
        props.ex.map((data) => (
          <Container className='expense-item'>

            <Row className='row' >
              <Col xs='auto' md={4} >
                <div>{data.date.toLocaleString('en-US', { month: 'long' })}</div>
                <div>{data.date.getDay()}</div>
                <div>{data.date.getFullYear()}</div>
              </Col>
              <Col xs='auto' md={4}>{data.title}</Col>
              <Col xs={4} md={2}></Col>
              <Col xs={1} className="expense">{data.amount}</Col>
            </Row>
          </Container>
        ))}




    </>)

}
export default ExpenseItem