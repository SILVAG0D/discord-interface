import React from "react";

import  {Grid} from  './styles';

import ServerList from "../serverlist";
import ServerName from "../servername";
import ChannelInfo from "../channelinfo";
import ChannelList from "../channellist";
import UserInfo from "../userinfo";
import UserList from "../userlist";
import ChannelData from "../channeldata";



const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo/>
            <ChannelList/>
            <UserInfo/>
            <ChannelData/>
            <UserList/>

        </Grid>
    );


};

export default  Layout;
