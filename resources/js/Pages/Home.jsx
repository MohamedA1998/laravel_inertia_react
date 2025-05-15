export default function Home({...props})
{
    return (<>
        <h1 className="title">Welcome {props.name} in project {props.app}</h1>
    </>);
}