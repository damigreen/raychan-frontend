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
              Card content
              <Button>
                <Link to="/asthma">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

        </Row>

        <Row className="flex-column" gutter={30}>
          <Col span={8}>
            <Card className="card-style" title="Atrial Septal Defect" bordered={false}>
              Perkinsons disease over the years has been perc
              <Button>
                <Link to="/atrial-septal-defect">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card className="card-style" title="Parkinson's Disease" bordered={false}>
              Card content
              <Button>
                <Link to="/parkinsons-disease">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

        </Row>

        <Row className="flex-column">
          <Col>
            <Button className="btn">
              <Link to="/Ailments">AILMENTS AND REMEDIES</Link>
            </Button>
          </Col>

        </Row>
    </div>
  );
}

export default Treatments;
