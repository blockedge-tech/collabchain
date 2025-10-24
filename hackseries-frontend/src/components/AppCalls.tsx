// // // import { useWallet } from '@txnlab/use-wallet-react'
// // // import { useSnackbar } from 'notistack'
// // // import { useState } from 'react'
// // // import { HelloWorldFactory } from '../contracts/HelloWorld'
// // // import { CounterFactory } from '../contracts/Counter'
// // // import { OnSchemaBreak, OnUpdate } from '@algorandfoundation/algokit-utils/types/app'
// // // import { getAlgodConfigFromViteEnvironment, getIndexerConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'
// // // import { AlgorandClient } from '@algorandfoundation/algokit-utils'

// // // interface AppCallsInterface {
// // //   openModal: boolean
// // //   setModalState: (value: boolean) => void
// // // }

// // // const AppCalls = ({ openModal, setModalState }: AppCallsInterface) => {
// // //   const [loading, setLoading] = useState<boolean>(false)
// // //   const [contractInput, setContractInput] = useState<string>('')
// // //   const { enqueueSnackbar } = useSnackbar()
// // //   const { transactionSigner, activeAddress } = useWallet()

// // //   const algodConfig = getAlgodConfigFromViteEnvironment()
// // //   const indexerConfig = getIndexerConfigFromViteEnvironment()
// // //   const algorand = AlgorandClient.fromConfig({
// // //     algodConfig,
// // //     indexerConfig,
// // //   })
// // //   algorand.setDefaultSigner(transactionSigner)

// // //   const sendAppCall = async () => {
// // //     setLoading(true)

// // //     // Please note, in typical production scenarios,
// // //     // you wouldn't want to use deploy directly from your frontend.
// // //     // Instead, you would deploy your contract on your backend and reference it by id.
// // //     // Given the simplicity of the starter contract, we are deploying it on the frontend
// // //     // for demonstration purposes.
// // //     const factory = new HelloWorldFactory({
// // //       defaultSender: activeAddress ?? undefined,
// // //       algorand,
// // //     })
// // //     const deployResult = await factory
// // //       .deploy({
// // //         onSchemaBreak: OnSchemaBreak.AppendApp,
// // //         onUpdate: OnUpdate.AppendApp,
// // //       })
// // //       .catch((e: Error) => {
// // //         enqueueSnackbar(`Error deploying the contract: ${e.message}`, { variant: 'error' })
// // //         setLoading(false)
// // //         return undefined
// // //       })

// // //     if (!deployResult) {
// // //       return
// // //     }

// // //     const { appClient } = deployResult

// // //     const response = await appClient.send.hello({ args: { name: contractInput } }).catch((e: Error) => {
// // //       enqueueSnackbar(`Error calling the contract: ${e.message}`, { variant: 'error' })
// // //       setLoading(false)
// // //       return undefined
// // //     })

// // //     if (!response) {
// // //       return
// // //     }

// // //     enqueueSnackbar(`Response from the contract: ${response.return}`, { variant: 'success' })
// // //     setLoading(false)
// // //   }

// // //   return (
// // //     <dialog id="appcalls_modal" className={`modal ${openModal ? 'modal-open' : ''} bg-slate-200`}>
// // //       <form method="dialog" className="modal-box">
// // //         <h3 className="font-bold text-lg">Say hello to your Algorand smart contract</h3>
// // //         <br />
// // //         <input
// // //           type="text"
// // //           placeholder="Provide input to hello function"
// // //           className="input input-bordered w-full"
// // //           value={contractInput}
// // //           onChange={(e) => {
// // //             setContractInput(e.target.value)
// // //           }}
// // //         />
// // //         <div className="modal-action ">
// // //           <button className="btn" onClick={() => setModalState(!openModal)}>
// // //             Close
// // //           </button>
// // //           <button className={`btn`} onClick={sendAppCall}>
// // //             {loading ? <span className="loading loading-spinner" /> : 'Send application call'}
// // //           </button>
// // //         </div>
// // //       </form>
// // //     </dialog>
// // //   )
// // // }

// // // export default AppCalls



// import { AlgorandClient } from '@algorandfoundation/algokit-utils'
// import { OnSchemaBreak, OnUpdate } from '@algorandfoundation/algokit-utils/types/app'
// import { useWallet } from '@txnlab/use-wallet-react'
// import { useSnackbar } from 'notistack'
// import { useState } from 'react'
// import { CounterFactory } from '../contracts/Counter'
// import { HelloWorldFactory } from '../contracts/HelloWorld'
// import { getAlgodConfigFromViteEnvironment, getIndexerConfigFromViteEnvironment } from '../utils/network/getAlgoClientConfigs'

// interface AppCallsInterface {
//   openModal: boolean
//   setModalState: (value: boolean) => void
// }

// const AppCalls = ({ openModal, setModalState }: AppCallsInterface) => {
//   const [loading, setLoading] = useState<boolean>(false)
//   const [contractInput, setContractInput] = useState<string>('')
//   const { enqueueSnackbar } = useSnackbar()
//   const { transactionSigner, activeAddress } = useWallet()

//   const algodConfig = getAlgodConfigFromViteEnvironment()
//   const indexerConfig = getIndexerConfigFromViteEnvironment()
//   const algorand = AlgorandClient.fromConfig({
//     algodConfig,
//     indexerConfig,
//   })
//   algorand.setDefaultSigner(transactionSigner)

//   // 👋 HelloWorld Contract
//   const sendHelloWorldAppCall = async () => {
//     setLoading(true)
//     try {
//       const factory = new HelloWorldFactory({
//         defaultSender: activeAddress ?? undefined,
//         algorand,
//       })

//       const deployResult = await factory.deploy({
//         onSchemaBreak: OnSchemaBreak.AppendApp,
//         onUpdate: OnUpdate.AppendApp,
//       })
//       const { appClient } = deployResult

//       const response = await appClient.send.hello({ args: { name: contractInput } })
//       enqueueSnackbar(`HelloWorld says: ${response.return}`, { variant: 'success' })
//     } catch (e: any) {
//       enqueueSnackbar(`Error: ${e.message}`, { variant: 'error' })
//     } finally {
//       setLoading(false)
//     }
//   }

//   // 🔢 Counter Contract
//   const sendCounterAppCall = async () => {
//     setLoading(true)
//     try {
//       const factory = new CounterFactory({
//         defaultSender: activeAddress ?? undefined,
//         algorand,
//       })

//       const deployResult = await factory.deploy({
//         onSchemaBreak: OnSchemaBreak.AppendApp,
//         onUpdate: OnUpdate.AppendApp,
//       })
//       const { appClient } = deployResult

//       const response = await appClient.send.count({ args: {name: contractInput}})
//       enqueueSnackbar(`Counter new value: ${response.return}`, { variant: 'success' })
//     } catch (e: any) {
//       enqueueSnackbar(`Error calling Counter: ${e.message}`, { variant: 'error' })
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <dialog id="appcalls_modal" className={`modal ${openModal ? 'modal-open' : ''} bg-slate-200`}>
//       <form method="dialog" className="modal-box">
//         <h3 className="font-bold text-lg">Interact with your Algorand Smart Contracts</h3>
//         <br />

//         <input
//           type="text"
//           placeholder="Enter a name for HelloWorld"
//           className="input input-bordered w-full"
//           value={contractInput}
//           onChange={(e) => setContractInput(e.target.value)}
//         />

//         <div className="modal-action flex flex-col gap-2">
//           <div className="flex justify-end gap-2">
//             <button className="btn" onClick={() => setModalState(!openModal)}>
//               Close
//             </button>
//           </div>

//           <button className="btn btn-primary" onClick={sendHelloWorldAppCall}>
//             {loading ? <span className="loading loading-spinner" /> : 'Call HelloWorld'}
//           </button>

//           <button className="btn btn-secondary" onClick={sendCounterAppCall}>
//             {loading ? <span className="loading loading-spinner" /> : 'Call Counter'}
//           </button>
//         </div>
//       </form>
//     </dialog>
//   )
// }

// export default AppCalls


import { AlgorandClient } from '@algorandfoundation/algokit-utils'
import { OnSchemaBreak, OnUpdate } from '@algorandfoundation/algokit-utils/types/app'
import { useWallet } from '@txnlab/use-wallet-react'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { HelloWorldFactory } from '../contracts/HelloWorld'
import {
  getAlgodConfigFromViteEnvironment,
  getIndexerConfigFromViteEnvironment,
} from '../utils/network/getAlgoClientConfigs'

interface AppCallsProps {
  openModal: boolean
  setModalState: (value: boolean) => void
}

const AppCalls = ({ openModal, setModalState }: AppCallsProps) => {
  const [loading, setLoading] = useState(false)
  const [contractInput, setContractInput] = useState('')
  const { enqueueSnackbar } = useSnackbar()
  const { transactionSigner, activeAddress } = useWallet()

  // Initialize Algorand client
  const algodConfig = getAlgodConfigFromViteEnvironment()
  const indexerConfig = getIndexerConfigFromViteEnvironment()
  const algorand = AlgorandClient.fromConfig({ algodConfig, indexerConfig })
  algorand.setDefaultSigner(transactionSigner)

  const callHello = async () => {
    setLoading(true)
    try {
      if (!activeAddress) throw new Error('Connect your wallet first')

      const factory = new HelloWorldFactory({ defaultSender: activeAddress, algorand })
      const { appClient } = await factory.deploy({
        onSchemaBreak: OnSchemaBreak.AppendApp,
        onUpdate: OnUpdate.AppendApp,
      })

      const result = await appClient.send.hello({ args: { name: contractInput || 'Anon' } })
      enqueueSnackbar(`✅ ${result.return}`, { variant: 'success' })
    } catch (err: any) {
      enqueueSnackbar(`❌ Error calling hello: ${err.message}`, { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  /**
   * HELLO WORLD: call count(name)
   */
  const callCount = async () => {
    setLoading(true)
    try {
      if (!activeAddress) throw new Error('Connect your wallet first')

      const factory = new HelloWorldFactory({ defaultSender: activeAddress, algorand })
      const { appClient } = await factory.deploy({
        onSchemaBreak: OnSchemaBreak.AppendApp,
        onUpdate: OnUpdate.AppendApp,
      })

      const result = await appClient.send.count({ args: { name: contractInput || 'User' } })

      // count returns a tuple: [message: String, counter: UInt64]
      const [message, counter] = result.return ?? []
      enqueueSnackbar(`✅ ${message} (Count = ${counter})`, { variant: 'success' })
    } catch (err: any) {
      enqueueSnackbar(`❌ Error calling count: ${err.message}`, { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <dialog id="appcalls_modal" className={`modal ${openModal ? 'modal-open' : ''} bg-slate-200`}>
      <form method="dialog" className="modal-box" onSubmit={(e) => e.preventDefault()}>
        <h3 className="font-bold text-lg text-gray-800">
          Interact with your HelloWorld Smart Contract
        </h3>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter a name"
            className="input input-bordered w-full"
            value={contractInput}
            onChange={(e) => setContractInput(e.target.value)}
          />
        </div>

        <div className="modal-action flex flex-col gap-2 mt-4">
          <div className="flex justify-end gap-2">
            <button type="button" className="btn" onClick={() => setModalState(false)} disabled={loading}>
              Close
            </button>
          </div>


          <button
            type="button"
            className="btn btn-secondary"
            onClick={callCount}
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner" /> : 'Counter Contract Recursion'}
          </button>
        </div>
      </form>
    </dialog>
  )
}

export default AppCalls
