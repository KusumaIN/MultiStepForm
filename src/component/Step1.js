import React, {useContext} from "react";
import { Button, TextField } from "@mui/material";
import { multiStepContext } from "../StepContext";


export default function Step1(){
    const {setStep, userData, setUserData}=useContext(multiStepContext);
    return(
        <div>
            <div>
            <TextField label="customer" margin="normal" variant="outlined" color="secondary"/>
            </div>
             <div>
            <TextField label="propertyType" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <TextField label="requirement" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <TextField label="detailedRequirement" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <TextField label="minPrice" margin="normal" variant="outlined" color="secondary"/>
            <TextField label="maxPrice" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <TextField label="timeline" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
            <Button variant="outlined" onClick={()=>setStep(2)} color="primary">Next</Button>
            </div>

         
        </div>
    )
}

