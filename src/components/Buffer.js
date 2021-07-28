import { CircularProgress } from "@material-ui/core";

const Buffer = () => (
  <div
    style={{
      width: "100%",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      overflow: "none",
    }}
  >
    <CircularProgress
      color="secondary"
      style={{ margin: "auto" }}
      size="3rem"
    />
  </div>
);

export default Buffer;
