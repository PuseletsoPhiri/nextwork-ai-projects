'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, LockKeyhole, Minus, Plus, ShieldCheck, Sparkles, X } from 'lucide-react'

const product = {
  name: 'Orbit Dock',
  eyebrow: '01 / DESK ESSENTIALS',
  description: 'A magnetic charging dock that keeps your workspace in flow. One beautiful place for every device.',
  price: 129,
  colors: ['#202329', '#d9d2c6', '#b6c1f5'],
}

export default function Page() {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const total = product.price * quantity

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1eb] text-[#17181b]">
      <header className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-[#17181b] text-[#f4f1eb]"><Sparkles size={15} /></span>
          <span className="text-[15px] font-semibold tracking-[-0.03em]">orbit / works</span>
        </div>
        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.14em] text-black/55 md:flex">
          <a href="#product" className="transition-colors hover:text-black">Product</a>
          <a href="#details" className="transition-colors hover:text-black">Details</a>
          <a href="#support" className="transition-colors hover:text-black">Support</a>
        </nav>
        <button onClick={() => setCheckoutOpen(true)} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em]">
          Cart <span className="grid size-6 place-items-center rounded-full bg-[#d6f04a] text-[10px]">{quantity}</span>
        </button>
      </header>

      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] grid-cols-1 gap-8 px-6 pb-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-12 lg:pb-10">
        <section id="product" className="relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#dce6fd] p-7 sm:p-10 lg:min-h-0 lg:p-12">
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">{product.eyebrow}</p>
              <h1 className="max-w-[560px] text-[clamp(3rem,6.7vw,6.9rem)] font-semibold leading-[0.88] tracking-[-0.075em]">Work<br /><span className="text-[#596bff]">better.</span></h1>
            </div>
            <div className="hidden text-right text-[11px] uppercase leading-[1.5] tracking-[0.16em] text-black/45 sm:block">Engineered for<br />the in-between</div>
          </div>

          <div className="relative mx-auto flex w-full flex-1 items-center justify-center py-8 lg:py-3">
            <div className="absolute size-[250px] rounded-full bg-[#b6c1f5]/60 blur-2xl sm:size-[350px]" />
            <div className="relative h-[210px] w-[300px] rotate-[-11deg] rounded-[38px] border border-white/60 bg-gradient-to-br from-[#4a5366] via-[#222830] to-[#111318] shadow-[18px_30px_40px_rgba(34,42,61,0.24)] sm:h-[255px] sm:w-[370px] sm:rounded-[48px]">
              <div className="absolute inset-[13px] rounded-[28px] border border-white/10 bg-[#1b1f25] sm:inset-[16px] sm:rounded-[36px]" />
              <div className="absolute left-[28px] top-[28px] size-3 rounded-full bg-[#d6f04a] shadow-[0_0_16px_#d6f04a] sm:left-[40px] sm:top-[40px]" />
              <div className="absolute bottom-[28px] left-[28px] flex gap-1.5 sm:bottom-[40px] sm:left-[40px]"><span className="h-1 w-9 rounded-full bg-white/20" /><span className="h-1 w-5 rounded-full bg-white/10" /></div>
              <div className="absolute right-[32px] top-[28px] font-mono text-[8px] uppercase tracking-[0.18em] text-white/30 sm:right-[42px] sm:top-[40px]">ORBIT 01</div>
              <div className="absolute bottom-[-30px] left-1/2 h-9 w-[140px] -translate-x-1/2 rounded-b-[24px] bg-[#161a20] shadow-[0_12px_10px_rgba(25,31,44,0.18)] sm:bottom-[-38px] sm:h-12 sm:w-[190px]" />
            </div>
          </div>

          <div className="relative z-10 flex items-end justify-between gap-5">
            <div className="max-w-[320px]">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#596bff]">The Orbit Dock</p>
              <p className="text-sm leading-relaxed text-black/60">Less friction. More flow. A quiet little upgrade to the way you work.</p>
            </div>
            <span className="hidden size-12 shrink-0 place-items-center rounded-full border border-black/10 sm:grid"><ArrowRight size={17} /></span>
          </div>
        </section>

        <section id="details" className="flex flex-col justify-between py-2 lg:py-5">
          <div>
            <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/40"><span className="size-1.5 rounded-full bg-[#596bff]" /> Available now</div>
            <h2 className="max-w-[540px] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl">A small thing<br />that makes a<br /><span className="text-black/35">big difference.</span></h2>
            <p className="mt-7 max-w-[400px] text-[15px] leading-relaxed text-black/55">{product.description}</p>
            <div className="mt-8 grid max-w-[460px] grid-cols-3 gap-3 border-y border-black/10 py-5">
              {[['01', 'Magnetic hold'], ['02', 'Fast charging'], ['03', 'Zero clutter']].map(([number, label]) => <div key={number}><p className="font-mono text-[10px] text-black/30">{number}</p><p className="mt-2 text-xs font-medium">{label}</p></div>)}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-white/65 p-5 backdrop-blur-sm sm:p-6">
            <div className="flex items-start justify-between">
              <div><p className="text-xl font-semibold tracking-[-0.04em]">{product.name}</p><p className="mt-1 text-xs text-black/45">Includes magnetic base + USB-C cable</p></div>
              <p className="text-xl font-semibold tracking-[-0.04em]">${product.price}</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">Finish</p><div className="flex gap-2">{product.colors.map((color) => <button key={color} aria-label={`Select ${color} finish`} onClick={() => setSelectedColor(color)} className={`size-7 rounded-full border-2 border-white shadow-sm transition ${selectedColor === color ? 'ring-2 ring-[#596bff] ring-offset-2 ring-offset-white' : ''}`} style={{ backgroundColor: color }} />)}</div></div>
              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-2 py-1.5"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="grid size-6 place-items-center rounded-full hover:bg-black/5"><Minus size={12} /></button><span className="w-5 text-center text-xs font-semibold">{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)} className="grid size-6 place-items-center rounded-full hover:bg-black/5"><Plus size={12} /></button></div>
            </div>
            <button onClick={() => setCheckoutOpen(true)} className="mt-6 flex h-14 w-full items-center justify-between rounded-xl bg-[#17181b] px-5 text-sm font-semibold text-white transition hover:bg-[#596bff]"><span>Buy now</span><span className="flex items-center gap-2">${total} <ArrowRight size={16} /></span></button>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-black/40"><ShieldCheck size={13} /> Secure checkout · Ships tomorrow</div>
          </div>
        </section>
      </div>

      {checkoutOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#17181b]/35 p-3 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Checkout">
        <div className="w-full max-w-[520px] rounded-[24px] bg-[#f8f7f4] p-6 shadow-2xl sm:p-8">
          <div className="flex items-start justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#596bff]">Checkout</p><h3 className="mt-2 text-3xl font-semibold tracking-[-0.06em]">Almost yours.</h3></div><button aria-label="Close checkout" onClick={() => setCheckoutOpen(false)} className="grid size-9 place-items-center rounded-full bg-black/5"><X size={17} /></button></div>
          {submitted ? <div className="flex flex-col items-center py-14 text-center"><span className="grid size-14 place-items-center rounded-full bg-[#d6f04a]"><Check /></span><h4 className="mt-5 text-2xl font-semibold tracking-[-0.05em]">Order reserved.</h4><p className="mt-2 max-w-[270px] text-sm leading-relaxed text-black/50">This prototype is ready for a real payment integration when you are.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-7 flex flex-col gap-4"><label className="text-xs font-medium">Email<input required type="email" placeholder="you@company.com" className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#596bff]" /></label><label className="text-xs font-medium">Card details<div className="mt-2 flex h-12 items-center rounded-xl border border-black/10 bg-white px-4"><input required inputMode="numeric" placeholder="4242 4242 4242 4242" className="min-w-0 flex-1 bg-transparent text-sm outline-none" /><span className="font-mono text-[10px] text-black/30">VISA</span></div></label><div className="grid grid-cols-2 gap-3"><label className="text-xs font-medium">Expiry<input required placeholder="MM / YY" className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#596bff]" /></label><label className="text-xs font-medium">CVC<input required placeholder="123" className="mt-2 h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-[#596bff]" /></label></div><button type="submit" className="mt-2 flex h-14 items-center justify-center gap-2 rounded-xl bg-[#17181b] text-sm font-semibold text-white transition hover:bg-[#596bff]">Pay ${total} <LockKeyhole size={14} /></button><p className="text-center text-[10px] text-black/35">Demo checkout · Your card will not be charged</p></form>}
        </div>
      </div>}
    </main>
  )
}
