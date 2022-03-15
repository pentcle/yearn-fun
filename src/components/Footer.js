import React, {Component} from "react"

import IconTwitter from './icons/IconTwitter';
import IconGithub from './icons/IconGithub';
import IconYearnFooter from './icons/IconYearnFooter';
import IconCalendar from "./icons/IconCalendar";

class Footer extends Component {
    render() {
        return (<footer>
            <a className="icon-link" href={'https://twitter.com/iearnfinance'} target={'_blank'} rel={'noreferrer'}><span>Twitter</span><IconTwitter/></a>
            <a className="icon-link" href={'https://github.com/pentcle/yearn-fun'} target={'_blank'} rel={'noreferrer'}><span>Github</span><IconGithub/></a>
            <a className="icon-link" href={'https://yearn.finance'} target={'_blank'} rel={'noreferrer'}><span>Yearn</span><IconYearnFooter/></a>
            <a className="icon-link" href={'https://calendar.google.com/calendar/u/0?cid=ZWgybmRuZm03cHQ0NjliMDRibnU4cGEzYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'} target={'_blank'} rel={'noreferrer'}><span>Calendar</span><IconCalendar/></a>
        </footer>);
    }
}

export default Footer;
