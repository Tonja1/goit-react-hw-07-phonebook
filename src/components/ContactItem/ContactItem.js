import PropTypes from 'prop-types';
import { Button, Item, Parag } from './ContactItemStyled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Parag>
        {name}: {phone}
      </Parag>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};