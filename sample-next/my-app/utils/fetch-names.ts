type responseItemType = {
    id: string;
    name: string;
};

export const fetchNames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    // define a var for the data, either an array of `responseItemType`
    // or just an empty array, initialized to an empty array
    let data: responseItemType[] | [] = [];
    // define a var for the names, either an array of `responseItemType`
    // or just an empty array. Left uninitialized — assigned after the fetch
    // completes (or stays unassigned if fetching fails).
    let names: responseItemType[] | [];
    try {
        // this does the call and pauses the function execution until
        // the response is received. JS is single threaded so blocking
        // here would hang the entire server
        const response = await fetch(url);

        // this pauses funcex until the json is parsed
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        names = [];
    }

    names = data.map((item) => {
        return { id: item.id, name: item.name }
    });

    return names;
}