import { Div, List } from "./ContactListStyled";
import { useSelector } from "react-redux";
import { ContactItem } from "components/ContactItem/ContactItem";
import { selectFilteredContacts } from "redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Div>
      <List>
        {contacts.map(({ name, number, id }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </Div>
  );
};