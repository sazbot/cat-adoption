import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Card from "../Card";

const cardProps = {
  name: "Sydney",
  phone: "111-111-1111",
  email: "laith@hotmail.com",
  image: {
    url: "https://images.unsplash.com/photo-1512200331909-44d741611b43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80",
    alt: "cute cat",
  },
  isFavourite: false,
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

  test("should show outlined heart", () => {
    render(<Card {...cardProps} />);
    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });

  test("should show filled heart", () => {
    render(<Card {...cardProps} isFavourite={true} />);
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();
  });

  test("should toggle heart status", () => {
    render(<Card {...cardProps} />);
    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/outlined heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/filled heart/i)).toBeInTheDocument();

    userEvents.click(screen.getByRole("button"));

    expect(screen.queryByAltText(/filled heart/i)).not.toBeInTheDocument();
    expect(screen.getByAltText(/outlined heart/i)).toBeInTheDocument();
  });
});
