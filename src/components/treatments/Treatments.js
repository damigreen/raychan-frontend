import React, { Component } from 'react';
import SickleCell from '../diseases and conditions/sickle-cell/SickleCell'
import {
  Row,
  Col,
  Typography,
  Button,
  Card,
} from 'antd'
import { Link, Switch, Route, useLocation} from 'react-router-dom'
// import sickleCell from '../../images/sicklecell.png'
import image from '../../images/Image.png'
import './Treatment.scss'

const { Title, Paragraph } = Typography

function Treatments() {
  
  const { pathname, hash } = useLocation()
  console.log(pathname, hash)

  
  return (
    <div id="treatments">
      {/* <Title className="title-block">Diseases and Ailments We Treat</Title> */}
      <Title className="title-block">Treatments</Title>
        <Row className="flex-column" gutter={30}>
          <Col span={8}>
            <Card className="card-style" title="Sickle Cell Anemia" bordered={false}>
              Sickle Cell Anemia over the years has been perceived as one of the most threatening disorder to man-kind, some homes has been broken and couples separated, early death and delayed marriage due to this disorder.
              <Button>
                <Link to="/sickle-cell">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card className="card-style" title="Asthma" bordered={false}>
            Asthma is a disease affecting the airways that carry air to and from your lungs. People who suffer from this chronic condition (long-lasting or recurrent) are said to be asthmatic.

            Asthma can usually be managed with rescue inhalers to treat symptoms and controller inhalers that prevent symptoms

              <Button>
                <Link to="/asthma">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

        </Row>

        <Row className="flex-column" gutter={30}>
          <Col span={8}>
            <Card className="card-style" title="Atrial Septal Defect" bordered={false}>
            An atrial septal defect is a hole in the wall (septum) between the left and right atria. If there is a large hole, oxygen-rich blood from the left atrium flows back into the right atrium and gets pumped back to the lungs again. This causes more work for the heart
              <Button>
                <Link to="/atrial-septal-defect">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card className="card-style" title="Parkinson's Disease" bordered={false}>
            Parkinson’s disease is a progressive disorder of the nervous system that affects your movement. It develops gradually, sometimes starting with a barely noticeable tremor in just one hand. But while a tremor may be the most well-known sign of Parkinson’s disease, the disorder also commonly causes stiffness or slowing of movement.
              <Button>
                <Link to="/parkinsons-disease">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

        </Row>

        <Row className="flex-column">

        </Row>
    </div>
  );
}

export default Treatments;
