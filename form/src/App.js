import './App.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";



function App() {
//   fetch('http://localhost:8080/forms/all')
//   .then(response => response.json())
//   .then(data => console.log(data));
//   const dateData = { date: '11/16/2021' };

//   fetch('http://localhost:8080/forms', {
//     method : 'POST', 
//     headers : {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//     return response.da
//   });
  
  return (
    <><><Form>
      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>address</Form.Label>
        <Form.Control type="address" placeholder="Enter Address" />
      </Form.Group>
    </Form>
      <Table striped bordered hover size="sm">
      </Table></>
  
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" /><table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th class="col-md-4">Description:</th>
            <th class="col-md-4">Donor notes for tax records:</th>
            <th class="col-md-2">Boxes</th>
            <th class="col-md-2">Bags</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="name in getdrugnameNewArray">
          <td>
                  <select class="form-control">
                    <option></option>
                    <option>Clothing</option>
                    <option>Household</option>
                    <option>Furniture</option>
                    <option>Collectables/Antiques</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select>
                </td>
            <td><input type="text" placeholder="Brief summary"></input></td>
            <td><input type="text" placeholder="# of boxes"></input></td>
            <td><input type="text" placeholder="# of bags"></input></td>
          </tr>
          <tr ng-repeat="name in getdrugnameNewArray">
          <td>
                  <select class="form-control">
                  <option></option>
                    <option>Clothing</option>
                    <option>Household</option>
                    <option>Furniture</option>
                    <option>Collectables/Antiques</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select></td>
            <td><input type="text" placeholder="Brief summary"></input></td>
            <td><input type="text" placeholder="# of boxes"></input></td>
            <td><input type="text" placeholder="# of bags"></input></td>
            </tr>
            <tr ng-repeat="name in getdrugnameNewArray">
          <td>
                  <select class="form-control">
                  <option></option>
                    <option>Clothing</option>
                    <option>Household</option>
                    <option>Furniture</option>
                    <option>Collectables/Antiques</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select>
                </td>
            <td><input type="text" placeholder="Brief summary"></input></td>
            <td><input type="text" placeholder="# of boxes"></input></td>
            <td><input type="text" placeholder="# of bags"></input></td>
          </tr>
          <tr ng-repeat="name in getdrugnameNewArray">
          <td>
                  <select class="form-control">
                  <option></option>
                    <option>Clothing</option>
                    <option>Household</option>
                    <option>Furniture</option>
                    <option>Collectables/Antiques</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select>
                </td>
            <td><input type="text" placeholder="Brief summary"></input></td>
            <td><input type="text" placeholder="# of boxes"></input></td>
            <td><input type="text" placeholder="# of bags"></input></td>
          </tr>
          <tr ng-repeat="name in getdrugnameNewArray">
          <td>
                  <select class="form-control">
                  <option></option>
                    <option>Clothing</option>
                    <option>Household</option>
                    <option>Furniture</option>
                    <option>Collectables/Antiques</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select>
                </td>
            <td><input type="text" placeholder="Brief summary"></input></td>
            <td><input type="text" placeholder="# of boxes"></input></td>
            <td><input type="text" placeholder="# of bags"></input></td>
          </tr>
          <tr ng-repeat="name in getdrugnameNewArray">
          <td>
                  <select class="form-control">
                  <option></option>
                    <option>Clothing</option>
                    <option>Household</option>
                    <option>Furniture</option>
                    <option>Collectables/Antiques</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select>
                </td>
            <td><input type="text" placeholder="Brief summary"></input></td>
            <td><input type="text" placeholder="# of boxes"></input></td>
            <td><input type="text" placeholder="# of bags"></input></td>
          </tr>
          <tr ng-repeat="name in getdrugnameNewArray">
          <td>
                  <select class="form-control">
                  <option></option>
                    <option>Clothing</option>
                    <option>Household</option>
                    <option>Furniture</option>
                    <option>Collectables/Antiques</option>
                    <option>Electronics</option>
                    <option>Other</option>
                  </select>
                </td>
            <td><input type="text" placeholder="Brief summary"></input></td>
            <td><input type="text" placeholder="# of boxes"></input></td>
            <td><input type="text" placeholder="# of bags"></input></td>
          </tr>
        </tbody>
      </table></>

      
)};

export default App;
