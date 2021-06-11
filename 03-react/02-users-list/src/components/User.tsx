import * as React from "react";

// import restaurantPassport from 'C:/Users/helin/Documents/GitHub/web-dev-solutions/03-react/02-users-list/img/img_avatar1.jpg'; 

export interface UsersInfo {
    id: number;
    first_name: string;
    last_name: string;
	age:number;
	city:string;
	ip:string;
	isAdmin:boolean;
    avatar:string;
}

interface UserProps {
    login: UsersInfo;
}

export default function User(props: UserProps) {
    return (
        <div>
            <p>{props.login.first_name}</p>
			<p>{props.login.last_name}</p>
			<p>{props.login.age}</p>
			<p>{props.login.city}</p>
			<p>{props.login.isAdmin}</p>
            <img src={props.login.avatar}/>
        </div>
    );
}