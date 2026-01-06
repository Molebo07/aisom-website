'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const subscriptionSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type SubscriptionForm = z.infer<typeof subscriptionSchema>

export default function EmailSubscription() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscriptionForm>({
    resolver: zodResolver(subscriptionSchema),
  })

  const onSubmit = async (data: SubscriptionForm) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('System updates subscription:', data.email)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="card p-8">
            <h3 className="text-lg font-semibold mb-4">System Updates</h3>
            <p className="text-aisom-slate-600 mb-6">
              Receive notifications about platform updates, compliance changes, and operational enhancements.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
                <div className="flex-1">
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-md border border-aisom-gunmetal-200 focus:outline-none focus:ring-2 focus:ring-aisom-blue-500 focus:border-transparent"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            ) : (
              <div className="text-center">
                <div className="text-green-600 font-medium mb-2">Subscription confirmed</div>
                <p className="text-aisom-slate-600 text-sm">You will receive system updates at this address.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
