'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  organization: z.string().min(2, 'Organization name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Valid email address required'),
  reason: z.string().min(10, 'Please describe your reason for reaching out.')
})

type ContactForm = z.infer<typeof contactSchema>

const deploymentOptions = [
  'On-premise deployment',
  'Cloud deployment',
  'Hybrid deployment',
  'Government cloud',
  'Other'
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Platform access request:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <main className="bg-aisom-cool-50 min-h-screen">
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="documentation-style">
            <div className="module-container">
              <div className="module-header">
                <h2>Contact</h2>
              </div>

              <div className="module-content">
                <div className="mb-6">
                  <p>
                    Request access to Aisom platform modules for evaluation and deployment planning. Our team will contact you within 2 business days to discuss your requirements.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-aisom-slate-700 mb-2">
                          Organization *
                        </label>
                        <input
                          {...register('organization')}
                          type="text"
                          id="organization"
                          className="w-full px-3 py-2 border border-aisom-gunmetal-300 rounded text-sm focus:ring-1 focus:ring-aisom-blue-500 focus:border-aisom-blue-500"
                          placeholder="Your organization name"
                          disabled={isSubmitting}
                        />
                        {errors.organization && (
                          <p className="text-red-600 text-xs mt-1">{errors.organization.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-aisom-slate-700 mb-2">
                          Contact Name *
                        </label>
                        <input
                          {...register('contactName')}
                          type="text"
                          id="contactName"
                          className="w-full px-3 py-2 border border-aisom-gunmetal-300 rounded text-sm focus:ring-1 focus:ring-aisom-blue-500 focus:border-aisom-blue-500"
                          placeholder="Primary contact person"
                          disabled={isSubmitting}
                        />
                        {errors.contactName && (
                          <p className="text-red-600 text-xs mt-1">{errors.contactName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-aisom-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-aisom-gunmetal-300 rounded text-sm focus:ring-1 focus:ring-aisom-blue-500 focus:border-aisom-blue-500"
                        placeholder="contact@organization.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>


                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-aisom-slate-700 mb-2">
                        Describe your reason for reaching out
                      </label>
                      <textarea
                        {...register('reason')}
                        id="reason"
                        rows={4}
                        className="w-full px-3 py-2 border border-aisom-gunmetal-300 rounded text-sm focus:ring-1 focus:ring-aisom-blue-500 focus:border-aisom-blue-500"
                        placeholder="Describe your reason for reaching out"
                        disabled={isSubmitting}
                      />
{errors.reason && (
                      <p className="text-red-600 text-xs mt-1">{errors.reason.message}</p>
                    )}
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-aisom-slate-500">
                        By submitting this request, you agree to our terms of service and privacy policy.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary px-6 py-2"
                      >
                        {isSubmitting ? 'Submitting...' : 'Contact'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-aisom-slate-900 mb-2">Access Request Submitted</h3>
                      <p className="text-sm text-aisom-slate-600">
                        Your request has been received. Our team will contact you within 2 business days to discuss your requirements and deployment options.
                      </p>
                    </div>
                    <p className="text-xs text-aisom-slate-500">
                      Reference ID: AIS-{Date.now().toString().slice(-6)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
