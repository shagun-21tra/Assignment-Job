import  useState from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/itemsSlice";
import { Input, Button, Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

function ItemForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && cost) {
      dispatch(addItem({ id: uuidv4(), name, cost: Number(cost) }));
      setName("");
      setCost("");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4}>
      <Input placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} mb={2} />
      <Input placeholder="Cost" type="number" value={cost} onChange={(e) => setCost(e.target.value)} mb={2} />
      <Button type="submit" colorScheme="teal">Add Item</Button>
    </Box>
  );
}

export default ItemForm;
