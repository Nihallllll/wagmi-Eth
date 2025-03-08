import { useState } from 'react'
import { WagmiProvider } from 'wagmi'
import './App.css'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WalletOptions } from './WalletOptions'
function App() {
  const client = new QueryClient;
  return (
    <>
     <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
     <input placeholder='Amount' type='text'></input>
     <button >Send Eth</button>
     <WalletOptions/>
     </QueryClientProvider>
     </WagmiProvider>

    </>
  )
}

export default App 
