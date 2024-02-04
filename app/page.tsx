"use client";
import {useState} from "react";
import FontCard from "./components/FontCard.react";

export default function Home() {
  // Example font data, you would replace this with your actual font data
  const fonts = [
    {name: "Alex", type: "script", file: "Alex.ttf"},
    {name: "Allura", type: "script", file: "Allura.ttf"},
    {name: "AMATIC", type: "standard", file: "AMATIC.ttf"},
    {name: "Augustine", type: "script", file: "Augustine.ttf"},
    {name: "Baby", type: "script", file: "Baby.otf"},
    {name: "BEBAS", type: "standard", file: "Buttery.otf"},
    {name: "BlackJack", type: "script", file: "BlackJack.ttf"},
    {name: "BrittanySignature", type: "script", file: "BrittanySignature.ttf"},
    {name: "BROOKLYN", type: "standard", file: "BROOKLYN.ttf"},
    {name: "BROOKLYNBOLD", type: "standard", file: "BrooklynBold.ttf"},
    {name: "CHAMPAGNE", type: "standard", file: "CHAMPAGNE.ttf"},
    {name: "Clarity", type: "script", file: "Clarity.ttf"},
    {name: "EVERAFTER", type: "standard", file: "EVERAFTER.ttf"},
    {name: "Honey", type: "script", file: "Honey.ttf"},
    {name: "JOLLY", type: "standard", file: "JOLLY.ttf"},
    {name: "LEMON", type: "standard", file: "LEMON.ttf"},
    {name: "LOVEME", type: "standard", file: "LOVEME.ttf"},
    {name: "Madina", type: "script", file: "Madina.ttf"},
    {name: "Magnolia", type: "script", file: "Magnolia.ttf"},
    {name: "Manda", type: "script", file: "Manda.ttf"},
    {name: "Mermaid", type: "script", file: "Mermaid.ttf"},
    {name: "Noelan", type: "script", file: "Noelan.ttf"},
    {name: "October", type: "script", file: "October.ttf"},
    {name: "OctoberMoon", type: "script", file: "OctoberMoon.ttf"},
    {name: "Olivier", type: "script", file: "Olivier.ttf"},
    {name: "OSTRICH", type: "standard", file: "OSTRICH.ttf"},
    {name: "PLAYFAIR", type: "standard", file: "PLAYFAIR.ttf"},
    {name: "PriscillaScript", type: "script", file: "PriscillaScript.ttf"},
    {name: "SEVENSIXTEEN", type: "standard", file: "SEVENSIXTEEN.ttf"},
    {name: "Shoreline", type: "script", file: "Shoreline.ttf"},
    {name: "SIMPLICITY", type: "standard", file: "SIMPLICITY.ttf"},
    {name: "SmoothStone", type: "script", file: "SmoothStone.ttf"},
    {name: "Stardom", type: "script", file: "Stardom.ttf"},
    {name: "SUNRISE", type: "standard", file: "SUNRISE.ttf"},
    {name: "Valentica", type: "script", file: "Valentica.ttf"},
    {name: "Wild", type: "standard", file: "Wild.ttf"},
    {name: "Wildcat", type: "standard", file: "Wild.ttf"},

    // ... other fonts from ./fonts folder

    // ... other fonts from ./fonts folder
  ];
  const [scriptFontText, setScriptFontText] = useState("");
  const [standardFontText, setStandardFontText] = useState("");

  return (
    <main className=''>
      <div className='grid grid-cols-2 h-full'>
        <div className='script flex flex-col items-center space-y-5 px-2'>
          <h1 className=' text-2xl font-bold'>Script Fonts</h1>
          <input
            className='p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out'
            onChange={(e) => setScriptFontText(e.target.value)}
            type='text'
            name=''
            placeholder='Enter text here...'
            id=''
          />
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {fonts.map(
              (font, index) =>
                font.type === "script" && (
                  <FontCard
                    key={index}
                    value={scriptFontText}
                    fontName={font.name}
                  />
                )
            )}
          </div>
        </div>
        <div className=' standard flex flex-col items-center space-y-5 px-2'>
          <h1 className='text-2xl font-bold'>Standard Fonts</h1>
          <input
            className='p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out'
            onChange={(e) => setStandardFontText(e.target.value)}
            type='text'
            name=''
            placeholder='Enter text here...'
            id=''
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {fonts.map(
              (font, index) =>
                font.type === "standard" && (
                  <FontCard
                    key={index}
                    value={standardFontText}
                    fontName={font.name}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
