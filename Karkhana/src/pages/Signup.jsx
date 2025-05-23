import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { Input, Button, Box, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box p={6} maxW="md" mx="auto">
      <Heading mb={4}>Sign Up</Heading>
      <Input placeholder="Email" mb={3} value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" mb={3} value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleSignup} colorScheme="teal">Sign Up</Button>
    </Box>
  );
}

export default Signup;