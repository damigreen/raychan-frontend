import React, { Component } from 'react';
import SickleCell from '../diseases and conditions/sickle-cell/SickleCell'
import {
  Row,
  Col,
  Typography,
  Button,
  Card,
  Space,
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
        <Title className="title-block">Our Treatments</Title>
        <Row justify="center" className="flex-column">
          <Col justify="center" span={8} xs={16} sm={18} md={14} lg={11} xl={8}>
            <Card
              className="card-style sc"
              hoverable
              style={{ width: 350 }}
              cover={<img alt="sickle cell red blood cell image" src={sickleCell} />}
            >
              <h2 className="disease-heading">Sickle Cell Anemia</h2>
              Sickle Cell Anemia has been perceived as one of the most threatening disorder to man-kind...              
            </Card>
          </Col>
          <Col span={8} xs={20} sm={18} md={14} lg={11} xl={8} >
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
          <Col span={8} xs={20} sm={18} md={14} lg={11} xl={8}>

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
          <Col span={8} xs={20} sm={18} md={14} lg={11} xl={8}>

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
          <Col span={8} xs={20} sm={18} md={14} lg={11} xl={8} >

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
          <Col span={8} xs={20} sm={18} md={14} lg={11} xl={8} >

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
