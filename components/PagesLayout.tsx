import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const PagesLayout = async ({children}: Props) => {
    const messages = await getMessages();
    const locale = await getLocale();

  return (
    <>
        <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
        </NextIntlClientProvider>
    </>
  )
}

export default PagesLayout