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
            <a className="icon-link" href={'https://calendar.google.com/calendar/u/0?cid=ZWgybmRuZm03cHQ0NjliMDRibnU4cGEzYWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'} target={'_blank'} rel={'noreferrer'}><span>Doers calendar</span><IconCalendar/></a>
            <a className="icon-link" href={'https://calendar.google.com/calendar/embed?src=c_q2lat9o2nkan8kub4si5hbh844%40group.calendar.google.com'} target={'_blank'} rel={'noreferrer'}><span>Contributor calendar</span><IconCalendar/></a>
        </footer>);
    }
}

export default Footer;
