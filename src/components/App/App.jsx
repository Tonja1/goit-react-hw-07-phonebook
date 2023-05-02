import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { ContactForm } from "components/ContactForm/Form";
import { Div, Container, Title } from "./AppStyled";

export const App = () => {
  return (
    <Container>
      <Div>
        <Title>Phonebook</Title>

        <ContactForm />
      </Div>
      <Div>
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Div>
    </Container>
  );
};
