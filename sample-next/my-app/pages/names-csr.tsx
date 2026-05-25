// this file is an example of a client-side rendered page
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchNames } from "../utils/fetch-names";

type responseItemType = {
    id: string;
    name: string;
};

// TODO:
// This is exactly as written in the book, which now fails since CORS
// has tightened. To fix the endless loop, and `, []` to the useEffect.
// To bypass CORS issues route through /api/names
const NamesCSR: NextPage = () => {
    const [data, setData] = useState<responseItemType[] | []>();

    useEffect(() => {
        const fetchData = async () => {
            let names;
            try {
                names = await fetchNames();
            } catch(err) {
                console.log("ERR", err);
            }
            setData(names);
        };
        fetchData();
    });

    const output = data?.map((item: responseItemType, idx: number) => {
        return (
            <li key={`name-${idx}`}>
                {item.id} : {item.name}
            </li>
        );
    });

    return (
        <ul>
            {output}
        </ul>
    );
};

export default NamesCSR;