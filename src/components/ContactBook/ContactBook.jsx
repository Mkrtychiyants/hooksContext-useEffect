import Details from '../Details/Details';
import List from '../List/List';
const { useEffect, useState } = require("react");

export const fetchData = async (url, setState) => {
    const fetchedList = await fetch(url)
    const data = await fetchedList.json();
    setState(data);
}


export default function ContactBook() {
    const [list, setList] = useState([]);
    const [isIdSelected, selectId] = useState(null);

    useEffect(() => {
        fetchData("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json", setList)
    }, [])

    const selectHandle = (contactId) => {
        selectId(contactId);
    }

    return (
        <>
            <List contacts={list} onSelect={selectHandle}  />
            {isIdSelected ? <Details info={isIdSelected} /> : undefined}
        </>

    )
}