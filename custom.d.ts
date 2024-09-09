type responseItemType = {
    id: string;
    name: string;
};

type WeatherDetailType = {
    weather: string;
    zipcode: string;
    temp?: number;
};

interface WeatherQueryInterface {
    zipcode: string;
}
