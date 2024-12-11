import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { FieldError } from "react-hook-form";


interface IRadioGroup {
    name:string;
    value:any;
    title:string;
    listValueItem: {
        name: string;
        label: string;
    }[];
    onChange: ((event: React.ChangeEvent<HTMLInputElement>, value: string) => void) | undefined;
    errorMessage?: FieldError | undefined;
}

const CustomRadioGroup = ({name, value, title, listValueItem, onChange, errorMessage} : IRadioGroup) => {
  return (
    <Box>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" sx={{fontWeight: 600, color:"black"}}>{title}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name={name}
          value={value}
          onChange={onChange}
          sx={{
            display:"flex",
            justifyContent:"space-between",
            flexDirection:"row"
          }}
        >
          {listValueItem.map((item) => (
            <FormControlLabel value={item.name} control={<Radio />} label={item.label} />
          ))}
        </RadioGroup>
        <Typography variant="body1" fontWeight={600} color={"red"}>{errorMessage?.message}</Typography>
      </FormControl>
    </Box>
  );
};

export default CustomRadioGroup;
