import { Alert, Badge, GoormLoader, Spinner } from "@goorm-dev/gds-goormthon";
import styled from "styled-components";

const lottieProps = {
  play: true,
};

const App = () => {
  return (
    <>
      <Badge>Badge</Badge>
      <Alert>
        "children", "A simple primary alert with an example link. Give it a
        click if you like."
      </Alert>
      <GoormLoader lottieProps={lottieProps} />
      <Spinner />
      <CustomSpinner />
    </>
  );
};

export default App;

const CustomSpinner = styled(Spinner)`
  width: 20rem;
  height: 20rem;
`;
