import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resMockData.json";

it("should load res card", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const resCard = screen.getByText("Soul Rasa");
  expect(resCard).toBeInTheDocument();
});
