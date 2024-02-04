// 👇 import local font
import {get} from "http";
import localFont from "next/font/local";

//👇 Configure our local font object
const Baby = localFont({src: "../fonts/Baby.otf"});
const BEBAS = localFont({src: "../fonts/BEBAS.otf"});
const BROOKLYNBOLD = localFont({src: "../fonts/BROOKLYNBOLD.otf"});
const BROOKLYN = localFont({src: "../fonts/BROOKLYN.otf"});
const Honey = localFont({src: "../fonts/Honey.otf"});
const Alex = localFont({src: "../fonts/Alex.ttf"});
const Allura = localFont({src: "../fonts/Allura.ttf"});
const AMATIC = localFont({src: "../fonts/AMATIC.ttf"});
const Augustine = localFont({src: "../fonts/Augustine.ttf"});
const BlackJack = localFont({src: "../fonts/BlackJack.ttf"});
const BrittanySignature = localFont({src: "../fonts/BrittanySignature.ttf"});
const CHAMPAGNE = localFont({src: "../fonts/CHAMPAGNE.ttf"});
const Clarity = localFont({src: "../fonts/Clarity.ttf"});
const EVERAFTER = localFont({src: "../fonts/EVERAFTER.ttf"});
const JOLLY = localFont({src: "../fonts/JOLLY.ttf"});
const LEMON = localFont({src: "../fonts/LEMON.ttf"});
const LOVEME = localFont({src: "../fonts/LOVEME.ttf"});
const Madina = localFont({src: "../fonts/Madina.ttf"});
const Magnolia = localFont({src: "../fonts/Magnolia.ttf"});
const Manda = localFont({src: "../fonts/Manda.otf"});
const Mermaid = localFont({src: "../fonts/Mermaid.ttf"});
const Noelan = localFont({src: "../fonts/Noelan.ttf"});
const October = localFont({src: "../fonts/October.ttf"});
const OctoberMoon = localFont({src: "../fonts/OctoberMoon.otf"});
const Olivier = localFont({src: "../fonts/Olivier.ttf"});
const OSTRICH = localFont({src: "../fonts/OSTRICH.otf"});
const PLAYFAIR = localFont({src: "../fonts/PLAYFAIR.ttf"});
const PriscillaScript = localFont({src: "../fonts/PriscillaScript.otf"});
const SEVENSIXTEEN = localFont({src: "../fonts/SEVENSIXTEEN.ttf"});
const Shoreline = localFont({src: "../fonts/Shoreline.otf"});
const SIMPLICITY = localFont({src: "../fonts/SIMPLICITY.ttf"});
const SmoothStone = localFont({src: "../fonts/SmoothStone.otf"});
const Stardom = localFont({src: "../fonts/Stardom.ttf"});
const SUNRISE = localFont({src: "../fonts/SUNRISE.otf"});
const Valentica = localFont({src: "../fonts/Valentica.ttf"});
const Wild = localFont({src: "../fonts/Wild.ttf"});
const Wildcat = localFont({src: "../fonts/Wildcat.ttf"});

// export default function Header({ children }) {
//   //👇 Add our local font as a className
//   return <h1 className={`${myFont.className} ${styles.header}`}>{children}</h1>
// }

const getFontClassName = (font) => {
  switch (font) {
    case "Baby":
      return Baby.className;
    case "BEBAS":
      return BEBAS.className;
    case "BROOKLYNBOLD":
      return BROOKLYNBOLD.className;
    case "BROOKLYN":
      return BROOKLYN.className;
    case "Honey":
      return Honey.className;
    case "Alex":
      return Alex.className;
    case "Allura":
      return Allura.className;
    case "AMATIC":
      return AMATIC.className;
    case "Augustine":
      return Augustine.className;
    case "BlackJack":
      return BlackJack.className;
    case "BrittanySignature":
      return BrittanySignature.className;
    case "CHAMPAGNE":
      return CHAMPAGNE.className;
    case "Clarity":
      return Clarity.className;
    case "EVERAFTER":
      return EVERAFTER.className;
    case "JOLLY":
      return JOLLY.className;
    case "LEMON":
      return LEMON.className;
    case "LOVEME":
      return LOVEME.className;
    case "Madina":
      return Madina.className;
    case "Magnolia":
      return Magnolia.className;
    case "Manda":
      return Manda.className;
    case "Mermaid":
      return Mermaid.className;
    case "Noelan":
      return Noelan.className;
    case "October":
      return October.className;
    case "OctoberMoon":
      return OctoberMoon.className;
    case "Olivier":
      return Olivier.className;
    case "OSTRICH":
      return OSTRICH.className;
    case "PLAYFAIR":
      return PLAYFAIR.className;
    case "PriscillaScript":
      return PriscillaScript.className;
    case "SEVENSIXTEEN":
      return SEVENSIXTEEN.className;
    case "Shoreline":
      return Shoreline.className;
    case "SIMPLICITY":
      return SIMPLICITY.className;
    case "SmoothStone":
      return SmoothStone.className;
    case "Stardom":
      return Stardom.className;
    case "SUNRISE":
      return SUNRISE.className;
    case "Valentica":
      return Valentica.className;
    case "Wild":
      return Wild.className;
    default:
      return "font-sans";
  }
};

const FontCard = ({value, fontName}) => {
  const fontClassName = getFontClassName(fontName);
  return (
    <div className='flex flex-col align-top space-x-2 min-h-20 bg-white rounded-xl shadow-lg p-2'>
      <p className={` flex items-start justify-end text-xs font-semi `}>
        {fontName}
      </p>
      <div>
        <p className={`${getFontClassName(fontName)} p-4  text-lg break-words`}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default FontCard;
