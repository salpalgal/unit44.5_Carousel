import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


it("works without crashing", function(){
    render(<Card />)
  })

it("should make card div with image", function(){
    const {getByText} = render(<Card caption="Hello"/>)
    const heading = getByText("Hello")
    expect(heading).toHaveClass("Card-title")
    expect(heading).toBeInTheDocument()
})