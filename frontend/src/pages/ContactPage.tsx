import { ActionButton } from '../components/ActionButton'

export function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Contact</p>
        <h1 className="mt-3 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f5f0e6] sm:text-5xl">Tell us what you’re planning.</h1>
      </header>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-6 sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">General inquiries</p>
          <ul className="mt-5 space-y-4 text-base text-[#aaa49a]">
            <li><span className="text-[#f5f0e6]">Email:</span> hello@mysterbotz.events</li>
            <li><span className="text-[#f5f0e6]">Phone:</span> +63 (000) 000-0000</li>
            <li><span className="text-[#f5f0e6]">Location:</span> Philippines</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#151515] p-6 sm:p-8">
          <p className="text-base leading-8 text-[#aaa49a] sm:text-lg">
            We work best with clear objectives, timing, and a few important details. Send your brief and we’ll respond with the next step.
          </p>
          <div className="mt-7">
            <ActionButton to="/inquire">Send an Inquiry</ActionButton>
          </div>
        </div>
      </div>
    </main>
  )
}
