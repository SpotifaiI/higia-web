import React, { PropsWithChildren } from 'react';
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { StyledComponentsRegistry } from "@/lib/registry";
import { GlobalStyles } from "@/global/styles";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '200'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Higia',
  description: 'Ajude o meio ambiente enquanto registra sua produtividade.'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />

          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
