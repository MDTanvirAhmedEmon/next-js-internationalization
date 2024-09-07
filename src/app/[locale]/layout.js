
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';



export default async function Main({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <div>
      <div>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </div>
    </div>
  );
}
