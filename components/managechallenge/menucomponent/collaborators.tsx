import {TextField } from '@mui/material';
import collabStyle from '../css/Collabs.module.css';
import { useState } from 'react';
import styles from '../../challengecreation/css/CreationPage.module.css'
import { setConstantValue } from 'typescript';
import axios from 'axios';
type Collaborator = {
    id: string;
    name: string;
};
const c = {
    cnumber: 1,
    id: 630610762,
    name: 'Saranphot Chesrichai',
};
const c2 = {
    cnumber: 2,
    id: 630610763,
    name: 'oat699',
};


export default function Collaborators() {
    const [cols, setCols] = useState<Collaborator[]>([]);
    const [text,setText]  = useState("")
    const [apiResp,setApiResp] = useState<Collaborator>();
    const removeCol = (cc: Collaborator) => {
        // let.
        // axios.delete('http://localhost:3030/api/challenges//deleteCollaborators')
        // .then =>{
            
        //     removeCol
        // }
        setCols(cols.filter((e) => e !== cc));
    };
    const [emailInput,setEmailInput] = useState("");
    const addCol = (c: Collaborator) => {
        if (!cols.includes(c)) setCols([...cols, c]);
        console.log(emailInput)
        setEmailInput("")
    };
    const handleChange = (e:any) =>{
        setText(e.target.value.toString())
    }
    const handleAdd = () =>{
        //send {text} to api then api return an entity
        //call addCol  with the returned entity as param
        console.log("add")
        let j = {
            challengeTitle: "Gemak112",
            cmuAccount: emailInput
        }
        axios
            .put('http://localhost:3030/api/challenges/addCollaborators',j)
            .then((resp) =>{
                console.log(resp.data)
                // setApiResp({id:resp.data.ParticipantId,name:resp.data.CollaboratorName})
                let c = {
                    id:resp.data.ParticipantID,
                    name:resp.data.CollaboratorName
                }
                addCol(c)
            })
            .catch((err) =>{
                console.log(err)
            })
    }
    return (
        <div className="w-full pb-2">
            <div className={styles.cr_HeadText + ' pb-2'}>
                Collaborators
            </div>
            <div className={collabStyle.tbox + ' w-full'}>
                <div className="w-full flex flex-row gap-1">
                    <div className = "w-11/12">

                    <TextField
                        onChange = {(e) =>{
                            setEmailInput(e.target.value)
                            
                        }}
                        placeholder = "Please input your collaborator's email."
                        fullWidth
                        value = {emailInput}
                    ></TextField>
                    </div>
                   
                    <button className = "" onClick={() => handleAdd()}>add</button>

             
                </div>
                <div className={collabStyle.ttable + ' w-full'}>
                    <div className={collabStyle.thead}>
                        <div className={collabStyle.theadtext}>#</div>
                        <div className={collabStyle.theadtext}>
                            Participant ID
                        </div>
                        <div className={collabStyle.theadtext}>
                            Participant Name
                        </div>
                        <div className={collabStyle.theadtext}>Action</div>
                    </div>
                    {cols.length > 0 &&
                        cols.map((co: Collaborator, index) => {
                            return (
                                <div className={collabStyle.tbody} key={index}>
                                    <div className={collabStyle.tbodytext}>
                                        {index + 1}
                                    </div>
                                    <div className={collabStyle.tbodytext}>
                                        {co.id}
                                    </div>
                                    <div className={collabStyle.tbodytext}>
                                        {co.name}
                                    </div>
                                    <button
                                        className=""
                                        onClick={() => removeCol(co)}
                                    >
                                        remove
                                    </button>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
