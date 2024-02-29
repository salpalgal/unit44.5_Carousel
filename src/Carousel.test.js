import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works without crashing", function(){
  render(<Carousel />)
})

it("genereates title", function(){
  const {getByText} = render(<Carousel title="Hello"/>)
  const heading = getByText("Hello")
  expect(heading).toBeInTheDocument()
})
it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", function(){
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

})
it("should be missing left arrow on first image", function(){
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  
  const leftArrow = queryByTestId("left-arrow");
  const rightArrow = queryByTestId("right-arrow");

  expect(leftArrow).toHaveClass("hidden")
  expect(rightArrow).not.toHaveClass("hidden")
 


})

it("should be missing right arrow on last image", function(){
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  
  const leftArrow = queryByTestId("left-arrow");
  const rightArrow = queryByTestId("right-arrow");

  expect(leftArrow).toHaveClass("hidden")
  expect(rightArrow).not.toHaveClass("hidden")

  fireEvent.click(rightArrow)

  expect(leftArrow).not.toHaveClass("hidden")
  expect(rightArrow).not.toHaveClass("hidden")

  fireEvent.click(rightArrow)

  expect(leftArrow).not.toHaveClass("hidden")
  expect(rightArrow).toHaveClass("hidden")

})
