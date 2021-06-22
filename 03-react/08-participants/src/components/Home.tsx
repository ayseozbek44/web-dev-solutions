import * as React from "react";
import { Link } from "react-router-dom";


interface Contributor {
	login: string
	avatar_url: string
	id: number
}

export default function Home() {

	const [users, setUsers] = React.useState<Contributor[]>();
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
			{
				users ? users.map((user): JSX.Element => {

					return <div>
						<Link to={`/user/${user.login}`}>
							<img src={user.avatar_url} />
							<h3>{user.login}</h3></Link>
					</div>
				}) : 'We did not found any contributors'
			}

		</section>
	)
}