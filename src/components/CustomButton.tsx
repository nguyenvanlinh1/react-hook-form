import { Button } from "@mui/material"

export enum ButtonType {
    BUTTON = "button",
    SUBMIT = "submit",
    RESER = "reset",
}

interface IButton {
    name: string;
    type?: ButtonType;
    onClick?: React.FormEventHandler<HTMLButtonElement> | undefined
}

const CustomButton = ({name, onClick, type} : IButton) => {
  return (
    <Button variant="contained" type={type} sx={{borderRadius:"10px", margin:"10px 0"}} onClick={onClick}>{name}</Button>
  )
}

export default CustomButton