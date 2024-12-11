import { Box, TextField, Typography } from "@mui/material";
import { FieldError } from "react-hook-form";

interface ITextField {
    name:string;
    value:any;
    type?: string;
    required?: boolean;
    title:string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    errorMessage?: FieldError | undefined;
}

const CustomTextField = ({name, value, type, required, title, onChange, errorMessage} : ITextField) => {
  return (
    <Box width={"100%"} sx={{padding: "5px"}}>
        <Typography variant="h6" fontWeight={600}>{title}</Typography>
        <TextField type={type} required={required} variant="outlined" name={name} value={value} onChange={onChange} fullWidth ></TextField>
        <Typography variant="body1" fontWeight={600} color={"red"}>{errorMessage?.message}</Typography>
    </Box>
  )
}

export default CustomTextField