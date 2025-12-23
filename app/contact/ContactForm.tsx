'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: `${data.subject ? `Subject: ${data.subject}\n\n` : ''}${data.message}`,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to send message')
      }

      toast({
        title: 'Message sent!',
        description: "We'll get back to you soon.",
      })

      // Reset form
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Get in <span className="text-transparent bg-clip-text gradient-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or feedback? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us more..." rows={5} required className="mt-2" />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Mail, label: 'Email', value: 'hello@steadyspend.com' },
                { icon: MessageSquare, label: 'Support', value: '24/7 chat' },
                { icon: MapPin, label: 'Based', value: 'San Francisco, CA' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="font-semibold">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
