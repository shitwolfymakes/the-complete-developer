import { render } from "@testing-library/react";
import PageComponentWeather from "../../../pages/components/weather";

describe("PageComponentWeather", () => {
    test("renders correctly", () => {
        const { asFragment } = render(<PageComponentWeather />)
        expect(asFragment()).toMatchSnapshot();
    });
});