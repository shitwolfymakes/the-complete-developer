interface WeatherProps {
    weather: string;
}

type WeatherDetailType = {
    zipcode: string;
    wather: string;
    temp?: number;
};

type responseItemType = {
    id: string;
    name: string;
};