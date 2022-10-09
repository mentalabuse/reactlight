import { useDispatch, useSelector } from 'react-redux';
import { switchStatus } from './redux/reducers/lightSlice';
import {
  Bulb,
  Button,
  Container,
  Supports,
  Switcher,
  Wire,
} from './UI/styled';

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((s) => s.light);
  const turnHandler = () => {
    dispatch(switchStatus());
  };

  return (
    <Container status={status}>
      <Wire />
      <Bulb status={status}>
        <Supports status={status} />
        <Supports status={status} />
      </Bulb>
      <Switcher>
        <Button onClick={turnHandler} status={status} />
      </Switcher>
    </Container>
  );
}

export default App;
