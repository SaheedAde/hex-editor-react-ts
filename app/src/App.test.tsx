import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import App from './App';

test('renders file button', () => {
  render(<App />);
  const fileElement = screen.getByRole('button');
  expect(fileElement).toBeInTheDocument();
});

describe("when file is selected", () => {
  let file: File
  beforeEach(() => {
    file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
  });
  test("file upload", async () => {
    render(<App />);
    const fileElement: HTMLFormElement = screen.getByRole('button');
    fireEvent.click(fileElement)

    // simulate ulpoad event and wait until finish
    await fireEvent.change(fileElement, {target: { files: [file] },})

    // check if the file is there
    expect(fileElement.files[0].name).toBe("chucknorris.png");
    expect(fileElement.files.length).toBe(1);
  });
  test("reset is clicked", async () => {
    render(<App />);
    const fileElement: HTMLFormElement = screen.getByRole('button');
    fireEvent.click(fileElement)

    // simulate ulpoad event and wait until finish
    await fireEvent.change(fileElement, {target: { files: [file] },})


    fireEvent.click(fileElement)

    // simulate reset
    await fireEvent.change(fileElement, {target: { files: [] }})
    expect(fileElement.files.length).toBe(0);
  });
});