import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { FieldError } from "react-hook-form";

interface ISELECT {
    name:string;
    value:any;
    title:string;
    onChange: any;
    errorMessage: FieldError | undefined;
}

const CustomSelect = ({name, value, title, onChange, errorMessage} : ISELECT) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          name={name}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={onChange}
        >
          <MenuItem value={10}>Độc thân</MenuItem>
          <MenuItem value={20}>Đã có người yêu</MenuItem>
          <MenuItem value={30}>Đéo muốn yêu</MenuItem>
        </Select>
        <Typography variant="body1" fontWeight={600} color={"red"}>{errorMessage?.message}</Typography>
      </FormControl>
    </Box>
  )
}

export default CustomSelect