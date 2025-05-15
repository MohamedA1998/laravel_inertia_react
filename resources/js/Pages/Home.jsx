export default function Home({...props})
{
    return (<>
        <h1>Welcome {props.name} in project {props.app}</h1>
    </>);
}