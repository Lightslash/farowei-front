import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './containerCriteres.css';

class ContainerCriteres extends Component {
    constructor() {
        super()
        this.state = {
            type: '',
            locality: '',
            gender: '',
            age: 0,
            yearTo: 0,
            yearFrom: 0,
            interpolation: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    /*componentDidMount() {
        const columnsType = ["column1", "column2"];
        require("csv-to-array")({
            file: "https://drive.google.com/open?id=1evW7JhGW5AoeIKyy6hEDdObbuq5pr3s1",
            columnsType: columnsType
        }, function (err, array) {
            console.log(err || array);
        });
    }*/

    handleClick() {
        //console.log(columnsType);
    }

    render() {
        return(
            <div className='w-25 p-3 containerCriteres'>
                <Form>
                    <FormGroup>
                        <h5>Cancer typology</h5>
                        <Label for="selectType" className='w-100 text-left'>Classified by CIM10</Label>
                        <Input type="select" name="selectType" id="selectType">
                            <option>Lip</option>
                            <option>Oral cavity and pharynx</option>
                            <option>All sites</option>
                            <option>All sites but skin</option>
                            <option>Base of tongue</option>
                            <option>Tongue</option>
                            <option>Mouth</option>
                            <option>Parotid gland</option>
                            <option>Salvary glands</option>
                            <option>Tonsil</option>
                            <option>Oropharynx</option>
                            <option>Nasopharynx</option>
                            <option>Pyriform sinus</option>
                            <option>Hypopharynx</option>
                            <option>Pharynx unspecified</option>
                            <option>Oesophagus</option>
                            <option>Digestive organs</option>
                            <option>Stomach</option>
                            <option>Small intestine</option>
                            <option>Colon</option>
                            <option>Rectosigmoid junction</option>
                            <option>Rectum</option>
                            <option>Anus</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <h5>Space &#38; Time</h5>
                        <Label for="selectLocality" className='w-100 text-left'>Locality</Label>
                        <Input type="select" name="selectLocality" id="selectLocality">
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Brazil</option>
                            <option>Canada</option>
                            <option>China</option>
                            <option>Colombia</option>
                            <option>Costa Rica</option>
                            <option>Croatia</option>
                            <option>Czech Republic</option>
                            <option>Denmark</option>
                            <option>Ecuador</option>
                            <option>Estonia</option>
                            <option>Finland</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Iceland</option>
                            <option>India</option>
                            <option>Israel</option>
                            <option>Italy</option>
                            <option>Japan</option>
                            <option>Lativa</option>
                            <option>Lithuania</option>
                            <option>Malta</option>
                            <option>The Netherlands</option>
                            <option>New Zealand</option>
                            <option>Norway</option>
                            <option>Philippines</option>
                            <option>Poland</option>
                            <option>Russia</option>
                            <option>Singapore</option>
                            <option>Slovak Republic</option>
                            <option>Slovenia</option>
                            <option>Spain</option>
                            <option>Sweden</option>
                            <option>Switzerland</option>
                            <option>Thailand</option>
                            <option>Uganda</option>
                            <option>UK</option>
                            <option>USA</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <h5>Population</h5>
                        <Label for="selectGender" className='w-100 text-left'>Gender</Label>
                        <Input type="select" name="selectGender" id="selectGender">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Male + female</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="selectAge" className='w-100 text-left'>Age range</Label>
                        <Input type="select" name="selectAge" id="selectAge">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Label for="selectYear" className='w-100 text-left'>Year</Label>
                        </Col>
                        <Col sm={6}>
                            <Input placeholder="To" type="number" step="1958" />
                        </Col>
                        <Col sm={6}>
                            <Input placeholder="From" type="number" step="2007" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="selectInterpolation" className='w-100 text-left'>Interpolation Order</Label>
                        <Input type="select" name="selectInterpolation" id="selectInterpolation">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={this.handleClick}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default ContainerCriteres;