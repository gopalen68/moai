import { MessageCircle, CircleCheck, Settings } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
            Ready to transform your business with AI? Reach us instantly—click the chat bubble in the
            bottom-right corner and start a conversation.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8"></div>
        </div>

        {/* Info Panel (no chat embed) */}
        <div className="max-w-5xl rounded-lg bg-card text-card-foreground mx-auto slide-up shadow-soft hover:shadow-large transition-all duration-300 group">
          <div className="rounded-3xl border bg-black shadow-sm">
            {/* 3-step flow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-600">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#3c83f6]/10 text-[#3c83f6]">
                    <MessageCircle />
                  </span>
                  <h3 className="font-semibold text-base">1) Click the chat bubble</h3>
                </div>
                <p className="text-sm text-foreground/65">
                  Look for the blue bubble at the bottom-right. It opens our assistant—no forms, no wait.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#3c83f6]">
                    <Settings />
                  </span>
                  <h3 className="font-semibold text-base">2) Share your requirements</h3>
                </div>
                <p className="text-sm text-foreground/65">
                  Tell us your goals, integrations, timeline, and budget range. We keep it focused and on-topic.
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-[#3c83f6]">
                    <CircleCheck />
                  </span>
                  <h3 className="font-semibold text-base">3) We follow up</h3>
                </div>
                <p className="text-sm text-foreground/65">
                  The assistant emails a summary to the MoAi team. A human takes it from there—no quotes in chat.
                </p>
              </div>
            </div>

            {/* Services + What to prepare */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Services */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-base mb-3">What we help with</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'AI Systems & Automation',
                      'Workflow Orchestration',
                      'Ecommerce Intelligence',
                      'Websites & Platforms',
                      'Consulting & Strategy',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[#3c83f6] px-3 py-1 text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prepare */}
                <div className="">
                  <h4 className="text-base font-semibold mb-3">What to prepare</h4>
                  <ul className="space-y-2 text-sm text-foreground/65">
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-[#3c83f6]" />
                      Goals & success metrics
                    </li>
                    <li className="flex gap-2 ">
                      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-[#3c83f6]" />
                      Integrations (tools, data sources)
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-[#3c83f6]" />
                      Timeline (ideal start/launch)
                    </li>
                    <li className="flex gap-2">
                      <span className="h-1.5 w-1.5 mt-2 rounded-full bg-[#3c83f6]" />
                      Budget range & currency
                    </li>
                  </ul>
                </div>
              </div>

              {/* Policy strip */}
              <div className="mt-6 rounded-xl bg-[#3c83f6]/10 border border-gray-200 p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-sm text-white">
                    On-topic only (MoAi services). We may ask for your budget range, but we don’t provide quotes in chat.
                  </p>
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#3c83f6]/10 text-[#3c83f6] px-2.5 py-1 text-[12px] font-medium">
                      No forms—just chat
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/60 text-white/80 px-2.5 py-1 text-[12px] font-medium">
                      Human follow-up
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer hint */}
            <div className="border-t border-gray-400 px-6 sm:px-8 py-4 rounded-b-3xl bg-black">
              <p className="text-md text-center text-white">
                Look for the <span className="text-[#3c83f6]">blue chat bubble</span> at the bottom-right to start.
              </p>
            </div>
          </div>
        </div>

        {/* Optional micro-hint under the section */}
        {/* <p className="mt-6 text-xs text-center text-gray-400">Bottom-right ⇢ blue chat bubble.</p> */}
      </div>
    </section>
  );
}
