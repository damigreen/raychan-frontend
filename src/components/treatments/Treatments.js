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
import './Treatment.scss'
import sickleCell from '../../images/treatments/sickleCell/sickleCell1.jpg'
import asthma from '../../images/treatments/asthma/asthma.jpg'
import atrialSeptal from '../../images/treatments/artrialSeptalDefect/asd.jpg'
import parkinsons from '../../images/treatments/parkinsonsDisease/parkinsons.jpg'
import lowSpermCount from '../../images/treatments/lowSpermCount/lowSpermCount.jpg'
import diabetics from '../../images/treatments/diabetics/diabetics.jpg'

const { Title, Paragraph } = Typography

function Treatments() {
  /* 
  TODO
  * Resize treatments images
  */
  
  const { pathname, hash } = useLocation()
  console.log(pathname, hash)

  
  return (
    <div id="treatments">
      {/* <Title className="title-block">Our Treatments</Title>
        <Row className="flex-column" gutter={30}>
          <Col span={8}>
            <Card type="inner" className="card-style" title="Sickle Cell Anemia" >
              Sickle Cell Anemia over the years has been perceived as one of the most threatening disorder to man-kind, some homes has been broken and couples separated, early death and delayed marriage due to this disorder.
              <br />
              <br />
              <br />
              <br />
              <Button>
                <Link to="/sickle-cell">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card type="inner" className="card-style" title="Asthma" bordered={false}>
            Asthma is a disease affecting the airways that carry air to and from your lungs. People who suffer from this chronic condition (long-lasting or recurrent) are said to be asthmatic.

            Asthma can usually be managed with rescue inhalers to treat symptoms and controller inhalers that prevent symptoms
              <br />
              <br />
              <br />
              <br />
              <Button>
                <Link to="/asthma">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

        </Row>

        <Row className="flex-column" gutter={30}>
          <Col span={8}>
            <Card type="inner" className="card-style" title="Atrial Septal Defect" bordered={false}>
            An atrial septal defect is a hole in the wall (septum) between the left and right atria. If there is a large hole, oxygen-rich blood from the left atrium flows back into the right atrium and gets pumped back to the lungs again. This causes more work for the heart
              <br />
              <br />
              <br />
              <br />
              <Button>
                <Link to="/atrial-septal-defect">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card type="inner" className="card-style" title="Parkinson's Disease" bordered={false}>
            Parkinson’s disease is a progressive disorder of the nervous system that affects your movement. It develops gradually, sometimes starting with a barely noticeable tremor in just one hand. But while a tremor may be the most well-known sign of Parkinson’s disease, the disorder also commonly causes stiffness or slowing of movement.
              <br />
              <br />
              <br />
              <br />
              <Button>
                <Link to="/parkinsons-disease">LEARN MORE</Link>
              </Button>
            </Card>
          </Col>

        </Row>

        <Row className="flex-column">

        </Row> */}

        <Title className="title-block">Our Treatments</Title>
        <Row className="flex-column">
          <Col span={8}>
            <Card
              className="card-style"
              hoverable
              style={{ width: 350 }}
              cover={<img alt="sickle cell red blood cell image" src={sickleCell} />}
            >
              <h2 className="disease-heading">Sickle Cell Anemia</h2>
              Sickle Cell Anemia has been perceived as one of the most threatening disorder to man-kind...              
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className="card-style"
              hoverable
              style={{ width: 350 }}
              cover={<img alt="sickle cell red blood cell image" src={asthma} />}
            >
              <h2 className="disease-heading">Asthma</h2>
              Asthma is a disease affecting the airways that carry air to and from your lungs...
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className="card-style"
              hoverable
              style={{ width: 350 }}
              cover={<img alt="sickle cell red blood cell image" src={atrialSeptal} />}
            >
              <h2 className="disease-heading">Atrial Septal Defect</h2>
              An atrial septal defect is a hole in the wall (septum) between the left and right atria. If there is a large hole, oxygen-rich...
            </Card>
          </Col>
        </Row>

        <Row className="flex-column">
          <Col span={8}>
            <Card
              className="card-style"
              hoverable
              style={{ width: 350 }}
              cover={<img alt="sickle cell red blood cell image" src={parkinsons} />}
            >
              <h2 className="disease-heading">Parkinson Diseases</h2>
              Parkinson’s disease is a progressive disorder of the nervous system that affects your movement. It develops gradually...
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className="card-style"
              hoverable
              style={{ width: 350 }}
              cover={<img alt="sickle cell red blood cell image" src={lowSpermCount} />}
            >
              <h2 className="disease-heading">Low Sperm Count</h2>
              Low sperm count means that the fluid (semen) you ejaculate during an orgasm contains fewer sperm than normal...
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className="card-style"
              hoverable
              style={{ width: 350 }}
              cover={<img alt="sickle cell red blood cell image" src={diabetics} />}
            >
              <h2 className="disease-heading">Diabetics</h2>
              Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high...
            </Card>
          </Col>
        </Row>

    </div>
  );
}

export default Treatments;
