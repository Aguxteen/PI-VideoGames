import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import Card from "./Card.jsx"
import BrowserRouter, { Router } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() });

const ejemplo = {
  name:"SALAME",
  image: "queso",
  genres:["Tomate","Sandia"],
   id: "ID"
}
describe ("Create Games test:" ,()=>{

  
  it("Card muestra un h3 que dice SALAME", ()=>{

    const { container } = render(<Card name={ejemplo.name} image={ejemplo.image} genres={ejemplo.genres} id={ejemplo.id}/>)
      const element = container.querySelectorAll('h3')[0]
      expect(element.innerHTML).toBe('SALAME');
  })


  it("Card muestra un h4 que dice Tomate,Sandia", ()=>{

    const { container } = render(<Card name={ejemplo.name} image={ejemplo.image} genres={ejemplo.genres} id={ejemplo.id}/>)
      const element = container.querySelectorAll('h4')[0]
      expect(element.innerHTML).toBe("Tomate, Sandia");
  })
})
