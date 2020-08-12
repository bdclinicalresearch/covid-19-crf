import React, { Component } from 'react'
import { Button, DatePicker, message, Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import { DownOutlined } from '@ant-design/icons';


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
      riskFactorOfCoMorbidites: 'No',

       
    }
  }
  
  
  render() {
    const onClick = ({ key }) => {
      message.info(`Click on item ${key}`);
    };
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">Male</Menu.Item>
        <Menu.Item key="2">Female</Menu.Item>
      </Menu>
    );
    return (
      <form>
         <label>Data retrieved from patient record</label>
         <br/>
         <label style={{align: 'center'}}>COVID-19 CRF</label>
         <br/>
         <label>Case No.: </label><input/>
         <label>Date of Entry: </label><DatePicker />
         <br/>
         <label>Patient code number/Hospital registration number: </label><input/><label>Ward no</label><input/><label>Bed no: </label><input/>
         <br/>
         <label>Name: </label><input/>
         <br/>
         <label>Age (years or month): </label><input/><label>Years </label><label style={{align: 'end'}}> Sex:</label>
         <Dropdown overlay={menu} placement="bottomLeft"><Button>Male</Button></Dropdown><br/>
         <label><b>Addess:</b> Division:</label><input/>
    
       </form>
    )
  }
}

export default Form


// function Form(){

    // const onClick = ({ key }) => {
    //     message.info(`Click on item ${key}`);
    //   };
      // const menu = (
      //   <Menu onClick={onClick}>
      //     <Menu.Item key="1">Male</Menu.Item>
      //     <Menu.Item key="2">Female</Menu.Item>
      //   </Menu>
      // );
    
        
//         return(
//             <form>
//         <label>Data retrieved from patient record</label>
//         <br/>
//         <label style={{align: 'center'}}>COVID-19 CRF</label>
//         <br/>
//         <label>Case No.: </label><input/>
//         <label>Date of Entry: </label><DatePicker />
//         <br/>
//         <label>Patient code number/Hospital registration number: </label><input/><label>Ward no</label><input/><label>Bed no: </label><input/>
//         <br/>
//         <label>Name: </label><input/>
//         <br/>
//         <label>Age (years or month): </label><input/><label>Years </label><label style={{align: 'end'}}> Sex:</label>
//         <Dropdown overlay={menu} placement="bottomLeft"><Button>Male</Button></Dropdown><br/>
//         <label><b>Addess:</b> Division:</label><input/>
    
//       </form>
//         )
//     }


// export default Form