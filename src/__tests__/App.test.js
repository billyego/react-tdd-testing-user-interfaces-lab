import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";


test ("displays a top level heading with the text `Hi, I'm ______`",()=>{
    render(<App/>)
    const topLevelHeading=screen.getByRole("heading",{
        name:/hi, i'm/i,
        exact:false,
        level:1
    });
    expect(topLevelHeading).toBeInTheDocument()
})
test("displays my image with an alt text of my name",()=>{
    render(<App/>)
    const image=screen.getByAltText("My Profile Pic");
    expect(image).toHaveAttribute("src")
})
test("displays second level heading with the text about me",()=>{
    render(<App/>)
    const secondLevelHeading=screen.getByRole("heading",{
        name:/about me/i,
        level:2
    })
    expect(secondLevelHeading).toBeInTheDocument();
})
test("displayes a paragraph of bio",()=>{
    render(<App/>)
    const Paragraph=screen.getByText(/Lorem ipsum/i)
    expect(Paragraph).toBeInTheDocument();
})
test("Displays correct links",()=>{
    render(<App/>)
    const github=screen.getByRole("link",{
        name:/github/i,
    })
    const linkedin=screen.getByRole("link",{
        name:/linkedin/i,
    })
    expect(github).toHaveAttribute("href",expect.stringContaining("https://github.com"))
    expect(linkedin).toHaveAttribute("href",expect.stringContaining("https://linkedin.com"))
})