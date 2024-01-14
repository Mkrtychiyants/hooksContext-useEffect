import { fetchData } from "../ContactBook/ContactBook";
const { useEffect, useState } = require("react");

export default function Details(props) {
    const curId = props.info;
    const [fullInfo, loadFullInfo] = useState(null);


    useEffect(() => {
        fetchData(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/` + curId.id + `.json`, loadFullInfo)

    }, [curId])


    return (
        <>
            {fullInfo ? <div className="detailedInfo">
                <img className="fullInfoImg" alt="ava" src={fullInfo.avatar}></img>
                <div className="fullInfoName">{fullInfo.name}</div>
                <div className="fullInfoCity">City: {fullInfo.details.city}</div>
                <div className="fullInfoComp">Company: {fullInfo.details.company}</div>
                <div className="fullInfoPos">Position:{fullInfo.details.position}</div>
            </div> : <div>Loading</div>}
        </>

    )

}