import React, {useContext} from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";


export default function Step3(){
    const {setStep, userData, setUserData}=useContext(multiStepContext);

    return(
        <div>
            <div>
            <TextField label="feature" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <Button variant="outlined" onClick={()=>setStep(2)} color="primary">Previous</Button>
            <Button variant="outlined" onClick={()=>setStep(4)} color="primary">Next</Button>
            </div>

         
        </div>
    )
}