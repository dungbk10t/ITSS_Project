import React from 'react'
import {Row, Col} from 'react-bootstrap';

const User = () => {
  return (
    <Row style={{marginTop:'50px'}}>
      
      <Col xs={5} style={{textAlign:'center'}}>
        <img src="https://znews-photo.zadn.vn/w660/Uploaded/bpmoqwq1/2014_10_16/con_meo.jpg" alt="" style={{width:'300px'}}/>
      </Col>
      <Col xs={7} style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <Row>
          <Col xs={3}>
            <b>Username</b>
          </Col>
          <Col>
            Dung
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <b>Email</b>
          </Col>
          <Col>
            dungbk10t@gmai.com
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <b>Point</b>
          </Col>
          <Col>
            1500
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <b>Class</b>
          </Col>
          <Col>
            1
          </Col>
        </Row>
      </Col>
    </Row>    
  )
}
export default User;