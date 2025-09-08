import { useLoaderData, } from "react-router-dom";
import Paragraph from "../../components/Paragraph/Paragraph";

export const Movie = () => {
    const {data} = useLoaderData();
    console.log(data.short);

    return (
        <>
            <Paragraph>{data.short.review.reviewBody}</Paragraph>
            <img alt={`${data.short.name}`} src={data.short.image} style={{width: '480px', maxHeight: '720px'}}></img>
        </>
    );
};