import React from 'react';

function Icon({className}) {
    return (<svg className={className} width={'24'} height={'24'} viewBox={'0 0 24 24'} fill={'none'}
                 xmlns={'http://www.w3.org/2000/svg'}>
        <path background-color={'white'} fill={'currentcolor'} fillRule={'evenodd'} clipRule={'evenodd'}
              d="M6.6,6.8h10.9v1.6H6.6V6.8z M6.6,9.9h10.9v7.8H6.6V9.9z M14.3,13.1h1.6v-1.6h-1.6V13.1z M14.3,16.2h1.6v-1.6
	h-1.6V16.2z M11.2,13.1h1.6v-1.6h-1.6V13.1z M11.2,16.2h1.6v-1.6h-1.6V16.2z M8.1,13.1h1.6v-1.6H8.1V13.1z M8.1,16.2h1.6v-1.6H8.1
	V16.2z M24,12c0,6.6-5.4,12-12,12S0,18.6,0,12S5.4,0,12,0S24,5.4,24,12z M19,6.8c0-0.9-0.7-1.6-1.6-1.6h-0.8V3.7h-1.6v1.6H8.9V3.7
	H7.3v1.6H6.6C5.7,5.3,5,6,5,6.8l0,10.9c0,0.9,0.7,1.6,1.6,1.6h10.9c0.9,0,1.6-0.7,1.6-1.6V6.8z"/>
    </svg>);
}

export default Icon;