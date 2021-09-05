import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/op1.PNG';
import GreenCtgImg from '../images/mb-1.PNG';
import CoinTrackerImg from '../images/yt-2.PNG';

const projects = [
  {
    id: uuidv4(),
    name: 'Lung Tumor Detection 👨🏻‍⚕️',
    desc:
      'An Python application used to find whether tumor is present using X-Ray. I developed the Gui and machine Learning model using Python.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Magic Blanket 🧙🏻‍♂️',
    desc:
      'This is a fun program, which makes "You Invisible". This is developed using Python and openCV.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Youtube Video Downloader ⬇',
    desc:
      'Using this website you can download any youtube video. It is built using Python and Django.',
    img: CoinTrackerImg,
  },
];

export default projects;
