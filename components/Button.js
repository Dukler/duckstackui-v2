import MUIButton from "@material-ui/core/Button";

export default function Button(props) {

    return <MUIButton{...props} >
        {props?.label}
    </MUIButton>
}