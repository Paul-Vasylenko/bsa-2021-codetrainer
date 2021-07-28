import React from 'react'
import {Route , Switch, useRouteMatch} from 'react-router-dom'
import ProfileRouter from './ProfileRouter'
import Stats from './Stats'
import '../../styles/index.scss'

interface ProfileProps {
    match:{
        params:{
            name: string
        }
    }
}

export const Profile: React.FC<ProfileProps> = (props) => {
    const userName: string= props.match.params.name;
    const match = useRouteMatch();
    
    return (
        <>
        <div className="profile">
            <div className="profile-bio">
                sfdfds
            {/* top block here */}
            </div>
            <div className="profile-info">
                <ProfileRouter userName={userName}/>
                {/* <div>Hello!</div> */}
            </div>
        </div>
        <Switch>
            <Route path={match.url+"/stats"} exact>
                <Stats/>
            </Route> 
            <Route path={match.url} exact>
                <Stats/>
            </Route>
        </Switch>
</>
    )
}