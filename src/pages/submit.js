export default function Page({ name, age, city }) {
    return (
        <>
            <h1>Submitted data</h1>
            <p><strong>Name: </strong> { name } </p>
            <p><strong>Age: </strong> { age } </p>
            <p><strong>City: </strong> { city } </p>
        </>
    );
}

export async function getServerSideProps(context) {
    const {query} = context;

    const { name, age, city } = query;

    return {
        props: {
            name,
            age,
            city,
        },
    };
}