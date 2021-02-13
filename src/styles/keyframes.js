import { keyframes } from '@emotion/react';

export const slideOutContainer = keyframes`
    0% {
        height: 100vh;
    }
    40% {
        height: 100vh;
    }
    100% {
        height: 0%;
    }
`;

export const blinking = keyframes`
    from, to { 
        border-color: transparent; 
    }
    50% { 
        border-color: white; 
    }
`;

export const typing = keyframes`
    0% { 
        width: 100%; 
    }
    50% {
        width: 0; 
    }
    100% { 
        width: 0; 
    }
`;

export const loading = keyframes`
    0% {
        content: '| ';
    }
    33% {
        content: '/ ';
    }
    66% {
        content: '- ';
    }
    100% {
        content: '﹨ ';
    }
`;

export const textChange = keyframes`
    0% {
        content: 'npm i -g Lmpsk ';
    }
    0% {
        content: 'preparePortfolio: gathering info for the ultimate start ';
    }
    5% {
        content: 'preparePortfolio: memory for file entries succesfully allocated ';
    }
    10% {
        content: 'preparePortfolio: grabbing data from google sh(y)eets pog... ';
    }
    15% {
        content: 'preparePortfolio: searching github projects ';
    }
    20% {
        content: 'preparePortfolio: downloading more RAM ';
    }
    25% {
        content: 'preparePortfolio: no please dont study this! - Stop reading NOW ';
    }
    30% {
        content: 'preparePortfolio: i actually have no clue how npm install system works '; 
    }
    35% {
        content: 'preparePortfolio: just tought it looked cool ';
    }
    40% {
        content: 'preparePortfolio: verifiing GPG signature ';
    }
    45% {
        content: 'preparePortfolio: dG90YWxseSBsZWRnaXQgc2lnbmF0dXJl ';
    }
    50% {
        content: 'preparePortfolio: OK ';
    }
    55% {
        content: 'preparePortfolio: OK '; 
    }
    60% {
        content: 'preparePortfolio: ALL TASKS DONE ';
    }
    65% {
        content: 'linkAccounts: Linking to github account ';
    }
    70% {
        content: 'linkAccounts: Linking to gitlab account ';
    }
    75% {
        content: 'linkAccounts: Linking to bitbucket account ';
    }
    80% {
        content: 'linkAccounts: Linking to email account ';
    }
    85% {
        content: 'linkAccounts: jk this is all statically generated ';
    }
    90% {
        content: 'finalize: Have a nice day ';
    } 
    95% {
        content: 'finalize: Have a nice day ';
    }
    100% {
        content: 'finalize: Have a nice day ';
    }
`;

export const progressBar = keyframes`
    0% {
        content: '[..........] ';
    }
    10% {
        content: '[█.........] ';
    }
    20% {
        content: '[██........] ';
    }
    30% {
        content: '[███.......] ';
    }
    40% {
        content: '[████......] ';
    }
    50% {
        content: '[█████.....] ';
    }
    60% {
        content: '[██████....] ';
    }
    70% {
        content: '[███████...] ';
    }
    80% {
        content: '[████████..] ';
    }
    90% {
        content: '[█████████.] ';
    }
    100% {
        content: '[██████████] ';
    }
`;

export const bringToTop = keyframes`
from {
    top: 50%;
} 
to {
    top: 3%;
}
`;

export const enableScroll = keyframes`
from {
    overflow: hidden;
}
to {
    overflow: visible;
}
`;

export const setIntroText = keyframes`
    from {
        content: 'npm i -g Lmpsk';
    }
    to {
        content: 'npm i -g Lmpsk';
    }
`;
