import { useState } from 'react'
import type { FormEvent } from 'react'
import { api } from '../services/api'

const initialForm = {
  client_name: '',
  email: '',
  phone: '',
  event_type: '',
  event_date: '',
  event_location: '',
  guest_count: '',
  budget_min: '',
  budget_max: '',
  services_needed: '',
  message: '',
}

export function InquiryPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!form.client_name.trim()) nextErrors.client_name = 'Please enter your full name.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (!form.phone.trim()) nextErrors.phone = 'Mobile number is required.'
    if (!form.event_type.trim()) nextErrors.event_type = 'Select an event type.'
    if (!form.event_date) nextErrors.event_date = 'Event date is required.'
    if (!form.event_location.trim()) nextErrors.event_location = 'Event location is required.'
    if (!form.guest_count || Number(form.guest_count) < 1) nextErrors.guest_count = 'Guest count must be at least 1.'
    if (!form.budget_min || Number(form.budget_min) < 0) nextErrors.budget_min = 'Budget minimum is required.'
    if (!form.budget_max || Number(form.budget_max) < Number(form.budget_min || 0)) nextErrors.budget_max = 'Budget maximum must be valid.'
    if (!form.services_needed.trim()) nextErrors.services_needed = 'Services needed is required.'
    if (!form.message.trim() || form.message.trim().length < 10) nextErrors.message = 'Please add a few more details about your event.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setSubmitMessage('')
    setIsSuccess(false)
    if (!validate()) return

    setIsSubmitting(true)
    try {
      await api.submitInquiry({
        ...form,
        guest_count: Number(form.guest_count),
        budget_min: Number(form.budget_min),
        budget_max: Number(form.budget_max),
      })
      setSubmitMessage('Your inquiry has been received. We will be in touch soon.')
      setIsSuccess(true)
      setForm(initialForm)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Something went wrong.'
      setSubmitMessage(message)
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-8 max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#c8a96b]">Plan your event</p>
        <h1 className="mt-3 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#f5f0e6] sm:text-5xl">Share a few details and we’ll take it from there.</h1>
      </header>

      <form onSubmit={handleSubmit} className="grid gap-6 rounded-[2rem] border border-white/10 bg-[#151515] p-5 sm:p-8" noValidate>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96b]">About you</p>
          </div>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Full Name
            <input className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="client_name" value={form.client_name} onChange={handleChange} aria-invalid={Boolean(errors.client_name)} />
            {errors.client_name && <span className="text-sm text-[#f2b89a]">{errors.client_name}</span>}
          </label>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Email
            <input type="email" className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="email" value={form.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
            {errors.email && <span className="text-sm text-[#f2b89a]">{errors.email}</span>}
          </label>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Mobile Number
            <input type="tel" className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="phone" value={form.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} />
            {errors.phone && <span className="text-sm text-[#f2b89a]">{errors.phone}</span>}
          </label>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Event Type
            <select className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="event_type" value={form.event_type} onChange={handleChange} aria-invalid={Boolean(errors.event_type)}>
              <option value="">Select</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate">Corporate</option>
              <option value="Conference">Conference</option>
              <option value="Birthday">Birthday</option>
              <option value="Debut">Debut</option>
              <option value="Product Launch">Product Launch</option>
              <option value="Private Event">Private Event</option>
              <option value="Institutional Program">Institutional Program</option>
            </select>
            {errors.event_type && <span className="text-sm text-[#f2b89a]">{errors.event_type}</span>}
          </label>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Event Date
            <input type="date" className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="event_date" value={form.event_date} onChange={handleChange} aria-invalid={Boolean(errors.event_date)} />
            {errors.event_date && <span className="text-sm text-[#f2b89a]">{errors.event_date}</span>}
          </label>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Event Location
            <input className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="event_location" value={form.event_location} onChange={handleChange} aria-invalid={Boolean(errors.event_location)} />
            {errors.event_location && <span className="text-sm text-[#f2b89a]">{errors.event_location}</span>}
          </label>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Estimated Guest Count
            <input type="number" min="1" className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="guest_count" value={form.guest_count} onChange={handleChange} aria-invalid={Boolean(errors.guest_count)} />
            {errors.guest_count && <span className="text-sm text-[#f2b89a]">{errors.guest_count}</span>}
          </label>

          <label className="grid gap-2 text-sm text-[#f5f0e6]">
            Estimated Budget
            <div className="grid grid-cols-2 gap-3">
              <input type="number" min="0" placeholder="Min" className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
                name="budget_min" value={form.budget_min} onChange={handleChange} aria-invalid={Boolean(errors.budget_min)} />
              <input type="number" min="0" placeholder="Max" className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
                name="budget_max" value={form.budget_max} onChange={handleChange} aria-invalid={Boolean(errors.budget_max)} />
            </div>
            {(errors.budget_min || errors.budget_max) && <span className="text-sm text-[#f2b89a]">{errors.budget_min || errors.budget_max}</span>}
          </label>

          <div className="md:col-span-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#c8a96b]">Planning</p>
          </div>

          <label className="md:col-span-2 grid gap-2 text-sm text-[#f5f0e6]">
            Services Needed
            <input className="min-h-12 rounded-xl border border-white/10 bg-[#0d0d0d] px-3 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="services_needed" value={form.services_needed} onChange={handleChange} aria-invalid={Boolean(errors.services_needed)} />
            {errors.services_needed && <span className="text-sm text-[#f2b89a]">{errors.services_needed}</span>}
          </label>

          <label className="md:col-span-2 grid gap-2 text-sm text-[#f5f0e6]">
            Event Description
            <textarea rows={5} className="rounded-xl border border-white/10 bg-[#0d0d0d] px-3 py-2 text-[#f5f0e6] outline-none transition focus:border-[#c8a96b] focus:ring-2 focus:ring-[#c8a96b]/40"
              name="message" value={form.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
            {errors.message && <span className="text-sm text-[#f2b89a]">{errors.message}</span>}
          </label>
        </div>

        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#c8a96b] px-6 text-sm font-medium text-[#141311] transition hover:bg-[#e0c184] disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
          </button>
          {submitMessage && (
            <p className={isSuccess ? 'text-[#c8a96b]' : 'text-[#f2b89a]'}>{submitMessage}</p>
          )}
        </div>
      </form>
    </main>
  )
}
