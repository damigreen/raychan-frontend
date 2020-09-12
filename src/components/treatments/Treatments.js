import React, { Component } from 'react';
import {
  Row,
  Col,
  Typography,
  Button,
} from 'antd'
import { Link, Route } from 'react-router-dom'
// import sickleCell from '../../images/sicklecell.png'
import image from '../../images/Image.png'
import './Treatment.scss'

const { Title, Paragraph } = Typography

class Treatments extends Component {
  render() {

    
    return (
      <div id="treatment">
        <Title className="title-block">Ailments and Treatments</Title>
        <Row id="treatment-row">
            
            <Col span={12} id="column-content">
              <Title level={3}>Sickle Cell Anemia</Title>
              <Paragraph className="column-paragraph">
                Sickle Cell Anemia over the years has been perceived as one of the most threatening disorder to man-kind, some homes has been broken and couples separated, early death and delayed marriage due to this disorder.kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
              </Paragraph>
              <Button>
                <Link to="/Ailments">AILMENTS AND REMEDIES</Link>
              </Button>
            </Col>

            <Col span={12} className="image-block">
              <img className="image-product" src={image} alt="Sickle cell image" />
            </Col>
          </Row>
      </div>

    );
  }
}

export default Treatments;
