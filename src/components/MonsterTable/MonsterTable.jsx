import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MonsterTableItem from "../MonsterTableItem/MonsterTableItem";
import { Table, TableBody, TableHead, TableRow, TableContainer, TableCell, Paper, Typography } from "@mui/material";


export default function MonstersTable() {
    const dispatch = useDispatch();
    const monsters = useSelector((store) => store.monsters)
    console.log(monsters);

    useEffect(() => {
        dispatch({ type: "FETCH_MONSTERS" });
    }, [])

    return (
        <Paper style={{ border: "1px solid black", margin: "10px" }}>
            <TableContainer style={{ maxWidth: "90%", margin: "auto", padding: "10px" }}>
                <Table style={{ border: "2px solid black" }}>
                    <TableHead style={{ border: "2px solid black" }}>
                        <TableRow style={{ border: "2px solid black" }}>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Monster Name</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Size</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Hit Points</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Game Name</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Actions</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {monsters.map(monster => {
                            return (
                                <MonsterTableItem key={monster.id} monster={monster} />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
