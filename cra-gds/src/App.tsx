import { Alert, Badge, GoormLoader } from "@goorm-dev/gds-goormthon";

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
    </>
  );
};

export default App;
