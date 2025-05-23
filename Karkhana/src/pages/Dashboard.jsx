// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Heading, List, ListItem, Button } from '@chakra-ui/react';
import ItemForm from '../components/ItemForm.jsx';
import { removeItem } from '../features/itemsSlice';

function Dashboard() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.cost, 0);

  return (
    <Box p={6} maxW="xl" mx="auto">
      <Heading mb={4}>Project Cost Tracker</Heading>
      <ItemForm />
      <Heading size="md" mt={6}>Items</Heading>
      <List spacing={2}>
        {items.map((item) => (
          <ListItem key={item.id} d="flex" justifyContent="space-between">
            {item.name} - ${item.cost}
            <Button size="sm" colorScheme="red" onClick={() => dispatch(removeItem(item.id))}>Delete</Button>
          </ListItem>
        ))}
      </List>
      <Heading size="md" mt={6}>Total Cost: ${total}</Heading>
    </Box>
  );
}

export default Dashboard;