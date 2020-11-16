import React from "react";

import ChannelButton from "../channelbutton";

import  {Container,Category,AddCategoryIcon} from  './styles';


const ChannelList: React.FC = () => {
    return ( <Container>
        <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon/>
        </Category>

           <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="Os cria"/>
            <ChannelButton channelName="Estudo"/>
            <ChannelButton channelName="Programming"/>
            <ChannelButton channelName="Only english"/>


        </Container>
    );


};

export default  ChannelList;
