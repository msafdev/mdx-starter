import { SectionHeader } from "@/components/macro/header"

const faqData = [
  {
    key: "reset-password",
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot password' on the login screen and follow the steps.",
  },
  {
    key: "find-invoice",
    question: "Where can I find my invoices?",
    answer: "Go to your account settings and click on 'Billing'.",
  },
  {
    key: "customer-support",
    question: "Do you offer customer support?",
    answer: "Yes, 24/7 support via chat and email.",
  },
]

export const QuestionSection = () => {
  return (
    <section id="faq" className="relative z-0">
      <div className="container flex flex-col items-center gap-y-6 md:gap-y-8">
        <SectionHeader title="Frequently Asked Questions">
          Find answers to common questions about our services.
        </SectionHeader>
      </div>
    </section>
  )
}
