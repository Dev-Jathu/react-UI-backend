import React from "react";
import './Table1.css'
import Button from "../Button/Button";
 export default function Note() {
    return (
        <>
            <table>
  <thead>
    <tr>
      <th>Todo-ID</th>
      <th>Last Name</th>
      <th>Job Title</th>
      <th>Twitter</th>
      <th>Twitter</th>
      <th>Twitter</th>
      <th>Twitter</th>
      <th>Twitter</th>
      <th>Twitter</th>
      <th>Edit</th>
      <th>Delete</th>

      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="First Name">James</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Job Title">Chief Sandwich Eater</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Twitter">@james</td>
      <td><Button name='Edit' Class='edit'/></td>
      <td><Button name='Delete' Class='Delete'/></td>

    </tr>
    <tr>
      <td data-column="First Name">Andor</td>
      <td data-column="Last Name">Nagy</td>
      <td data-column="Job Title">Designer</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Twitter">@andornagy</td>
      <td><Button name='Edit' Class='edit'/></td>
      <td><Button name='Delete' Class='Delete'/></td>


    </tr>
    <tr>
      <td data-column="First Name">Tamas</td>
      <td data-column="Last Name">Biro</td>
      <td data-column="Job Title">Game Tester</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Twitter">@tamas</td>
      <td><Button name='Edit' Class='edit'/></td>
      <td><Button name='Delete' Class='Delete'/></td>


    </tr>
    <tr>
      <td data-column="First Name">Zoli</td>
      <td data-column="Last Name">Mastah</td>
      <td data-column="Job Title">Developer</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Twitter">@zoli</td>
      <td><Button name='Edit' Class='edit'/></td>
      <td><Button name='Delete' Class='Delete'/></td>


    </tr>
    <tr>
      <td data-column="First Name">Szabi</td>
      <td data-column="Last Name">Nagy</td>
      <td data-column="Job Title">Chief Sandwich Eater</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Last Name">Matman</td>
      <td data-column="Twitter">@szabi</td>
      <td><Button name='Edit' Class='edit'/></td>
      <td><Button name='Delete' Class='Delete'/></td>


    </tr>
    <tr>
       
    </tr>
  </tbody>
</table>
        </>
    )
}