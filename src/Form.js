import React, { Component, useState } from 'react'
import Date from './Date'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      caseNo: '',
      dateOfEntry: '',
      patCodHospeRegNum: '',
      wardNo: '',
      bedNo: '',
      name: '',
      dateOfBirth: '',
      age: '',
      sex: 'Male',
      addDivision: '',
      addDistrict: '',
      addUnion: '',
      addWardNo: '',
      addHouseNo: '',
      addRoadNo: '',
      occupation: '',
      contactNo: '',
      o2Percentage: '',
      respiratoryRate: '',
      temp: '',
      heartRate: '',
      bp: '',
      riskFactorOfCoMorbidites: "Yes",
      ckDM: false,
      ckHTN: false,
      ckBronchialAsthema: false,
      chChronicheartDisease: false,
      chCVD: false,
      chCOPD: false,
      chCKD: false,
      chCLD: false,
      chSmoking: false,
      chObesity: false,
      chChemotherapy: false,
      chSurgery: false,
      chHIV: false,
      chTB: false,
      chConnectiveTissueDisease: false,
      chOther: '',
      rtPCRtest: 'Negative',
      dateOfSampleCollection: '',
      dateOfResult: '',
      oxygenTherapyReceivedAmount: '',
      totalOxygenDays: '',
      ckLMWH: 'LMWH',
      steroid: '',
      plasmaTherapyMl: '200 ml',
      plasmaTherapyDose: 'single dose',
      antibiotics: '',
      antiviral: '',
      ckMeropenem: false,
      ckCeftriaxone: false,
      ckMoxfloxacin: false,
      ckFimoxyclav: false,
      ckDoxicycline: false,
      ckAzithromycin: false,
      ckAntibioticsOther: false,
      ckFavipiravir: false,
      ckRemdesisvir: false,
      ckIvermectin: false,
      ckHCQ: false,
      tocilizumab: '',
      tocilizumabTherapyDose: 'single dose',
      dialysis: false,
      mechanical: false,
      hfnc: false,
      o2TherpDuration: '',
      mechVentDuration: '',
      dateOfDischarge: '',
      outcome: 'Recovered',
      totalDaysInHospital: '',
      lastDayAtHospital: ''

    }
    this.onCheckChange = this.onCheckChange.bind(this)
    this.handleRadioChoice = this.handleRadioChoice.bind(this)
  }
  handleCaseNo = (event) => {
    this.setState({
       caseNo: event.target.value 
    })
  }
  
  handleDateOfEntry = (event) => {
    this.setState({
      dateOfEntry: event.format('DD-MM-YYYY')
    },
    ()=>{
      alert(this.state.dateOfEntry)
    }
  )
     
  }
  handleSexChange = (event) => {
    this.setState({
       sex: event.target.value 
    })
}
handlePlasmaMl = (event) => {
  this.setState({
     plasmaTherapyMl: event.target.value 
  })
}
handlePlasmaDose = (event) => {
  this.setState({
     plasmaTherapyDose: event.target.value 
  })
}
handletocilizumabTherapyDose = (event) => {
  this.setState({
     tocilizumabTherapyDose: event.target.value 
  })
}
handleOutcome = (event) => {
  this.setState({
     outcome: event.target.value 
  })
}
onCheckChange(e){
  this.setState({
    [e.target.name]: e.target.checked
  })
}

handleRadioChoice(event){
  console.log(event.target.value)
  this.setState({
    [event.target.name]: event.target.value
  })
}
  
render() {
  
    return (
      <form>
         <label>Data retrieved from patient record</label>
         <br/>
         <label style={{align: 'center'}}>COVID-19 CRF</label>
         <br/>
         <div>
          <label>Case No.: </label>
          <input type='text' 
            value={this.state.caseNo} 
            onChange={this.handleCaseNo}/>
          <label>Date of Entry: </label>
          <Date/>
         </div>
         <label>Patient code number/Hospital registration number: </label><input/><label>Ward no</label><input/><label>Bed no: </label><input/>
         <br/>
         <label>Name: </label><input/>
         <br/>
         <div>
         <label>Date of Birth: </label><input/><label>Age (years or month): </label><input/><label>Years </label>
         
            <label>Sex: </label>
            <select value={this.state.sex} onChange={this.handleSexChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        <div>
         <label><b>Addess:</b> Division:</label><input/><label>District:</label><input/>
         </div>
         <div>
          <label>Union:</label><input/><label>Ward no:</label><input/><label>House no:</label><input/><label>Road no:</label><input/>
         </div>
         <div>
         <label>Occupation:</label><input/><label>Contact No:</label><input/>
         </div>

         <div>
          <label><b>3. Vital sign during admission:</b></label><br/>
          <label>SPO2</label><input/><label>%, Resp rate:</label><input/><label>/min, Temp (axillary): </label><input/><label>°F, Heart rate:</label><input/><label>/min, BP:</label><input/><label>/</label><input/><label>mmHg.</label>

         </div>
         <div>
          <label><b>3. Risk factors of co-morbidities (pl tick) Yes/ No/ not found</b></label><br/>
          <input type="radio" name="riskFactorOfCoMorbidites" 
          checked={this.state.riskFactorOfCoMorbidites === "Yes"} onChange={this.handleRadioChoice} value="Yes"/>Yes
          <input type="radio" name="riskFactorOfCoMorbidites" 
          checked={this.state.riskFactorOfCoMorbidites === "No"} onChange={this.handleRadioChoice} value="No"/>No
          <input type="radio" name="riskFactorOfCoMorbidites" 
          checked={this.state.riskFactorOfCoMorbidites === "Not Found"} onChange={this.handleRadioChoice} value="Not Found"/>Not Found
          {/* <br/>{this.state.riskFactorOfCoMorbidites} */}
        </div>
        <div>
          <input type="checkbox" name="ckDM" 
          checked={this.state.ckDM} onChange={this.onCheckChange}/>DM
          <input type="checkbox" name="ckHTN" 
          checked={this.state.ckHTN} onChange={this.onCheckChange}/>HTN
          <input type="checkbox" name="ckBronchialAsthema" 
          checked={this.state.ckBronchialAsthema} onChange={this.onCheckChange}/>Bronchial Asthema
          <input type="checkbox" name="chChronicheartDisease" 
          checked={this.state.chChronicheartDisease} onChange={this.onCheckChange}/>Chronic Heart Disease
          <input type="checkbox" name="chCVD" 
          checked={this.state.chCVD} onChange={this.onCheckChange}/>CVD
          <input type="checkbox" name="chCOPD" 
          checked={this.state.chCOPD} onChange={this.onCheckChange}/>COPD
          <input type="checkbox" name="chCKD" 
          checked={this.state.chCKD} onChange={this.onCheckChange}/>CKD
          <input type="checkbox" name="chCLD" 
          checked={this.state.chCLD} onChange={this.onCheckChange}/>CLD
          <input type="checkbox" name="chSmoking" 
          checked={this.state.chSmoking} onChange={this.onCheckChange}/>Smoking
          <input type="checkbox" name="chObesity" 
          checked={this.state.chObesity} onChange={this.onCheckChange}/>Obesity
          <input type="checkbox" name="chChemotherapy" 
          checked={this.state.chChemotherapy} onChange={this.onCheckChange}/>Chemotherapy
          <input type="checkbox" name="chSurgery" 
          checked={this.state.chSurgery} onChange={this.onCheckChange}/>Surgery
          <input type="checkbox" name="chHIV" 
          checked={this.state.chHIV} onChange={this.onCheckChange}/>HIV
          <input type="checkbox" name="chTB" 
          checked={this.state.chTB} onChange={this.onCheckChange}/>TB
          <input type="checkbox" name="chConnectiveTissueDisease" 
          checked={this.state.chConnectiveTissueDisease} onChange={this.onCheckChange}/>Connective Tissue Disease
          <input type="checkbox" name="chOther" 
          checked={this.state.chOther} onChange={this.onCheckChange}/><input name='other' value='other'/>
         </div>

         <div>
          <label><b>4. RT_PCR:</b> Positive/Negative.</label><br/>
          <label>Date of sample collection:</label><Date/><label>; Date of result:</label><Date/>
         </div>
         <div>
          <label><b>4. Treatment:</b></label><br/>
          <label>Oxygen therapy recieved amount</label><input/><label>Lin/min</label><br/>
          <label>Total oxygen</label><input/><label>days</label>
         </div> 
         <div>       
         <input type="checkbox" name="ckLMWH" 
          checked={this.state.ckLMWH} onChange={this.onCheckChange}/>LMWH<br/>
          <label>Steroid: 1. Methyl prednisolone </label>
          <input type="radio" name="steroid" 
          checked={this.state.steroid === "<100mg"} onChange={this.handleRadioChoice} value="<100mg"/>&lt;100mg
          <input type="radio" name="steroid" 
          checked={this.state.steroid === "100-250"} onChange={this.handleRadioChoice} value="100-250"/>100-250
          <input type="radio" name="steroid" 
          checked={this.state.steroid === "250-500"} onChange={this.handleRadioChoice} value="250-500"/>250-500
          <input type="radio" name="steroid" 
          checked={this.state.steroid === "500-1000"} onChange={this.handleRadioChoice} value="500-1000"/>500-1000<br/>
          <label>Plasma therapy: </label>
          <select value={this.state.plasmaTherapyMl} onChange={this.handlePlasmaMl}>
                <option value="200 ml">200 ml</option>
                <option value="400 ml">400 ml</option>
            </select>
            <select value={this.state.plasmaTherapyDose} onChange={this.handlePlasmaDose}>
                <option value="single dose">single dose</option>
                <option value="multiple dose">multiple dose</option>
            </select>
          </div>

     {
      // o2TherpDuration: '',
      // mechVentDuration: '',
      // dateOfDischarge: '',
      // outcome: 'Recovered',
      // totalDaysInHospital: '',
      // lastDayAtHospital: ''
     }
          <div>
            <label>Drug:</label><br/>
            <label>Antibiotics:</label><br/>
            <input type="checkbox" name="ckMeropenem" 
          checked={this.state.ckMeropenem} onChange={this.onCheckChange}/>Meropenem
          <input type="checkbox" name="ckCeftriaxone" 
          checked={this.state.ckCeftriaxone} onChange={this.onCheckChange}/>Ceftriaxone
          <input type="checkbox" name="ckMoxfloxacin" 
          checked={this.state.ckMoxfloxacin} onChange={this.onCheckChange}/>Moxfloxacin
          <input type="checkbox" name="ckFimoxyclav" 
          checked={this.state.ckFimoxyclav} onChange={this.onCheckChange}/>Fimoxyclav
          <input type="checkbox" name="ckDoxicycline" 
          checked={this.state.ckDoxicycline} onChange={this.onCheckChange}/>Doxicycline
          <input type="checkbox" name="ckAzithromycin" 
          checked={this.state.ckAzithromycin} onChange={this.onCheckChange}/>Azithromycin
          <input type="checkbox" name="ckAntibioticsOther" 
          checked={this.state.ckAntibioticsOther} onChange={this.onCheckChange}/><input name='other' value='other'/>
          </div>
          <div>
            <label>Antiviral:</label><br/>
            <input type="checkbox" name="ckFavipiravir" 
          checked={this.state.ckFavipiravir} onChange={this.onCheckChange}/>Favipiravir
          <input type="checkbox" name="ckRemdesisvir" 
          checked={this.state.ckRemdesisvir} onChange={this.onCheckChange}/>Remdesisvir
          <input type="checkbox" name="ckIvermectin" 
          checked={this.state.ckIvermectin} onChange={this.onCheckChange}/>Ivermectin
          <input type="checkbox" name="ckHCQ" 
          checked={this.state.ckHCQ} onChange={this.onCheckChange}/>HCQ
          </div>
          <div>
            <label>Tocilizumab</label>
            <input type="checkbox" name="tocilizumab" 
          checked={this.state.tocilizumab} onChange={this.onCheckChange}/>Tocilizumab
          <select value={this.state.tocilizumabTherapyDose} onChange={this.handletocilizumabTherapyDose}>
                <option value="single dose">single dose</option>
                <option value="multiple dose">multiple dose</option>
            </select>
          </div>
          <div>
            <input type="checkbox" name="dialysis" 
            checked={this.state.dialysis} onChange={this.onCheckChange}/>Dialysis
          </div>
          <div>
            <input type="checkbox" name="mechanical" 
            checked={this.state.mechanical} onChange={this.onCheckChange}/>Mechanical
          </div>
          <div>
            <input type="checkbox" name="hfnc" 
            checked={this.state.hfnc} onChange={this.onCheckChange}/>HFNC
          </div>
          <div>
            O2 therapy duration: <input/> hrs/days
          </div>
          <div>
            Mech Vent duration: <input/> hrs/days
          </div>
          <div>
            <label><b>Date of discharge: </b></label><Date/>
          </div>
          <div>
            <label><b>Data retrieved from patient record</b></label>
          </div>
          <div>
            <label><b>13. Outcome: </b></label>
            <select value={this.state.outcome} onChange={this.handleOutcome}>
                <option value="Recovered">Recovered</option>
                <option value="Death">Death</option>
                <option value="DORB">DORB</option>
                <option value="Absconded">Absconded</option>
                <option value="referred">referred</option>
            </select>
          </div>
          <div>
          <label><b>14. Total length of hospital stays in case of recovered: </b></label> <input/>
          </div>
          <div>
          <label><b>15. Last Date of leaving Hospital (To calculate timing of date or length of hospital stays in case of recovered: </b></label> <Date/>
          </div>
          <br/><button type="submit">submit</button><br/><br/>
       </form>
    )
  }
}

export default Form