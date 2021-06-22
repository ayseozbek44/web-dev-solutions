import * as React from "react";
import { useParams } from "react-router-dom";


interface UserInfo {
	login: string
	avatar_url: string
	id: number
	html_url: string
}

export default function User() {
	const [users, setUsers] = React.useState<UserInfo[]>();
	React.useEffect(() => {
		fetch('https://api.github.com/repos/Powercoders-Switzerland/2021-1-web-dev/contributors')
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setUsers(data)
			})
	}, [])

	return (
		<section>
			<h1>User Information</h1>
			{
				users ? users.map((user): JSX.Element => {
					
					return <div>
						
						<img src={user.avatar_url} />
						<h3>{user.login}</h3>
						<h4>{user.html_url}</h4>
					</div>
				}) : 'We did not found any contributors'
			}
		</section>
	)
}