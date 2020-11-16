import React, {useRef, useEffect}from "react";

import ChannelMessage , {Mention}from  '../channelmessage';

import  {Container,Messages,InputWrapper,Input,InputIcon} from  './styles';



const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messageRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);

    return (<Container>
        <Messages ref={messageRef}>
            {Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage key={n}author="Jhowson Babie" date="15/11/2020" content="Hoje é um grande dia"/>
                ))}

            <ChannelMessage author="Gorgo Nelson" date="15/11/2020" content={
                <>
                    <Mention>@Jhownson Babie</Mention>,me chama pra programar
                </>
            }
                hasMention
                isBot
            />

        </Messages>

        <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre"/>
            <InputIcon/>
        </InputWrapper>

    </Container>

) ;


};

export default  ChannelData;
