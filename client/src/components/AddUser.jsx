import { useState } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState({ initialValue });
  const { name, username, email, phone } = user;

  let navigate = useNavigate();

  const onValueChange = (event) => {
    //console.log(event.target.name ,event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value });
    //console.log(user);
  };

  const addUserHandler = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4"> Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">UserName</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="username"
          value={username}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="email"
          value={email}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input
          onChange={(event) => onValueChange(event)}
          name="phone"
          value={phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserHandler()}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
