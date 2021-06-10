import * as React from "react";

export interface UsersInfo {
    id: number;
    first_name: string;
    last_name: string;
	age:number;
	city:string;
	ip:string;
	isAdmin:boolean;
}

interface UserProps {
    login: UsersInfo;
}

export default function Login(props: UserProps) {
    return (
        <div>
            <p>{props.login.first_name}</p>
			<p>{props.login.last_name}</p>
			<p>{props.login.age}</p>
			<p>{props.login.city}</p>
			<p>{props.login.isAdmin}</p>
			
        </div>
    );
}