import React, {useContext} from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";



export default function Step2(){
    const {setStep, userData, setUserData}=useContext(multiStepContext);

    return(
        <div>
            <div>
            <TextField label="city" margin="normal" variant="outlined" color="secondary"/>
            </div>
             <div>
            <TextField label="area" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <Button variant="outlined" onClick={()=>setStep(1)} color="primary">Previous</Button>
            <Button variant="outlined" onClick={()=>setStep(3)} color="primary">Next</Button>
            </div>

         
        </div>
    )
}