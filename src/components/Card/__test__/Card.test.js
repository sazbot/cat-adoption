import { render, screen } from "@testing-library/react";
import Card from "../Card";

const cardProps = {
  name: "Sydney",
  phone: "111-111-1111",
  email: "laith@hotmail.com",
  image: {
    url: "https://unsplash.com/photos/TCsnvDyfreQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    alt: "cute cat",
  },
  isFavoured: false,
};

describe("Card", () => {
  test("should show name of cat", () => {
    render(<Card {...cardProps} />);
    expect(
      screen.getByRole("heading", {
        name: /Sydney/i,
      })
    ).toBeInTheDocument();
  });

  test("should show telephone of cat", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/111-111-1111/i)).toBeInTheDocument();
  });

  test("should show email of cat", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(/laith@hotmail.com/i)).toBeInTheDocument();
  });

  test("should show image with correct source", () => {
    render(<Card {...cardProps} />);
    expect(screen.getByAltText(/cute cat/i).src).toBe(cardProps.image.url);
  });
});
