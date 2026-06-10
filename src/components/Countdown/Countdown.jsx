import { useEffect, useState } from 'react';
import { weddingData } from '../../data/weddingData';

const calculate = () => {
  const diff = Math.max(0, new Date(weddingData.weddingDate) - new Date());
  return { Days: Math.floor(diff/86400000), Hours: Math.floor(diff/3600000)%24, Minutes: Math.floor(diff/60000)%60, Seconds: Math.floor(diff/1000)%60 };
};
export default function Countdown(){const [time,setTime]=useState(calculate());useEffect(()=>{const id=setInterval(()=>setTime(calculate()),1000);return()=>clearInterval(id)},[]);return <section className="bg-teal py-16 text-white"><div className="mx-auto max-w-5xl px-5 text-center"><p className="text-xs uppercase tracking-[.35em] text-champagne">Until forever</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Counting Down to “I Do”</h2><div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">{Object.entries(time).map(([label,value])=><div key={label} className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur"><strong className="block font-display text-4xl text-gold sm:text-5xl">{String(value).padStart(2,'0')}</strong><span className="text-xs uppercase tracking-[.22em] text-white/70">{label}</span></div>)}</div></div></section>}
