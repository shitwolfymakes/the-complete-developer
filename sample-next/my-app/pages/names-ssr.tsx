// this file is an example of a server-side rendered page
import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    NextPage,
    PreviewData
} from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../utils/fetch-names";

type responseItemType = {
    id: string;
    name: string;
};

const NamesSSR: NextPage = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const output = props.names.map((item: responseItemType, idx: number) => {
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

// 1. Browser hits /names-ssr
// 2. Next.js looks up this file and loads all the symbols
// 3. Sees this is exported and calls it
// 4. Passes the return value to `NamesSSR`
export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let names: responseItemType[] | [] = [];
    try {
        names = await fetchNames();
    } catch (err) {}

    return { props: {names} };
};

export default NamesSSR;