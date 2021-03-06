import React from 'react';
import {
  Row,
  Col,
  Typography,
  Card,
  Anchor
} from 'antd'
import { useLocation, Link } from 'react-router-dom'
import './Treatment.scss'
import sickleCell from '../../images/treatments/sickleCell/sickleCell1.jpg'
import asthma from '../../images/treatments/asthma/asthma.jpg'
import atrialSeptal from '../../images/treatments/artrialSeptalDefect/asd.jpg'
import parkinsons from '../../images/treatments/parkinsonsDisease/parkinsons.jpg'
import lowSpermCount from '../../images/treatments/lowSpermCount/lowSpermCount.jpg'
import diabetics from '../../images/treatments/diabetics/diabetics.jpg';
import ulcer from '../../images/treatments/ulcer/ulcer.jpeg';

const { Title } = Typography;

function Treatments() {
  
  const { pathname, hash } = useLocation();
  console.log(pathname, hash);

  return (
    <div id="treatments">
        <Title className="title-block">Our Treatments</Title>
        <Row style={{width: "auto"}} justify="center" className="flex-column">
          <Col justify="center" span={8} xs={8} sm={10} lg={8} xl={8}>
            <Link to="/sickle-cell">
              <Card
                className="card-style sc"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="sickle cell red blood cell image" src={sickleCell} className="treatment-images" />}
              >
                <h2 className="disease-heading">Sickle Cell Anemia</h2>
                Sickle Cell Anemia has been perceived as one of the most threatening disorder to man-kind...              
              </Card>
            </Link>
          </Col>
          <Col span={8} xs={8} sm={10} md={6} lg={8} xl={8} >
            <Link to="/asthma">
              <Card
                className="card-style asthma"
                hoverable
                href="#asthma"
                style={{ width: 300 }}
                cover={<img alt="asthma disease image" src={asthma} className="treatment-images" />}
              >
                <h2 className="disease-heading">Asthma</h2>
                Asthma is a disease affecting the airways that carry air to and from your lungs...
              </Card>
            </Link>
          </Col>
          <Col span={8} xs={8} sm={10} md={6} lg={8} xl={8}>
            <Link to="atrial-septal-defect">
              <Card
                className="card-style asd"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="atrial septal defect image" src={atrialSeptal} className="treatment-images" />}
              >
                <h2 className="disease-heading">Atrial Septal Defect</h2>
                An atrial septal defect is a hole in the wall (septum) between the left and right atria. If there is a large hole, oxygen-rich...
              </Card>
            </Link>
          </Col>
        </Row>

        <Row style={{width: "auto"}} className="flex-column">
          <Col span={8} xs={8} sm={10} md={6} lg={8} xl={8}>
            <Link to="/parkinsons-disease">
              <Card
                className="card-style parkinsons"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="parkinsons disease image" src={parkinsons} className="treatment-images" />}
              >
                <h2 className="disease-heading">Parkinson Diseases</h2>
                Parkinson’s disease is a progressive disorder of the nervous system that affects your movement. It develops gradually...
              </Card>
            </Link>
          </Col>
          <Col span={8} xs={8} sm={10} md={6} lg={8} xl={8} >
            <Link to="/low-sperm-count">
              <Card
                className="card-style lsc"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="low sperm count disease image" src={lowSpermCount} className="treatment-images" />}
              >
                <h2 className="disease-heading">Low Sperm Count</h2>
                Low sperm count means that the fluid (semen) you ejaculate during an orgasm contains fewer sperm than normal...
              </Card>
            </Link>
          </Col>
          <Col span={8} xs={8} sm={10} md={6} lg={8} xl={8} >
            <Link to="/diabetics">
              <Card
                className="card-style diabetics"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="diabetics disease image" src={diabetics} className="treatment-images" />}
              >
                <h2 className="disease-heading">Diabetics</h2>
                Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high...
              </Card>
            </Link>
          </Col>
          <Col span={8} xs={8} sm={10} md={6} lg={8} xl={8} >
            <Link to="/ulcer">
              <Card
                className="card-style ulcer"
                hoverable
                style={{ width: 300 }}
                cover={<img alt="ulcer disease image" src={ulcer} className="treatment-images" />}
              >
                <h2 className="disease-heading">Ulcer</h2>
                ulcers are open sores that develop on the inside lining of your stomach and the upper portion of your small intestine...
              </Card>
            </Link>
          </Col>
        </Row>
    </div>
  );
}

export default Treatments;
