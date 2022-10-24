import {
    FormControl,
    Typography,
    Box,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    IconButton,
    createMuiTheme,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import { Container } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { RemoveScrollBar } from "react-remove-scroll-bar";

export default function CssValue() {
    const bannerSizes = [
        "320x50",
        "160x600",
        "300x600",
        "300x250",
        "728x90",
        "970x250",
    ];
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(250);
    const [top, setTop] = useState(height / 2);
    const [left, setLeft] = useState(width / 2);
    const [value, setValue] = useState("300x250");
    const [viewLeftClass, setViewLeftClass] = useState(false);
    const [viewTopClass, setViewTopClass] = useState(false);
    const handleSizeChange = (e) => {
        setValue(e.target.value);
        setWidth(parseInt(e.target.value.split("x")[0]));
        setHeight(parseInt(e.target.value.split("x")[1]));
        // setTop(parseInt(e.target.value.split("x")[1]) / 2);
        // setLeft(parseInt(e.target.value.split("x")[0]) / 2);
    };
    useEffect(() => {
        if (isNaN(left)) {
            setViewLeftClass(false);
        }
    }, [left]);
    useEffect(() => {
        if (isNaN(top)) {
            setViewTopClass(false);
        }
    }, [top]);

    const theme = createTheme({
        palette: {
            primary: {
                main: "#000000", //this overide blue color
                light: "#000000", //overides light blue
                dark: "#000000", //overides dark blue color
            },
        },
    });
    return (
        <Container maxWidth="xl" sx={{ mt: "20px" }}>
            {/* <RemoveScrollBar /> */}
            <Box
                sx={{
                    overflow: "hidden",
                    display: "flex",
                    gap: "50px",
                }}
            >
                <Box>
                    <ThemeProvider theme={theme}>
                        <FormControl
                            sx={{
                                maxWidth: "400px",
                                border: "1px solid #333",
                                p: "10px",
                                borderRadius: "10px",
                            }}
                        >
                            <FormLabel
                                sx={{
                                    fontSize: "16px",
                                    color: "warning.main",
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                }}
                                id="demo-controlled-radio-buttons-group"
                            >
                                Banner Size
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleSizeChange}
                            >
                                {bannerSizes.map((bannerSize) => (
                                    <FormControlLabel
                                        sx={{
                                            color:
                                                value === bannerSize
                                                    ? "primary.main"
                                                    : "#333",
                                        }}
                                        value={bannerSize}
                                        control={<Radio />}
                                        label={bannerSize}
                                    />
                                ))}
                            </RadioGroup>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "20px",
                                    mt: "20px",
                                }}
                            >
                                <TextField
                                    type="number"
                                    value={width}
                                    onChange={(e) => {
                                        setWidth(parseInt(e.target.value));
                                    }}
                                    id="input-with-icon-textfield"
                                    label="Set Width"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SaveIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="standard"
                                />
                                <TextField
                                    type="number"
                                    value={height}
                                    onChange={(e) => {
                                        setHeight(parseInt(e.target.value));
                                    }}
                                    id="input-with-icon-textfield"
                                    label="Set Height"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SaveIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="standard"
                                />
                            </Box>
                        </FormControl>
                    </ThemeProvider>
                    <Box sx={{ mt: "40px" }}>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "20px",
                                maxWidth: "400px",
                                border: "1px solid #333",
                                p: "10px",
                                borderRadius: "10px",
                            }}
                        >
                            <TextField
                                type="number"
                                onChange={(e) => {
                                    setLeft(parseInt(e.target.value));
                                    setViewLeftClass(true);
                                }}
                                id="input-with-icon-textfield"
                                label="Set Left"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StartIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            px
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                sx={{
                                    background: "#F9F6EE",
                                    outlineColor: "black",
                                }}
                            />
                            <TextField
                                type="number"
                                onChange={(e) => {
                                    setTop(parseInt(e.target.value));
                                    setViewTopClass(true);
                                }}
                                id="input-with-icon-textfield"
                                label="Set top"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SaveIcon color="warning" />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="filled"
                                sx={{ background: "#FFFFF0" }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ mt: "40px" }}>
                        <Box
                            sx={{
                                maxWidth: "400px",
                                border: "2px dashed black",
                                p: "10px",
                                borderRadius: "10px",
                            }}
                        >
                            {/* {(viewTopClass || viewLeftClass) && (
                                <Typography variant="body1">
                                    {viewLeftClass &&
                                        `left: ${parseFloat(
                                            ((left / width) * 100).toFixed(2)
                                        )}%;`}{" "}
                                    <br></br>
                                    {viewTopClass &&
                                        `top: ${parseFloat(
                                            ((top / height) * 100).toFixed(2)
                                        )}%;`}
                                </Typography>
                            )} */}
                            {viewLeftClass && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        background: "#eee",
                                        alignItems: "center",
                                        px: "10px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <Typography variant="body1">
                                        {viewLeftClass &&
                                            `left: ${parseFloat(
                                                ((left / width) * 100).toFixed(
                                                    2
                                                )
                                            )}%;`}
                                    </Typography>
                                    <IconButton
                                        color="secondary"
                                        aria-label="copy"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                `left: ${parseFloat(
                                                    (
                                                        (left / width) *
                                                        100
                                                    ).toFixed(2)
                                                )}%;`
                                            );
                                        }}
                                    >
                                        <ContentCopyIcon />
                                    </IconButton>
                                </Box>
                            )}
                            {viewTopClass && (
                                <Typography variant="body1">
                                    {viewTopClass &&
                                        `top: ${parseFloat(
                                            ((top / height) * 100).toFixed(2)
                                        )}%;`}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Box>

                <div className="App">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: width,
                                height: height,
                                transition: "all",
                                transitionDuration: "500ms",
                                backgroundColor: "primary.main",
                                borderRadius: "5px",
                                "&:hover": {
                                    backgroundColor: "primary.dark",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: left,
                                    width: "1px",
                                    height: "100%",
                                    transition: "all",
                                    transitionDuration: "250ms",
                                    backgroundColor: "#333",
                                    "&:hover": {
                                        backgroundColor: "secondary.main",
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: top,
                                    left: 0,
                                    width: "100%",
                                    height: "1px",
                                    transition: "all",
                                    transitionDuration: "250ms",
                                    backgroundColor: "#333",
                                    "&:hover": {
                                        backgroundColor: "secondary.main",
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}
                            ></Box>
                        </Box>
                    </Box>
                </div>
            </Box>
        </Container>
    );
}
