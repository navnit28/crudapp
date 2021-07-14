import { getUsers } from "../Service/api";
import { useEffect,useState } from "react";
import {
    TableCell,
    TableRow,
    TableHead,
    Table,
    TableBody,
} from "@material-ui/core";
const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response);
        setUsers(response.data);
    };
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>                
                ))}
            </TableBody>
        </Table>
    );
};
export default AllUsers;
