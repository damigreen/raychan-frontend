import React, { Component } from 'react';
import {
  Row,
  Col,
  Typography
} from 'antd'
import image from '../../../images/Image.png'
import '../Diseases.scss'
// import './Treatment.scss'

const { Title, Paragraph } = Typography

class AtrialSeptalDefect extends Component {
  render() {

    
    return (
      <div id="ailments">
        <Title className="title-block">Atrial Septal Defect</Title>
        <Row id="disease-row">
            <Col span={8} className="image-block">
              <img className="image-product" src={image} alt="Sickle cell image" />
            </Col>
            
            <Col span={14} id="column-content">
              <Title level={3}>Atrial Septal Defect</Title>
              <Paragraph className="column-paragraph">
                Sickle Cell Anemia over the years has been perceived as one of the most threatening disorder to man-kind, some homes has been broken and couples separated, early death and delayed marriage due to this disorder.kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
              </Paragraph>
            </Col>
          </Row>

      </div>

    );
  }
}

export default AtrialSeptalDefect;
