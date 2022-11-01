import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'
import { signIn } from 'next-auth/react'
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function SignIn() {
  const { connectAsync } = useConnect({
    connector: new Web3AuthConnector({
      options: {
        enableLogging: true,
        clientId: 'YOUR_CLIENT_ID', // Get your own client id from https://dashboard.web3auth.io
        network: 'testnet', // web3auth network
        chainId: '0x1', // chainId that you want to connect with
      },
    }),
  })
  const { disconnectAsync } = useDisconnect()
  const { isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()
  const { push } = useRouter()

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync()
    }

    const { account } = await connectAsync()

    const userData = { address: account, chain: '0x1', network: 'evm' }

    const { data } = await axios.post('/api/auth/request-message', userData, {
      headers: {
        'content-type': 'application/json',
      },
    })

    const message = data.message

    const signature = await signMessageAsync({ message })

    // redirect user after success authentication to '/user' page
    const { url } = await signIn('credentials', {
      message,
      signature,
      redirect: false,
      callbackUrl: '/user',
    })
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url)
  }

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={() => handleAuth()}>Authenticate via Web3Auth</button>
    </div>
  )
}

// import { getSession, signOut } from 'next-auth/react';

// // gets a prop from getServerSideProps
// function User({ user }) {
//     return (
//         <div>
//             <h4>User session:</h4>
//             <pre>{JSON.stringify(user, null, 2)}</pre>
//             <button onClick={() => signOut({ redirect: '/signin' })}>Sign out</button>
//         </div>
//     );
// }

// export async function getServerSideProps(context) {
//     const session = await getSession(context);
    
//     // redirect if not authenticated
//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/signin',
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: { user: session.user },
//     };
// }

// export default User;