import Banner from "../app/components/Banner";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ClassAttributes, ImgHTMLAttributes } from "react";

test("renders heading", () => {
  render(<Banner />);
  expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
});

test("renders heading title", () => {
  render(<Banner />);
  expect(
    screen.getByRole("heading", { level: 2, name: /Break free from/i })
  ).toBeInTheDocument();
});

test("renders subtitle", () => {
  render(<Banner />);
  expect(
    screen.getByRole("heading", {
      level: 3,
      name: /for the underground artists/i,
    })
  ).toBeInTheDocument();
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLImageElement> &
      ImgHTMLAttributes<HTMLImageElement>
  ) => <img {...props} />,
}));
test("renders image", () => {
  render(<Banner />);
  const image = screen.getByAltText("home-banner") as HTMLImageElement;
  expect(image).toBeInTheDocument();
  // expect(image.src).toContain("/img/home.png");
});
