import React, { useState } from "react";
import { Paper, Typography, Grid, Button, Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createVideo } from "../../../actions/Video";
import { v1 as uuid } from "uuid";

const CreateRoom = props => {
  const { user, create, setCreate } = props;
  const sub = JSON.parse(localStorage.getItem("sub"));
  const dispatch = useDispatch();
  const [vidData, setVidData] = useState({
    Title: "",
    Description: "",
  });

  const val = user?.result?.Subjects?.map(i => i.label);
  const finalval = val.filter(element => element === sub?.sub);
  const id = uuid();
  var url = `/V-Class/EduCast/room/${id}/${finalval}`;

  function Creator() {
    window.history.pushState({}, "", url);
  }

  const Clear = () => {
    setVidData({
      Title: "",
      Description: "",
    });
  };

  const HandleSubmit = e => {
    dispatch(
      createVideo({
        ...vidData,
        Subject: finalval.toString(),
        Creator: user?.result?._id,
        URL: url,
      })
    );
    Creator();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div>
      {create === true && (
        <Paper
          style={{ width: "100%", padding: "25px 20px", marginTop: "15px" }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Input
                style={{ width: "85%" }}
                placeholder="E.g: Calculas II"
                onChange={e =>
                  setVidData({ ...vidData, Title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                style={{ width: "85%" }}
                placeholder="E.g: Taking a look at first principals"
                onChange={e =>
                  setVidData({ ...vidData, Description: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  localStorage.setItem(
                    "videoCall",
                    JSON.stringify({
                      SessionName: vidData.Title,
                      SessionCreator: user?.result?._id,
                    })
                  );
                  HandleSubmit();
                  Clear();
                  setCreate(false);
                }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}

      <Paper
        elevation={0}
        style={{
          width: "80%",
          padding: "5px 20px",
          backgroundColor: "transparent",
          margin: "auto",
        }}
      >
        <Button
          fullWidth
          color={create === false ? "primary" : "secondary"}
          variant="contained"
          onClick={() => {
            setCreate(prev => !prev);
          }}
        >
          {create === false ? "Create Live Lesson" : "Cancel"}
        </Button>
      </Paper>
    </div>
  );
};

export default CreateRoom;