
export default function List ({contacts, onSelect}){
    function changeBackground(e) {
        e.target.style.background = 'blue';
        
      }
      function changeBackgroundBack(e) {
        e.target.style.background = 'white';
      }
      
    return <ol className="contactList">
        { contacts.map((contact)=>(
                <li className="contactLi" onMouseOver={changeBackground} onMouseOut={changeBackgroundBack}  key={contact.id} onClick={ () => onSelect(contact) }>
                    {contact.name}
                </li>
            ))}
       
    </ol>
}