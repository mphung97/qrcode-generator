/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  CssBaseline,
  InputBase,
  Container,
  makeStyles,
  InputAdornment,
  IconButton,
  Divider,
} from "@material-ui/core";
import { ClearOutlined } from "@material-ui/icons";
import QRCode from "qrcode.react";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "3rem",
  },
  input: {
    padding: "0.75rem 0rem 0.75rem 1rem",
  },
  inputRoot: {
    width: "100%",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "0.25rem",
    margin: "2rem 0",
  },
  qrzone: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
}));

function App() {
  const [input, setInput] = useState("here comes qr!");
  const [QRValue, setQRValue] = useState(input);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQRValue(input);
    setInput("");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Container maxWidth="sm">
        <h1>QR Code Generator</h1>
        <Divider />
        <form onSubmit={handleSubmit}>
          <InputBase
            error={!input}
            name="input"
            value={input}
            autoFocus
            classes={{ root: classes.inputRoot, input: classes.input }}
            placeholder="Input..."
            helperText="Incorrect entry."
            onChange={handleChange}
            endAdornment={
              input && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClear}>
                    <ClearOutlined
                      fontSize="small"
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </form>
        <div className={classes.qrzone}>
          {QRValue && <QRCode value={QRValue} />}
        </div>
      </Container>
    </div>
  );
}

export default App;
