import React from 'react';
import './attribution.scss';
import LogosIcons from './../../../other/logos-icons';

export default class Attribution extends React.Component {
  render() {
    return (
      <div className="attribution-page background">
        <div className="wrapper">
          <h1>Attribution</h1>
          <div className="attribution-container">
            <div className="attribution">
              <img src={LogosIcons.valuePropositionImage} alt="value proposition"></img>
              <p>value proposition by Chanut is Industries from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.competitiveAnalysisImage} alt="competitive analysis"></img>
              <p>competitive analysis by priyanka from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.personasImage} alt="persona"></img>
              <p>persona by Yu luck from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.userJourneysImage} alt="customer journey"></img>
              <p>customer journey map by Yu luck from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.userResearchImage} alt="user research"></img>
              <p>user research by Creative Stall from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.userInterviewsImage} alt="co-creation"></img>
              <p>co-creation by Esther Se.Kim from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.surveysImage} alt="survey"></img>
              <p>Survey by tezar tantular from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.quantitativeAndQualitativeAnalysisImage} alt="analysis"></img>
              <p>analysis by Eucalyp from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.informationArchitectureImage} alt="information architecture"></img>
              <p>information architecture by SBTS from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.wireframesImage} alt="wireframe"></img>
              <p>Wireframe by Justin Blake from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.prototypesImage} alt="prototype"></img>
              <p>prototype by DailyPM from the Noun Project</p>
            </div>
            <div>
              <img src={LogosIcons.designSystemsImage} alt="graphic"></img>
              <p>graphic by priyanka from the Noun Project</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
