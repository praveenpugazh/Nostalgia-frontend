import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import useStyles from "./styles";

const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    message: "",
    title: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
    setPostData({
      creator: "",
      message: "",
      title: "",
      tags: "",
      selectedFile: "",
    });
  };
  const changeHandler = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setPostData({
      creator: "",
      message: "",
      title: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={submitHandler}
      >
        <Typography vairant="h6">Create Nostalgic Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={changeHandler}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={changeHandler}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={changeHandler}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={changeHandler}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
