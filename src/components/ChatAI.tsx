import { MessageCircle, CircleCheck, Settings } from 'lucide-react'
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation('contact')
  const helpTags = t('helpTags', { returnObjects: true }) as string[];
  const prepareList = t('prepareList', { returnObjects: true }) as string[];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            {t('title')} <span className="gradient-text">{t('title2')}</span>
          </h2>
          <p className="text-lg text-foreground/65 max-w-2xl mx-auto">
            {t('subtitle')}
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
                  <h3 className="font-semibold text-base">{t('steps.clickBubble.title')}</h3>
                </div>
                <p className="text-sm text-foreground/65">
                  {t('steps.clickBubble.desc')}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#3c83f6]">
                    <Settings />
                  </span>
                  <h3 className="font-semibold text-base">{t('steps.shareRequirements.title')}</h3>
                </div>
                <p className="text-sm text-foreground/65">
                  {t('steps.shareRequirements.desc')}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-[#3c83f6]">
                    <CircleCheck />
                  </span>
                  <h3 className="font-semibold text-base">{t('steps.followUp.title')}</h3>
                </div>
                <p className="text-sm text-foreground/65">
                  {t('steps.followUp.desc')}
                </p>
              </div>
            </div>

            {/* Services + What to prepare */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Services */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-base mb-3">{t('whatWeHelp')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {helpTags.map((tag) => (
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
                  <h4 className="text-base font-semibold mb-3">{t('')}What to prepare</h4>
                  <ul className="space-y-2 text-sm text-foreground/65">
                    {prepareList.map((list) => (
                      <li className="flex gap-2">
                        <span className="h-1.5 w-1.5 mt-2 rounded-full bg-[#3c83f6]" />
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Policy strip */}
              <div className="mt-6 rounded-xl bg-[#3c83f6]/10 border border-gray-200 p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-sm text-white">
                    {t('policyNote')}
                  </p>
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#3c83f6]/10 text-[#3c83f6] px-2.5 py-1 text-[12px] font-medium">
                      {t('policyBadges.noForms')}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/60 text-white/80 px-2.5 py-1 text-[12px] font-medium">
                      {t('policyBadges.humanFollowup')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer hint */}
            <div className="border-t border-gray-400 px-6 sm:px-8 py-4 rounded-b-3xl bg-black">
              <p className="text-md text-center text-white">
                {t('footerHint')} <span className="text-[#3c83f6]">{t('footerHint2')}</span> {t('footerHint3')}
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
