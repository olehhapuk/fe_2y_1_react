import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
} from '@mui/material';

function App() {
  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <Paper
        elevation={5}
        sx={{
          padding: '18px',
        }}
      >
        <Stack
          direction="column"
          gap="8px"
          alignItems="start"
          component="form"
          onSubmit={() => {}}
        >
          <TextField label="Name" error={false} helperText="testerror" />
          <Button color="success" variant="contained" type="submit">
            Add contact
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
