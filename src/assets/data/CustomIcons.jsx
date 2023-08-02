import { withBaseIcon } from 'react-icons-kit'
import { Icon } from 'react-icons-kit';
import {home} from 'react-icons-kit/feather/home';
import {user} from 'react-icons-kit/feather/user';
import {folder} from 'react-icons-kit/feather/folder';
import {linkedin} from 'react-icons-kit/feather/linkedin';
import {github} from 'react-icons-kit/feather/github';
import {mail} from 'react-icons-kit/feather/mail';
import {messageCircle} from 'react-icons-kit/feather/messageCircle';
import {menu} from 'react-icons-kit/feather/menu';

import {socialHtml5} from 'react-icons-kit/ionicons/socialHtml5';
import {socialJavascript} from 'react-icons-kit/ionicons/socialJavascript';
import {socialCss3} from 'react-icons-kit/ionicons/socialCss3';

const CustomIcon = withBaseIcon({ size: 20, style: { color: 'white' } });
export const Home = () => <CustomIcon icon={home} />
export const User = () => <CustomIcon icon={user} />
export const Folder = () => <CustomIcon icon={folder} />
export const Linkedin = () => <CustomIcon icon={linkedin} />
export const Github = () => <CustomIcon icon={github} />
export const Mail = () => <CustomIcon icon={mail} />
export const MessageCircle = () => <CustomIcon icon={messageCircle} />
export const Menu = () => <CustomIcon icon={menu} />

const CustomIconAbout = withBaseIcon({ size: 15, style: { color: 'white', paddingRight: '10px'} });
export const Html = () => <CustomIconAbout icon={socialHtml5} />
export const CssIcon = () => <CustomIconAbout icon={socialCss3} />
export const JavaScript = () => <CustomIconAbout icon={socialJavascript} />