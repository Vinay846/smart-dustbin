import React from 'react'
import { UserCheck, Trash2, Gift } from 'react-feather';
import {TopSection, BottomSection} from '../../components/Styles/styles';

function Home() {
    return (
        <>
        <TopSection>
            <h1>Save Environment</h1>
            <h2>By Earning Rewards</h2>
        </TopSection>
        <BottomSection>
            <div>
                <UserCheck size={200} strokeWidth={0.2}/>
                <p>MAKE ACCOUNTS WITH US</p>
            </div>
            <div>
                <Trash2 size={200} strokeWidth={0.2} fillOpacity="10%"/>
                <p>USE OUR SMARTDUSTBIN</p>
            </div>
            <div>
                <Gift size={200} strokeWidth={0.2}/>
                <p>EARN POINTS</p>
            </div>
        </BottomSection>
        </>
    )
}

export default Home;