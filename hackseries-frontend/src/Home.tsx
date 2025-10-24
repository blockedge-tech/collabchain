// // // // // src/components/Home.tsx
// // // // import { useWallet } from '@txnlab/use-wallet-react'
// // // // import React, { useState } from 'react'
// // // // import ConnectWallet from './components/ConnectWallet'
// // // // import Transact from './components/Transact'
// // // // import AppCalls from './components/AppCalls'

// // // // interface HomeProps {}

// // // // const Home: React.FC<HomeProps> = () => {
// // // //   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
// // // //   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
// // // //   const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
// // // //   const { activeAddress } = useWallet()

// // // //   const toggleWalletModal = () => {
// // // //     setOpenWalletModal(!openWalletModal)
// // // //   }

// // // //   const toggleDemoModal = () => {
// // // //     setOpenDemoModal(!openDemoModal)
// // // //   }

// // // //   const toggleAppCallsModal = () => {
// // // //     setAppCallsDemoModal(!appCallsDemoModal)
// // // //   }

// // // //   return (
// // // //     <div className="hero min-h-screen bg-teal-400">
// // // //       <div className="hero-content text-center rounded-lg p-6 max-w-md bg-white mx-auto">
// // // //         <div className="max-w-md">
// // // //           <h1 className="text-4xl">
// // // //             Welcome to <div className="font-bold">AlgoKit 🙂</div>
// // // //           </h1>
// // // //           <p className="py-6">
// // // //             This starter has been generated using official AlgoKit React template. Refer to the resource below for next steps.
// // // //           </p>

// // // //           <div className="grid">
// // // //             <a
// // // //               data-test-id="getting-started"
// // // //               className="btn btn-primary m-2"
// // // //               target="_blank"
// // // //               href="https://github.com/algorandfoundation/algokit-cli"
// // // //             >
// // // //               Getting started
// // // //             </a>

// // // //             <div className="divider" />
// // // //             <button data-test-id="connect-wallet" className="btn m-2" onClick={toggleWalletModal}>
// // // //               Wallet Connection
// // // //             </button>

// // // //             {activeAddress && (
// // // //               <button data-test-id="transactions-demo" className="btn m-2" onClick={toggleDemoModal}>
// // // //                 Transactions Demo
// // // //               </button>
// // // //             )}

// // // //             {activeAddress && (
// // // //               <button data-test-id="appcalls-demo" className="btn m-2" onClick={toggleAppCallsModal}>
// // // //                 Contract Interactions Demo
// // // //               </button>
// // // //             )}


// // // //           </div>

// // // //           <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
// // // //           <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
// // // //           <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Home



// // // // 2nd


// // // // import { useWallet } from '@txnlab/use-wallet-react';
// // // // import React, { useState } from 'react';
// // // // import AppCalls from './components/AppCalls';
// // // // import ConnectWallet from './components/ConnectWallet';
// // // // import Transact from './components/Transact';

// // // // const Home: React.FC = () => {
// // // //   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
// // // //   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
// // // //   const [openHelloWorldModal, setOpenHelloWorldModal] = useState<boolean>(false);
// // // //   const [openCounterModal, setOpenCounterModal] = useState<boolean>(false);

// // // //   const { activeAddress } = useWallet();

// // // //   const toggleWalletModal = () => setOpenWalletModal(!openWalletModal);
// // // //   const toggleDemoModal = () => setOpenDemoModal(!openDemoModal);
// // // //   const toggleHelloWorldModal = () => setOpenHelloWorldModal(!openHelloWorldModal);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 flex flex-col">
// // // //       {/* 🌐 Navbar */}
// // // //       <nav className="bg-white/90 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center">
// // // //         <div className="flex items-center space-x-3">
// // // //           <img
// // // //             src="/algokit-logo.svg"
// // // //             alt="AlgoKit Logo"
// // // //             className="h-8 w-8"
// // // //             onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
// // // //           />
// // // //           <h1 className="text-2xl font-bold text-indigo-700 tracking-tight">
// // // //             CollabChain Dashboard
// // // //           </h1>
// // // //         </div>

// // // //         <div className="flex items-center space-x-3">
// // // //           {!activeAddress && (
// // // //             <button
// // // //               onClick={toggleWalletModal}
// // // //               className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
// // // //             >
// // // //               Connect Wallet
// // // //             </button>
// // // //           )}

// // // //           {activeAddress && (
// // // //             <button
// // // //               onClick={toggleWalletModal}
// // // //               className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
// // // //             >
// // // //               {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       </nav>

// // // //       {/* 🧩 Contract Buttons Section */}
// // // //       {activeAddress && (
// // // //         <section className="flex flex-wrap justify-center gap-6 bg-white/10 backdrop-blur-md py-6 px-4 shadow-inner">
// // // //           <button
// // // //             onClick={toggleDemoModal}
// // // //             className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-md"
// // // //           >
// // // //             💸 Transactions
// // // //           </button>

// // // //           <button
// // // //             onClick={toggleHelloWorldModal}
// // // //             className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-md"
// // // //           >
// // // //             💬 HelloWorld and Counter Contract
// // // //           </button>

// // // //           {/* <button
// // // //             onClick={toggleCounterModal}
// // // //             className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition-all shadow-md"
// // // //           >
// // // //             🔢 Counter Contract
// // // //           </button> */}
// // // //         </section>
// // // //       )}

// // // //       {/* 🏠 Main Content */}
// // // //       <main className="flex-grow flex items-center justify-center text-center p-10">
// // // //         <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg w-full">
// // // //           <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
// // // //             Welcome to <span className="text-indigo-600">CollabChain 🚀</span>
// // // //           </h2>
// // // //           <p className="text-gray-600 mb-8">
// // // //             Interact with Algorand smart contracts using this modern AlgoKit React dashboard.
// // // //           </p>

// // // //           <a
// // // //             href="https://github.com/algorandfoundation/algokit-cli"
// // // //             target="_blank"
// // // //             rel="noreferrer"
// // // //             className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
// // // //           >
// // // //             Getting Started
// // // //           </a>
// // // //         </div>
// // // //       </main>

// // // //       {/* ⚙️ Modals */}
// // // //       <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
// // // //       <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
// // // //       <AppCalls
// // // //         openModal={openHelloWorldModal}
// // // //         setModalState={setOpenHelloWorldModal}
// // // //         contractType="helloworld"
// // // //       />
// // // //       <AppCalls
// // // //         openModal={openCounterModal}
// // // //         setModalState={setOpenCounterModal}
// // // //         contractType="counter"
// // // //       />

// // // //       {/* 🔻 Footer */}
// // // //       <footer className="bg-white/90 backdrop-blur-md py-4 text-center text-gray-700 font-medium shadow-inner">
// // // //         © {new Date().getFullYear()} CollabChain • Built on Algorand
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;



// // // // // 3rd

// // // // // import { useWallet } from '@txnlab/use-wallet-react';
// // // // // import React, { useState } from 'react';
// // // // // import AppCalls from './components/AppCalls';
// // // // // import ConnectWallet from './components/ConnectWallet';
// // // // // import Transact from './components/Transact';

// // // // // const Home: React.FC = () => {
// // // // //   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
// // // // //   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
// // // // //   const [openContractModal, setOpenContractModal] = useState<boolean>(false);

// // // // //   const { activeAddress } = useWallet();

// // // // //   const toggleWalletModal = () => setOpenWalletModal(!openWalletModal);
// // // // //   const toggleDemoModal = () => setOpenDemoModal(!openDemoModal);
// // // // //   const toggleContractModal = () => setOpenContractModal(!openContractModal);

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 flex flex-col">
// // // // //       {/* 🌐 Navbar */}
// // // // //       <nav className="bg-white/90 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center">
// // // // //         <div className="flex items-center space-x-3">
// // // // //           <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
// // // // //             <span className="text-white font-bold text-lg">PS</span>
// // // // //           </div>
// // // // //           <h1 className="text-2xl font-bold text-blue-800 tracking-tight">
// // // // //             CollabChain
// // // // //           </h1>
// // // // //           <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
// // // // //             Trust Layer for Credentials
// // // // //           </span>
// // // // //         </div>

// // // // //         <div className="flex items-center space-x-3">
// // // // //           {!activeAddress && (
// // // // //             <button
// // // // //               onClick={toggleWalletModal}
// // // // //               className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
// // // // //             >
// // // // //               Connect Wallet
// // // // //             </button>
// // // // //           )}

// // // // //           {activeAddress && (
// // // // //             <button
// // // // //               onClick={toggleWalletModal}
// // // // //               className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium hover:bg-green-200 transition border border-green-300"
// // // // //             >
// // // // //               ✅ {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
// // // // //             </button>
// // // // //           )}
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* 🧩 Contract Buttons Section */}
// // // // //       {activeAddress && (
// // // // //         <section className="flex flex-wrap justify-center gap-6 bg-white/10 backdrop-blur-md py-8 px-4 shadow-inner">
// // // // //           <button
// // // // //             onClick={toggleDemoModal}
// // // // //             className="bg-white text-blue-700 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg border border-blue-200 min-w-[200px]"
// // // // //           >
// // // // //             <div className="text-2xl mb-2">📜</div>
// // // // //             Issue Credentials
// // // // //           </button>

// // // // //           <button
// // // // //             onClick={toggleContractModal}
// // // // //             className="bg-white text-blue-700 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg border border-blue-200 min-w-[200px]"
// // // // //           >
// // // // //             <div className="text-2xl mb-2">🔍</div>
// // // // //             Verify Credentials
// // // // //           </button>

// // // // //           <button
// // // // //             onClick={toggleContractModal}
// // // // //             className="bg-white text-blue-700 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg border border-blue-200 min-w-[200px]"
// // // // //           >
// // // // //             <div className="text-2xl mb-2">👤</div>
// // // // //             Career Passport
// // // // //           </button>
// // // // //         </section>
// // // // //       )}

// // // // //       {/* 🏠 Main Content */}
// // // // //       <main className="flex-grow flex items-center justify-center text-center p-10">
// // // // //         <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-2xl w-full border border-blue-200">
// // // // //           <div className="mb-6">
// // // // //             <div className="h-16 w-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
// // // // //               <span className="text-white font-bold text-2xl">PS</span>
// // // // //             </div>
// // // // //             <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
// // // // //               Welcome to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CollabChain</span>
// // // // //             </h2>
// // // // //             <p className="text-lg text-gray-600 mb-2 font-semibold">
// // // // //               The Trust Layer for Human Credentials
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="bg-blue-50 rounded-xl p-6 mb-6 text-left border border-blue-200">
// // // // //             <h3 className="font-bold text-blue-800 mb-3 text-lg">🚀 End Fake Credentials</h3>
// // // // //             <ul className="text-gray-700 space-y-2">
// // // // //               <li className="flex items-start">
// // // // //                 <span className="text-green-500 mr-2">✓</span>
// // // // //                 blockchain-signed credentials
// // // // //               </li>
// // // // //               <li className="flex items-start">
// // // // //                 <span className="text-green-500 mr-2">✓</span>
// // // // //                 Tamper-proof digital credentials (NFT)
// // // // //               </li>
// // // // //               <li className="flex items-start">
// // // // //                 <span className="text-green-500 mr-2">✓</span>
// // // // //                 Universal Career Passport
// // // // //               </li>
// // // // //               <li className="flex items-start">
// // // // //                 <span className="text-green-500 mr-2">✓</span>
// // // // //                 Instant verification with QR codes
// // // // //               </li>
// // // // //             </ul>
// // // // //           </div>

// // // // //           <div className="space-y-4">
// // // // //             <p className="text-gray-600 text-sm">
// // // // //               Built on <span className="font-semibold text-blue-600">Algorand</span> • Low fees • Carbon Neutral • High TPS
// // // // //             </p>
// // // // //             <a
// // // // //               href="https://github.com/algorandfoundation/algokit-cli"
// // // // //               target="_blank"
// // // // //               rel="noreferrer"
// // // // //               className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition shadow-md"
// // // // //             >
// // // // //               Get Started with CollabChain
// // // // //             </a>
// // // // //           </div>
// // // // //         </div>
// // // // //       </main>

// // // // //       {/* ⚙️ Modals */}
// // // // //       <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
// // // // //       <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
// // // // //       <AppCalls
// // // // //         openModal={openContractModal}
// // // // //         setModalState={setOpenContractModal}
// // // // //       />

// // // // //       {/* 🔻 Footer */}
// // // // //       <footer className="bg-white/90 backdrop-blur-md py-4 text-center text-gray-700 font-medium shadow-inner">
// // // // //         © {new Date().getFullYear()} CollabChain • The Trust Layer for Human Credentials • Built on Algorand
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;



// // // //6th
// // // import { useWallet } from '@txnlab/use-wallet-react';
// // // import React, { useState } from 'react';
// // // import AppCalls from './components/AppCalls';
// // // import ConnectWallet from './components/ConnectWallet';
// // // import Transact from './components/Transact';


// // // const Home: React.FC = () => {
// // //   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
// // //   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
// // //   const [openContractModal, setOpenContractModal] = useState<boolean>(false);

// // //   const { activeAddress } = useWallet();

// // //   const toggleWalletModal = () => setOpenWalletModal(!openWalletModal);
// // //   const toggleDemoModal = () => setOpenDemoModal(!openDemoModal);
// // //   const toggleContractModal = () => setOpenContractModal(!openContractModal);

// // //   // Smart contract interaction functions
// // //   const handleIssueCredential = async () => {
// // //     if (!activeAddress) {
// // //       toggleWalletModal();
// // //       return;
// // //     }

// // //     // Logic for issuing credential
// // //     console.log("Issuing credential for:", activeAddress);
// // //     toggleDemoModal();
// // //   };

// // //   const handleVerifyCredential = async () => {
// // //     if (!activeAddress) {
// // //       toggleWalletModal();
// // //       return;
// // //     }

// // //     // Logic for verifying credential
// // //     console.log("Verifying credential for:", activeAddress);
// // //     toggleContractModal();
// // //   };

// // //   const handleViewPassport = async () => {
// // //     if (!activeAddress) {
// // //       toggleWalletModal();
// // //       return;
// // //     }

// // //     // Logic for viewing career passport
// // //     console.log("Viewing career passport for:", activeAddress);
// // //     toggleContractModal();
// // //   };

// // //   // Sample credential data - this would come from smart contract
// // //   const userCredentials = [
// // //     { id: 1, type: 'Degree', institution: 'University of Example', date: '2023-05-15', verified: true },
// // //     { id: 2, type: 'Certification', institution: 'Tech Institute', date: '2023-08-20', verified: true },
// // //     { id: 3, type: 'Internship', institution: 'Blockchain Corp', date: '2023-11-10', verified: false }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-[#0e2a1f] via-[#1a4731] to-[#276749] flex flex-col">
// // //       {/* 🌐 Navbar */}
// // //       <nav className="bg-white/95 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center border-b-4 border-[#5d9e7f]">
// // //         <div className="flex items-center space-x-3">
// // //           <div className="h-12 w-12 bg-gradient-to-r from-[#5d9e7f] to-[#276749] rounded-xl flex items-center justify-center shadow-md">
// // //             <span className="text-white font-bold text-xl">CC</span>
// // //           </div>
// // //           <div>
// // //             <h1 className="text-2xl font-bold text-gray-800">CollabChain</h1>
// // //             <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
// // //               Trusted Education Verification
// // //             </span>
// // //           </div>
// // //         </div>

// // //         <div className="flex items-center space-x-3">
// // //           {!activeAddress && (
// // //             <button
// // //               onClick={toggleWalletModal}
// // //               className="bg-[#5d9e7f] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#276749] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
// // //             >
// // //               Connect Wallet
// // //             </button>
// // //           )}

// // //           {activeAddress && (
// // //             <button
// // //               onClick={toggleWalletModal}
// // //               className="bg-green-50 text-green-800 px-6 py-3 rounded-xl font-semibold hover:bg-green-100 transition-all duration-300 border-2 border-green-300 shadow-md hover:shadow-lg"
// // //             >
// // //               ✅ {activeAddress.slice(0, 8)}...{activeAddress.slice(-6)}
// // //             </button>
// // //           )}
// // //         </div>
// // //       </nav>

// // //       {/* 🧩 Smart Contract Actions Section */}
// // //       {activeAddress && (
// // //         <section className="flex flex-wrap justify-center gap-8 bg-white/10 backdrop-blur-lg py-12 px-6 shadow-inner">
// // //           <button
// // //             onClick={handleIssueCredential}
// // //             className="bg-white/95 text-gray-800 px-8 py-6 rounded-2xl font-semibold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-[#5d9e7f] min-w-[240px] transform hover:-translate-y-2 group"
// // //           >
// // //             <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
// // //               📜
// // //             </div>
// // //             <div className="text-lg font-bold">Issue Credential</div>
// // //             <div className="text-sm text-[#5d9e7f] mt-2 font-normal">
// // //               Create new verified credential
// // //             </div>
// // //           </button>

// // //           <button
// // //             onClick={handleVerifyCredential}
// // //             className="bg-white/95 text-gray-800 px-8 py-6 rounded-2xl font-semibold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-[#5d9e7f] min-w-[240px] transform hover:-translate-y-2 group"
// // //           >
// // //             <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
// // //               🔍
// // //             </div>
// // //             <div className="text-lg font-bold">Verify Credential</div>
// // //             <div className="text-sm text-[#5d9e7f] mt-2 font-normal">
// // //               Check credential authenticity
// // //             </div>
// // //           </button>

// // //           <button
// // //             onClick={handleViewPassport}
// // //             className="bg-white/95 text-gray-800 px-8 py-6 rounded-2xl font-semibold hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl border-2 border-[#5d9e7f] min-w-[240px] transform hover:-translate-y-2 group"
// // //           >
// // //             <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
// // //               👤
// // //             </div>
// // //             <div className="text-lg font-bold">Career Passport</div>
// // //             <div className="text-sm text-[#5d9e7f] mt-2 font-normal">
// // //               View your credentials
// // //             </div>
// // //           </button>
// // //         </section>
// // //       )}

// // //       {/* 🏠 Main Content */}
// // //       <main className="flex-grow flex items-center justify-center p-10">
// // //         <div className="bg-white/95 rounded-3xl shadow-2xl p-12 max-w-4xl w-full border-2 border-[#5d9e7f]">
// // //           <div className="mb-8 text-center">
// // //             <div className="h-20 w-20 bg-gradient-to-r from-[#5d9e7f] to-[#276749] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
// // //               <span className="text-white font-bold text-3xl">CC</span>
// // //             </div>
// // //             <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
// // //               Welcome to <span className="bg-gradient-to-r from-[#5d9e7f] to-[#276749] bg-clip-text text-transparent">CollabChain</span>
// // //             </h2>
// // //             <p className="text-lg text-gray-600 mb-2 font-semibold">
// // //               Blockchain-Verified Educational Credentials
// // //             </p>
// // //           </div>

// // //           {/* Smart Contract Features */}
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// // //             <div className="bg-green-50 rounded-xl p-6 text-left border-2 border-green-200">
// // //               <h3 className="font-bold text-green-800 mb-3 text-lg">🔄 Smart Contract Features</h3>
// // //               <ul className="text-gray-700 space-y-2 text-sm">
// // //                 <li className="flex items-start">
// // //                   <span className="text-green-500 mr-2">✓</span>
// // //                   Create Soulbound NFT Credentials
// // //                 </li>
// // //                 <li className="flex items-start">
// // //                   <span className="text-green-500 mr-2">✓</span>
// // //                   Immutable Record on Algorand
// // //                 </li>
// // //                 <li className="flex items-start">
// // //                   <span className="text-green-500 mr-2">✓</span>
// // //                   Instant Verification Calls
// // //                 </li>
// // //                 <li className="flex items-start">
// // //                   <span className="text-green-500 mr-2">✓</span>
// // //                   Low Transaction Fees
// // //                 </li>
// // //               </ul>
// // //             </div>

// // //             <div className="bg-blue-50 rounded-xl p-6 text-left border-2 border-blue-200">
// // //               <h3 className="font-bold text-blue-800 mb-3 text-lg">🎓 Credential Types</h3>
// // //               <ul className="text-gray-700 space-y-2 text-sm">
// // //                 <li className="flex items-start">
// // //                   <span className="text-blue-500 mr-2">•</span>
// // //                   Academic Degrees & Diplomas
// // //                 </li>
// // //                 <li className="flex items-start">
// // //                   <span className="text-blue-500 mr-2">•</span>
// // //                   Professional Certifications
// // //                 </li>
// // //                 <li className="flex items-start">
// // //                   <span className="text-blue-500 mr-2">•</span>
// // //                   Internship Completions
// // //                 </li>
// // //                 <li className="flex items-start">
// // //                   <span className="text-blue-500 mr-2">•</span>
// // //                   Workshop & Training Badges
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //           </div>

// // //           {/* User Credentials Preview */}
// // //           {activeAddress && (
// // //             <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left border-2 border-gray-200">
// // //               <h3 className="font-bold text-gray-800 mb-4 text-lg">Your Credentials</h3>
// // //               <div className="space-y-3">
// // //                 {userCredentials.map((credential) => (
// // //                   <div key={credential.id} className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
// // //                     <div>
// // //                       <span className="font-semibold text-gray-800">{credential.type}</span>
// // //                       <span className="text-gray-600 text-sm ml-2">from {credential.institution}</span>
// // //                     </div>
// // //                     <div className="flex items-center space-x-2">
// // //                       <span className={`px-2 py-1 rounded text-xs font-medium ${
// // //                         credential.verified
// // //                           ? 'bg-green-100 text-green-800'
// // //                           : 'bg-yellow-100 text-yellow-800'
// // //                       }`}>
// // //                         {credential.verified ? 'Verified' : 'Pending'}
// // //                       </span>
// // //                       <span className="text-gray-500 text-sm">{credential.date}</span>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Blockchain Info */}
// // //           <div className="bg-gradient-to-r from-[#5d9e7f] to-[#276749] rounded-xl p-6 mb-6 text-white">
// // //             <h3 className="font-bold mb-3 text-lg">⛓️ Powered by Algorand Blockchain</h3>
// // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
// // //               <div>
// // //                 <div className="font-bold text-xl">~0.001 ALGO</div>
// // //                 <div className="text-sm opacity-90">Per Transaction</div>
// // //               </div>
// // //               <div>
// // //                 <div className="font-bold text-xl">4.5s</div>
// // //                 <div className="text-sm opacity-90">Block Time</div>
// // //               </div>
// // //               <div>
// // //                 <div className="font-bold text-xl">6000 TPS</div>
// // //                 <div className="text-sm opacity-90">Throughput</div>
// // //               </div>
// // //               <div>
// // //                 <div className="font-bold text-xl">Carbon</div>
// // //                 <div className="text-sm opacity-90">Negative</div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="space-y-4 text-center">
// // //             <p className="text-gray-600 text-sm">
// // //               Built on <span className="font-semibold text-[#5d9e7f]">Algorand</span> •
// // //               Low fees • Carbon Negative • High TPS • Enterprise Ready
// // //             </p>
// // //             {!activeAddress ? (
// // //               <button
// // //                 onClick={toggleWalletModal}
// // //                 className="inline-block bg-gradient-to-r from-[#5d9e7f] to-[#276749] text-white font-semibold px-8 py-3 rounded-lg hover:from-[#4a8a6b] hover:to-[#1e5635] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
// // //               >
// // //                 Connect Wallet to Get Started
// // //               </button>
// // //             ) : (
// // //               <div className="space-x-4">
// // //                 <button
// // //                   onClick={handleIssueCredential}
// // //                   className="bg-[#5d9e7f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a8a6b] transition-colors shadow-md"
// // //                 >
// // //                   Issue New Credential
// // //                 </button>
// // //                 <button
// // //                   onClick={handleVerifyCredential}
// // //                   className="bg-white text-[#5d9e7f] px-6 py-3 rounded-lg font-semibold border-2 border-[#5d9e7f] hover:bg-green-50 transition-colors"
// // //                 >
// // //                   Verify Existing
// // //                 </button>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </main>

// // //       {/* ⚙️ Modals */}
// // //       <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
// // //       <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
// // //       <AppCalls
// // //         openModal={openContractModal}
// // //         setModalState={setOpenContractModal}
// // //       />

// // //       {/* 🔻 Footer */}
// // //       <footer className="bg-white/95 backdrop-blur-md py-6 text-center text-gray-700 font-semibold shadow-inner border-t border-[#5d9e7f]">
// // //         <div className="max-w-4xl mx-auto">
// // //           <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
// // //             <div>
// // //               © {new Date().getFullYear()} CollabChain • Trusted Education Verification
// // //             </div>
// // //             <div className="flex items-center space-x-4 text-sm">
// // //               <span className="text-[#5d9e7f]">Built on Algorand</span>
// // //               <span className="h-2 w-2 bg-[#5d9e7f] rounded-full"></span>
// // //               <span>Smart Contract Verified</span>
// // //               <span className="h-2 w-2 bg-[#5d9e7f] rounded-full"></span>
// // //               <span>100% Trust</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default Home;





// // import { useWallet } from '@txnlab/use-wallet-react';
// // import React, { useState } from 'react';
// // import AppCalls from './components/AppCalls';
// // import ConnectWallet from './components/ConnectWallet';
// // import Transact from './components/Transact';
// // import { Link } from "react-router-dom";


// // const Home: React.FC = () => {
// //   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
// //   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
// //   const [openContractModal, setOpenContractModal] = useState<boolean>(false);

// //   const { activeAddress } = useWallet();

// //   const toggleWalletModal = () => setOpenWalletModal(!openWalletModal);
// //   const toggleDemoModal = () => setOpenDemoModal(!openDemoModal);
// //   const toggleContractModal = () => setOpenContractModal(!openContractModal);

// //   // Smart contract interaction functions
// //   const handleIssueCredential = async () => {
// //     if (!activeAddress) {
// //       toggleWalletModal();
// //       return;
// //     }
// //     console.log("Issuing credential for:", activeAddress);
// //     toggleDemoModal();
// //   };

// //   const handleVerifyCredential = async () => {
// //     if (!activeAddress) {
// //       toggleWalletModal();
// //       return;
// //     }
// //     console.log("Verifying credential for:", activeAddress);
// //     toggleContractModal();
// //   };

// //   const handleViewPassport = async () => {
// //     if (!activeAddress) {
// //       toggleWalletModal();
// //       return;
// //     }
// //     console.log("Viewing career passport for:", activeAddress);
// //     toggleContractModal();
// //   };

// //   // Sample credential data - this would come from smart contract
// //   const userCredentials = [
// //     { id: 1, type: 'Degree', institution: 'University of Example', date: '2023-05-15', verified: true },
// //     { id: 2, type: 'Certification', institution: 'Tech Institute', date: '2023-08-20', verified: true },
// //     { id: 3, type: 'Internship', institution: 'Blockchain Corp', date: '2023-11-10', verified: false }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-white flex flex-col">
// //       {/* 🌐 Navbar */}
// //       <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
// //         <div className="flex items-center space-x-2">
// //           <h1 className="text-2xl font-bold text-gray-900">CollabChain</h1>
// //         </div>

// //         <div className="hidden md:flex items-center space-x-8">
// //           <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
// //           <Link to="/features" className="text-gray-700 hover:text-green-600 font-medium">Features</Link>
// //           <Link to="/how-it-works" className="text-gray-700 hover:text-green-600 font-medium">How It Works</Link>
// //           <Link to="/benefits" className="text-gray-700 hover:text-green-600 font-medium">Benefits</Link>
// //           <Link to="/statistics" className="text-gray-700 hover:text-green-600 font-medium">Statistics</Link>
// //         </div>


// //         <div className="flex items-center space-x-3">
// //           {!activeAddress && (
// //             <button
// //               onClick={toggleWalletModal}
// //               className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
// //             >
// //               Connect Wallet
// //             </button>
// //           )}

// //           {activeAddress && (
// //             <button
// //               onClick={toggleWalletModal}
// //               className="bg-green-50 text-green-800 px-6 py-2 rounded-lg font-semibold hover:bg-green-100 transition-colors border border-green-200"
// //             >
// //               ✅ {activeAddress.slice(0, 8)}...{activeAddress.slice(-6)}
// //             </button>
// //           )}
// //         </div>
// //       </nav>

// //       {/* 🚀 Hero Section */}
// //       <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 px-8">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h1 className="text-5xl font-bold text-gray-900 mb-6">
// //             Blockchain-Powered Verification
// //           </h1>
// //           <h2 className="text-4xl font-bold text-gray-800 mb-8">
// //             Verify Internship Credentials with Blockchain Technology
// //           </h2>
// //           <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
// //             A decentralized platform built on Algorand that enables instant verification of internship credentials,
// //             eliminating fraud and ensuring authenticity for students and organizations.
// //           </p>

// //           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
// //             <button
// //               onClick={toggleWalletModal}
// //               className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
// //             >
// //               Get Started →
// //             </button>
// //             <button
// //               onClick={handleVerifyCredential}
// //               className="bg-white text-green-600 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg"
// //             >
// //               Verify Credentials
// //             </button>
// //             <button className="bg-transparent text-gray-700 border border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg">
// //               Watch Demo
// //             </button>
// //           </div>

// //           {/* Statistics */}
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
// //               <div className="text-gray-600">Credentials Issued</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">250+</div>
// //               <div className="text-gray-600">Organizations</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
// //               <div className="text-gray-600">Uptime</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">2.3s</div>
// //               <div className="text-gray-600">Avg Verification</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🎯 Core Features Section */}
// //       <section className="py-20 px-8 bg-white">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Core Features</h2>
// //           <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
// //             Everything you need for secure, transparent, and efficient credential management
// //           </p>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Verification</h3>
// //               <p className="text-gray-600">
// //                 Verify any credential in seconds using blockchain technology. No manual checks or waiting periods required.
// //               </p>
// //             </div>
// //             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Global Access</h3>
// //               <p className="text-gray-600">
// //                 Access and verify credentials from anywhere in the world, 24/7, with just an internet connection.
// //               </p>
// //             </div>
// //             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Immutable Records</h3>
// //               <p className="text-gray-600">
// //                 All credentials are permanently stored on Algorand blockchain, making them tamper-proof and always accessible.
// //               </p>
// //             </div>
// //             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
// //               <p className="text-gray-600">
// //                 Built on Algorand for near-instant transaction finality and low fees for all operations.
// //               </p>
// //             </div>
// //             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Issuance</h3>
// //               <p className="text-gray-600">
// //                 Organizations can issue credentials directly to students with a simple, streamlined process.
// //               </p>
// //             </div>
// //             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Party Trust</h3>
// //               <p className="text-gray-600">
// //                 Students, organizations, and verifiers all benefit from transparent, trustless verification.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🔄 How It Works Section */}
// //       <section className="py-20 px-8 bg-gray-50">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
// //           <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
// //             A simple three-step process for secure credential management
// //           </p>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
// //             <div className="text-center">
// //               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
// //                 <span className="text-2xl">1</span>
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Issue Credential</h3>
// //               <p className="text-gray-600">
// //                 Organizations complete an internship and issue a verified credential directly to the student's wallet address on the blockchain.
// //               </p>
// //             </div>
// //             <div className="text-center">
// //               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
// //                 <span className="text-2xl">2</span>
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Store on Blockchain</h3>
// //               <p className="text-gray-600">
// //                 The credential is permanently recorded on Algorand blockchain with all relevant details, creating an immutable record.
// //               </p>
// //             </div>
// //             <div className="text-center">
// //               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
// //                 <span className="text-2xl">3</span>
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Verification</h3>
// //               <p className="text-gray-600">
// //                 Anyone can verify the credential's authenticity by searching the credential ID, receiving instant confirmation from the blockchain.
// //               </p>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
// //             {/* For Students */}
// //             <div>
// //               <h3 className="text-2xl font-bold text-gray-900 mb-6">For Students</h3>
// //               <div className="space-y-4">
// //                 <div className="flex items-start space-x-4">
// //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
// //                     <span className="text-white text-sm">✓</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold text-gray-900">Own Your Credentials</h4>
// //                     <p className="text-gray-600 text-sm">Keep all your internship credentials in one secure wallet that you control.</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
// //                     <span className="text-white text-sm">✓</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold text-gray-900">Share Instantly</h4>
// //                     <p className="text-gray-600 text-sm">Share verifiable credentials with potential employers in seconds.</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
// //                     <span className="text-white text-sm">✓</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold text-gray-900">Permanent Access</h4>
// //                     <p className="text-gray-600 text-sm">Your credentials remain accessible forever on the blockchain.</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* For Organizations */}
// //             <div>
// //               <h3 className="text-2xl font-bold text-gray-900 mb-6">For Organizations</h3>
// //               <div className="space-y-4">
// //                 <div className="flex items-start space-x-4">
// //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
// //                     <span className="text-white text-sm">✓</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold text-gray-900">Streamlined Process</h4>
// //                     <p className="text-gray-600 text-sm">Issue credentials quickly without paper certificates or manual processes.</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
// //                     <span className="text-white text-sm">✓</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold text-gray-900">Fraud Prevention</h4>
// //                     <p className="text-gray-600 text-sm">Eliminate fake credentials with blockchain verification.</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-start space-x-4">
// //                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
// //                     <span className="text-white text-sm">✓</span>
// //                   </div>
// //                   <div>
// //                     <h4 className="font-semibold text-gray-900">Build Trust</h4>
// //                     <p className="text-gray-600 text-sm">Enhance your reputation with transparent, verifiable credentials.</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🏆 Performance Section */}
// //       <section className="py-20 px-8 bg-white">
// //         <div className="max-w-6xl mx-auto text-center">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-16">Built on Algorand</h2>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">4.5s</div>
// //               <div className="text-gray-600">Block Time</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">$0.001</div>
// //               <div className="text-gray-600">Transaction Fee</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">6,000+</div>
// //               <div className="text-gray-600">TPS</div>
// //             </div>
// //             <div className="text-center">
// //               <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
// //               <div className="text-gray-600">Secure</div>
// //             </div>
// //           </div>

// //           <div className="mt-16">
// //             <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
// //             <p className="text-gray-600 mb-8">
// //               Connect your PeraWallet and start verifying or issuing credentials today.
// //             </p>
// //             <button
// //               onClick={toggleWalletModal}
// //               className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
// //             >
// //               Connect Wallet
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ⚙️ Modals */}
// //       <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
// //       <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
// //       <AppCalls
// //         openModal={openContractModal}
// //         setModalState={setOpenContractModal}
// //       />

// //       {/* 🔻 Footer */}
// //       <footer className="bg-gray-900 text-white py-12 px-8">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="flex flex-col md:flex-row justify-between items-center">
// //             <div className="mb-6 md:mb-0">
// //               <h3 className="text-2xl font-bold mb-2">CollabChain</h3>
// //               <p className="text-gray-400">Blockchain-Powered Verification</p>
// //             </div>
// //             <div className="flex flex-wrap justify-center gap-8">
// //               <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
// //               <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
// //               <a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
// //               <a href="#" className="text-gray-400 hover:text-white transition-colors">Benefits</a>
// //               <a href="#" className="text-gray-400 hover:text-white transition-colors">Statistics</a>
// //             </div>
// //           </div>
// //           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
// //             <p>© {new Date().getFullYear()} CollabChain. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;




// import { useWallet } from '@txnlab/use-wallet-react';
// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import AppCalls from './components/AppCalls';
// import ConnectWallet from './components/ConnectWallet';
// import Transact from './components/Transact';

// const Home: React.FC = () => {
//   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
//   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
//   const [openContractModal, setOpenContractModal] = useState<boolean>(false);

//   const { activeAddress } = useWallet();

//   const toggleWalletModal = () => setOpenWalletModal(!openWalletModal);
//   const toggleDemoModal = () => setOpenDemoModal(!openDemoModal);
//   const toggleContractModal = () => setOpenContractModal(!openContractModal);

//   // Smart contract interaction functions
//   const handleIssueCredential = async () => {
//     if (!activeAddress) {
//       toggleWalletModal();
//       return;
//     }
//     console.log("Issuing credential for:", activeAddress);
//     toggleDemoModal();
//   };

//   const handleVerifyCredential = async () => {
//     if (!activeAddress) {
//       toggleWalletModal();
//       return;
//     }
//     console.log("Verifying credential for:", activeAddress);
//     toggleContractModal();
//   };

//   const handleViewPassport = async () => {
//     if (!activeAddress) {
//       toggleWalletModal();
//       return;
//     }
//     console.log("Viewing career passport for:", activeAddress);
//     toggleContractModal();
//   };

//   // Sample credential data - this would come from smart contract
//   const userCredentials = [
//     { id: 1, type: 'Degree', institution: 'University of Example', date: '2023-05-15', verified: true },
//     { id: 2, type: 'Certification', institution: 'Tech Institute', date: '2023-08-20', verified: true },
//     { id: 3, type: 'Internship', institution: 'Blockchain Corp', date: '2023-11-10', verified: false }
//   ];

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       {/* 🌐 Navbar */}
//       <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           <h1 className="text-2xl font-bold text-gray-900">CollabChain</h1>
//         </div>

//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
//           <Link to="/features" className="text-gray-700 hover:text-green-600 font-medium">Features</Link>
//           <Link to="/how-it-works" className="text-gray-700 hover:text-green-600 font-medium">How It Works</Link>
//           <Link to="/benefits" className="text-gray-700 hover:text-green-600 font-medium">Benefits</Link>
//           <Link to="/statistics" className="text-gray-700 hover:text-green-600 font-medium">Statistics</Link>
//         </div>

//         <div className="flex items-center space-x-3">
//           {!activeAddress && (
//             <button
//               onClick={toggleWalletModal}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
//             >
//               Connect Wallet
//             </button>
//           )}

//           {activeAddress && (
//             <button
//               onClick={toggleWalletModal}
//               className="bg-green-50 text-green-800 px-6 py-2 rounded-lg font-semibold hover:bg-green-100 transition-colors border border-green-200"
//             >
//               ✅ {activeAddress.slice(0, 8)}...{activeAddress.slice(-6)}
//             </button>
//           )}
//         </div>
//       </nav>

//       {/* 🚀 Hero Section */}
//       <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">
//             Blockchain-Powered Verification
//           </h1>
//           <h2 className="text-4xl font-bold text-gray-800 mb-8">
//             Verify Internship Credentials with Blockchain Technology
//           </h2>
//           <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//             A decentralized platform built on Algorand that enables instant verification of internship credentials,
//             eliminating fraud and ensuring authenticity for students and organizations.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
//             <button
//               onClick={toggleWalletModal}
//               className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
//             >
//               Get Started →
//             </button>
//             <button
//               onClick={handleVerifyCredential}
//               className="bg-white text-green-600 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors text-lg"
//             >
//               Verify Credentials
//             </button>
//             <button className="bg-transparent text-gray-700 border border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg">
//               Watch Demo
//             </button>
//           </div>

//           {/* Statistics */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
//               <div className="text-gray-600">Credentials Issued</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">250+</div>
//               <div className="text-gray-600">Organizations</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
//               <div className="text-gray-600">Uptime</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">2.3s</div>
//               <div className="text-gray-600">Avg Verification</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🎯 Core Features Section */}
//       <section className="py-20 px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Core Features</h2>
//           <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
//             Everything you need for secure, transparent, and efficient credential management
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Verification</h3>
//               <p className="text-gray-600">
//                 Verify any credential in seconds using blockchain technology. No manual checks or waiting periods required.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Global Access</h3>
//               <p className="text-gray-600">
//                 Access and verify credentials from anywhere in the world, 24/7, with just an internet connection.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Immutable Records</h3>
//               <p className="text-gray-600">
//                 All credentials are permanently stored on Algorand blockchain, making them tamper-proof and always accessible.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
//               <p className="text-gray-600">
//                 Built on Algorand for near-instant transaction finality and low fees for all operations.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Easy Issuance</h3>
//               <p className="text-gray-600">
//                 Organizations can issue credentials directly to students with a simple, streamlined process.
//               </p>
//             </div>
//             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Party Trust</h3>
//               <p className="text-gray-600">
//                 Students, organizations, and verifiers all benefit from transparent, trustless verification.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🔄 How It Works Section */}
//       <section className="py-20 px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
//           <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
//             A simple three-step process for secure credential management
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl">1</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Issue Credential</h3>
//               <p className="text-gray-600">
//                 Organizations complete an internship and issue a verified credential directly to the student's wallet address on the blockchain.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl">2</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Store on Blockchain</h3>
//               <p className="text-gray-600">
//                 The credential is permanently recorded on Algorand blockchain with all relevant details, creating an immutable record.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl">3</span>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Verification</h3>
//               <p className="text-gray-600">
//                 Anyone can verify the credential's authenticity by searching the credential ID, receiving instant confirmation from the blockchain.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
//             {/* For Students */}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">For Students</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Own Your Credentials</h4>
//                     <p className="text-gray-600 text-sm">Keep all your internship credentials in one secure wallet that you control.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Share Instantly</h4>
//                     <p className="text-gray-600 text-sm">Share verifiable credentials with potential employers in seconds.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Permanent Access</h4>
//                     <p className="text-gray-600 text-sm">Your credentials remain accessible forever on the blockchain.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* For Organizations */}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">For Organizations</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Streamlined Process</h4>
//                     <p className="text-gray-600 text-sm">Issue credentials quickly without paper certificates or manual processes.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Fraud Prevention</h4>
//                     <p className="text-gray-600 text-sm">Eliminate fake credentials with blockchain verification.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
//                     <span className="text-white text-sm">✓</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900">Build Trust</h4>
//                     <p className="text-gray-600 text-sm">Enhance your reputation with transparent, verifiable credentials.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 🏆 Performance Section */}
//       <section className="py-20 px-8 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-16">Built on Algorand</h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">4.5s</div>
//               <div className="text-gray-600">Block Time</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">$0.001</div>
//               <div className="text-gray-600">Transaction Fee</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">6,000+</div>
//               <div className="text-gray-600">TPS</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
//               <div className="text-gray-600">Secure</div>
//             </div>
//           </div>

//           <div className="mt-16">
//             <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
//             <p className="text-gray-600 mb-8">
//               Connect your PeraWallet and start verifying or issuing credentials today.
//             </p>
//             <button
//               onClick={toggleWalletModal}
//               className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
//             >
//               Connect Wallet
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ⚙️ Modals */}
//       <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
//       <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
//       <AppCalls
//         openModal={openContractModal}
//         setModalState={setOpenContractModal}
//       />

//       {/* 🔻 Footer */}
//       <footer className="bg-gray-900 text-white py-12 px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start mb-8">

//             <div className="mb-6 md:mb-0">
//               <h3 className="text-2xl font-bold mb-2">InternValidator</h3>
//               <p className="text-gray-400">Blockchain-Powered Verification</p>
//             </div>

//             <div className="flex flex-wrap justify-center gap-8">
//               <div className="flex flex-col">
//                 <h4 className="font-semibold mb-2">Product</h4>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Benefits</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Statistics</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Integration Guide</a>
//               </div>

//               <div className="flex flex-col">
//                 <h4 className="font-semibold mb-2">Company</h4>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
//               </div>

//               <div className="flex flex-col">
//                 <h4 className="font-semibold mb-2">Contact & Support</h4>
//                 <a href="mailto:support@internvalidator.com" className="text-gray-400 hover:text-white transition-colors">support@internvalidator.com</a>
//                 <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
//                 <p className="text-gray-400">123 Blockchain Avenue<br />Tech District, CA 94105</p>
//               </div>

//               <div className="flex flex-col">
//                 <h4 className="font-semibold mb-2">Help Center</h4>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Support Tickets</a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">Knowledge Base</a>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center mb-4 md:mb-0">
//               <span className="text-gray-400 mr-2">Built on</span>
//               <span className="font-medium">Append Blockchain</span>
//             </div>

//             <div className="flex gap-6">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-4 pt-6 text-center text-gray-400">
//             <p>© 2024 CollabChain. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;



import { useWallet } from '@txnlab/use-wallet-react';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppCalls from './components/AppCalls';
import ConnectWallet from './components/ConnectWallet';
import Transact from './components/Transact';
import RoleSelection from './components/RoleSelection';
import CompanyVerification from './components/CompanyVerification';

type UserRole = 'student' | 'company' | null;

interface HomeProps {
  onNavigate: (page: string) => void;
  userRole: UserRole;
  walletAddress: string;
  onRoleSelect: (role: UserRole) => void;
  onDisconnect: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, userRole, walletAddress, onRoleSelect, onDisconnect }) => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false);
  const [openContractModal, setOpenContractModal] = useState<boolean>(false);
  const [showRoleSelection, setShowRoleSelection] = useState<boolean>(false);
  const [showCompanyVerification, setShowCompanyVerification] = useState<boolean>(false);
  const [previousAddress, setPreviousAddress] = useState<string | null | undefined>(undefined);

  const { activeAddress, wallets } = useWallet();
  const navigate = useNavigate();

  const toggleWalletModal = () => setOpenWalletModal(!openWalletModal);
  const toggleDemoModal = () => setOpenDemoModal(!openDemoModal);
  const toggleContractModal = () => setOpenContractModal(!openContractModal);

  // Show role selection only when wallet is NEWLY connected (not on page reload)
  useEffect(() => {
    // Check if this is a NEW connection (address changed from undefined to a value)
    if (activeAddress && !previousAddress && !userRole && !walletAddress) {
      // Wallet just connected for the first time
      const timer = setTimeout(() => {
        setShowRoleSelection(true);
        setOpenWalletModal(false);
      }, 800);
      return () => clearTimeout(timer);
    }
    
    // Update previous address
    if (activeAddress !== previousAddress) {
      setPreviousAddress(activeAddress);
    }
    
    // Return undefined for all other cases
    return undefined;
  }, [activeAddress, previousAddress, userRole, walletAddress]);

  const handleRoleSelect = (role: UserRole) => {
    setShowRoleSelection(false);
    
    if (role === 'student') {
      // Students get direct access
      onRoleSelect(role);
      navigate('/student-portal');
    } else if (role === 'company') {
      // Companies need to verify first
      setShowCompanyVerification(true);
    }
  };

  const handleCompanyVerification = (verificationId: string) => {
    // Store verification ID if needed (for now just verify)
    console.log('Company verified with ID:', verificationId);
    setShowCompanyVerification(false);
    onRoleSelect('company');
    navigate('/company-portal');
  };

  const handleCancelVerification = () => {
    setShowCompanyVerification(false);
    // Show role selection again
    setShowRoleSelection(true);
  };

  const handleDisconnect = async () => {
    // First disconnect from Pera Wallet
    try {
      const activeWallet = wallets.find(w => w.isActive);
      if (activeWallet) {
        await activeWallet.disconnect();
      }
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
    
    // Then clear app state
    onDisconnect();
  };

  // Smart contract interaction functions
  const handleIssueCredential = async () => {
    if (!activeAddress) {
      toggleWalletModal();
      return;
    }
    console.log("Issuing credential for:", activeAddress);
    toggleDemoModal();
  };

  const handleVerifyCredential = async () => {
    if (!activeAddress) {
      toggleWalletModal();
      return;
    }
    console.log("Verifying credential for:", activeAddress);
    toggleContractModal();
  };

  const handleViewPassport = async () => {
    if (!activeAddress) {
      toggleWalletModal();
      return;
    }
    console.log("Viewing career passport for:", activeAddress);
    toggleContractModal();
  };

  return (
    <div className="min-h-screen bg-animated-gradient flex flex-col">
      {/* 🌐 Navbar */}
      <nav className="glass-dark sticky top-0 z-50 py-4 px-8 flex justify-between items-center shadow-xl shadow-cyber-500/10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center glow-purple">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <h1 className="text-2xl font-bold gradient-text font-display">CollabChain</h1>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-300">Home</Link>
          <Link to="/features" className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-300">Features</Link>
          <Link to="/how-it-works" className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-300">How It Works</Link>
          <Link to="/benefits" className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-300">Benefits</Link>

          {/* Show portal link based on selected role */}
          {activeAddress && userRole === 'student' && (
            <Link to="/student-portal" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">
              Student Portal
            </Link>
          )}
          {activeAddress && userRole === 'company' && (
            <Link to="/company-portal" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-300">
              Company Portal
            </Link>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {!activeAddress && (
            <button
              onClick={toggleWalletModal}
              className="btn-cyber group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Connect Wallet</span>
                <span className="text-xs opacity-70">🔗</span>
              </span>
            </button>
          )}

          {activeAddress && (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-purple-300 font-mono bg-slate-800/50 px-3 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                {activeAddress.slice(0, 6)}...{activeAddress.slice(-4)}
              </span>

              {!userRole && (
                <button
                  onClick={() => setShowRoleSelection(true)}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/50 hover:scale-105"
                >
                  Select Portal
                </button>
              )}

              {userRole && (
                <Link
                  to={userRole === 'student' ? '/student-portal' : '/company-portal'}
                  className="btn-primary px-6 py-2"
                >
                  {userRole === 'student' ? 'Student' : 'Company'} Portal
                </Link>
              )}
              
              <button
                onClick={handleDisconnect}
                className="bg-dark-800/50 border-2 border-red-500/30 text-red-400 px-4 py-2 rounded-lg font-semibold hover:bg-red-500/10 hover:border-red-500 hover:text-red-300 transition-all duration-300 backdrop-blur-sm"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* 🚀 Hero Section */}
      <section className="relative py-20 px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob card-3d-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 card-3d-float"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-8 px-5 py-2.5 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm animate-float">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">✨ Powered by Blockchain Magic</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-display leading-tight">
            <span className="gradient-text">Verify internships.</span>
            <br />
            <span className="text-white">The blockchain way.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Honestly? We just wanted to make something that doesn't suck. No more fake certificates. No more waiting forever. 
            <span className="text-purple-400 font-normal">Just instant, tamper-proof credentials</span> you actually own.
          </p>

          {/* Show role selection prompt if wallet connected but no role selected */}
          {activeAddress && !userRole && (
            <div className="mb-8 card max-w-2xl mx-auto border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-2xl">👋</span>
                <h3 className="text-xl font-bold text-white">Choose Your Portal</h3>
              </div>
              <p className="text-gray-300 text-center mb-4">
                You're connected! Please select your role to continue
              </p>
              <button
                onClick={() => setShowRoleSelection(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
              >
                Pick Your Portal (Student or Company)
              </button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            {!activeAddress && (
              <button
                onClick={toggleWalletModal}
                className="btn-cyber text-base md:text-lg px-7 py-4 group relative overflow-hidden hover:scale-[1.02] transition-all"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Connect Wallet</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </button>
            )}
            
            <button
              onClick={() => onNavigate('verify-credentials')}
              className="bg-white/10 text-white border-2 border-white/20 px-7 py-4 rounded-xl font-semibold hover:bg-white/20 hover:border-purple-400 transition-all duration-300 text-base md:text-lg backdrop-blur-sm hover:scale-[1.02] inline-flex items-center gap-2"
            >
              <span className="text-xl">🔍</span>
              <span>Verify a Credential</span>
            </button>

            {/* Show portal button only when role is selected */}
            {activeAddress && userRole && (
              <Link
                to={userRole === 'student' ? '/student-portal' : '/company-portal'}
                className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
              >
                <span>Go to {userRole === 'student' ? 'Student' : 'Company'} Portal</span>
                <span>→</span>
              </Link>
            )}
            
            {!activeAddress && (
              <button className="bg-transparent text-gray-400 border-2 border-gray-600/60 px-7 py-4 rounded-xl font-medium hover:bg-gray-800/50 hover:border-gray-500 hover:text-gray-300 transition-all duration-300 text-base md:text-lg backdrop-blur-sm hover:scale-[1.02]">
                <span className="inline-flex items-center gap-2">
                  <span>See it in action</span>
                  <span className="text-sm">▶</span>
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 🎯 Core Features Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-5 font-display">
              <span className="text-white">Why it</span> <span className="gradient-text">works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Built for real people, solving real problems
            </p>
          </div>

          {/* Humanized grid with varied layouts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            <div className="card group cursor-pointer p-6 md:p-7 hover:scale-[1.02] transition-all duration-300 hover:border-purple-500/50">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Crazy Fast</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Seriously, it takes like 2 seconds. Pop in a credential ID and boom—you know if it's real or fake.
              </p>
            </div>
            <div className="card group cursor-pointer p-7 md:p-8 md:mt-6 hover:scale-[1.02] transition-all duration-300 hover:border-pink-500/50">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Works Everywhere</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Got wifi? You're good. Works on your phone, laptop, grandma's old desktop—you name it.
              </p>
            </div>
            <div className="card group cursor-pointer p-6 hover:scale-[1.02] transition-all duration-300 hover:border-purple-500/50">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Can't Be Faked</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Once something's on the blockchain, that's it. Nobody can edit it, delete it, or mess with it. Ever.
              </p>
            </div>
            <div className="card group cursor-pointer p-7 md:-mt-3 hover:scale-[1.02] transition-all duration-300 hover:border-pink-500/50">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Stupid Fast</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Algorand blockchain is ridiculously quick. We're talking seconds, not hours. And it barely costs anything.
              </p>
            </div>
            <div className="card group cursor-pointer p-6 md:p-7 md:mt-4 hover:scale-[1.02] transition-all duration-300 hover:border-purple-500/50">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Super Easy to Issue</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Fill out a quick form, hit submit. Done. No complicated training or setup required.
              </p>
            </div>
            <div className="card group cursor-pointer p-7 md:p-6 hover:scale-[1.02] transition-all duration-300 hover:border-pink-500/50">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Everyone Wins</h3>
              <p className="text-gray-400 text-sm md:text-base">
                Students own their stuff, employers verify in 2 clicks, companies stop wasting time on paperwork.
              </p>
            </div>
          </div>

              {/* Portal Access Cards for Connected Users */}
          {activeAddress && userRole && (
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center text-white mb-8 font-display">Quick Access</h3>
              <div className="max-w-2xl mx-auto">
                <Link
                  to={userRole === 'student' ? '/student-portal' : '/company-portal'}
                  className="block bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-purple-500/50 backdrop-blur-sm hover:shadow-purple-500/50"
                >
                  <h4 className="text-2xl font-bold mb-4 font-display">{userRole === 'student' ? 'Student' : 'Company'} Portal</h4>
                  <p className="mb-4 opacity-90 text-gray-100">
                    {userRole === 'student' 
                      ? 'Manage your credentials, view your career passport, and share your achievements with employers.'
                      : 'Issue credentials to students, verify existing credentials, and manage your organization.'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Access Features:</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm border border-white/30">
                      {userRole === 'student' ? 'Profile • Credentials • Verify' : 'Issue • Analytics • Organization'}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 🔄 How It Works Section */}
      <section className="py-20 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 font-display text-white">How It <span className="gradient-text">Works</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A simple three-step process for secure credential management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300 glow-purple">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Company Issues It</h3>
              <p className="text-gray-400">
                Company finishes checking your work, fills out a quick form, hits submit. Credential goes straight to your wallet. Done.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300 glow-pink">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Gets Saved Forever</h3>
              <p className="text-gray-400">
                Everything gets locked into the blockchain. Like, permanently. Nobody can change it, delete it, or mess with it. Ever.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300 glow">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Anyone Can Check It</h3>
              <p className="text-gray-400">
                Need to verify it? Just type in the ID. Takes 2 seconds and tells you if it's legit or fake. Simple as that.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            {/* For Students */}
            <div className="card hover:border-purple-500/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-purple-400">🎓</span> For Students
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Actually Own Your Stuff</h4>
                    <p className="text-gray-400 text-sm">Keep everything in your wallet. Nobody can take it away, lose it, or "accidentally" delete it.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Share in 2 Clicks</h4>
                    <p className="text-gray-400 text-sm">Send your credentials to employers instantly. No more "I'll email it to you later."</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Never Lose Them</h4>
                    <p className="text-gray-400 text-sm">Your credentials live on the blockchain forever. Company goes bankrupt? Doesn't matter.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Organizations */}
            <div className="card hover:border-pink-500/50">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-pink-400">🏢</span> For Organizations
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Stop Wasting Time</h4>
                    <p className="text-gray-400 text-sm">No more printing certificates, signing papers, or mailing stuff. Issue in seconds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Catch Fake Ones</h4>
                    <p className="text-gray-400 text-sm">Blockchain verification means nobody's lying on their resume. You'll know instantly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Look Professional</h4>
                    <p className="text-gray-400 text-sm">Blockchain credentials are way cooler than PDFs. Impress everyone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏆 Performance Section */}
      <section className="py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold mb-16 font-display">
            <span className="text-white">Built on</span> <span className="gradient-text">Algorand</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="card text-center group hover:scale-110 hover:border-purple-500/50">
              <div className="text-4xl font-bold text-purple-400 mb-2 font-display">4.5s</div>
              <div className="text-gray-400 text-sm">Block Time</div>
            </div>
            <div className="card text-center group hover:scale-110 hover:border-pink-500/50">
              <div className="text-4xl font-bold text-pink-400 mb-2 font-display">$0.001</div>
              <div className="text-gray-400 text-sm">Transaction Fee</div>
            </div>
            <div className="card text-center group hover:scale-110 hover:border-purple-500/50">
              <div className="text-4xl font-bold text-purple-400 mb-2 font-display">6,000+</div>
              <div className="text-gray-400 text-sm">TPS</div>
            </div>
            <div className="card text-center group hover:scale-110 hover:border-pink-500/50">
              <div className="text-4xl font-bold text-pink-400 mb-2 font-display">100%</div>
              <div className="text-gray-400 text-sm">Secure</div>
            </div>
          </div>

          <div className="mt-16 card max-w-2xl mx-auto hover:border-purple-500/50">
            <h3 className="text-3xl font-bold text-white mb-4 font-display">Wanna try this thing out?</h3>
            <p className="text-gray-400 mb-8">
              Connect your wallet and start verifying or issuing credentials. Takes literally 30 seconds.
            </p>
            <button
              onClick={toggleWalletModal}
              className="btn-primary text-lg px-8 py-4"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </section>

      {/* ⚙️ Modals */}
      <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
      <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
      <AppCalls
        openModal={openContractModal}
        setModalState={setOpenContractModal}
      />
      
      {/* Role Selection Modal */}
      {showRoleSelection && activeAddress && (
        <RoleSelection 
          onSelectRole={handleRoleSelect}
          walletAddress={activeAddress}
        />
      )}

      {/* Company Verification Modal */}
      {showCompanyVerification && activeAddress && (
        <CompanyVerification
          onVerify={handleCompanyVerification}
          onCancel={handleCancelVerification}
          walletAddress={activeAddress}
        />
      )}

      {/* 🔻 Footer */}
      <footer className="bg-slate-950 border-t border-purple-500/20 text-white py-12 px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">

            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center glow-purple">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text font-display">CollabChain</h3>
              </div>
              <p className="text-gray-400">Blockchain-Powered Verification</p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-10 h-10 bg-slate-800/50 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300">
                  <span className="text-purple-400">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300">
                  <span className="text-purple-400">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800/50 border border-purple-500/30 rounded-lg flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300">
                  <span className="text-purple-400">§</span>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-2 text-purple-400">Product</h4>
                <Link to="/features" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Features</Link>
                <Link to="/how-it-works" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">How It Works</Link>
                <Link to="/benefits" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Benefits</Link>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">API Documentation</a>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Integration Guide</a>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-2 text-pink-400">Company</h4>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">About Us</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">Careers</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">Press</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">Partners</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">Blog</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">Security</a>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-2 text-purple-400">Contact & Support</h4>
                <a href="mailto:support@collabchain.com" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">support@collabchain.com</a>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">+1 (555) 123-4567</a>
                <p className="text-gray-400 text-sm">123 Blockchain Avenue<br />Tech District, CA 94105</p>
              </div>

              <div className="flex flex-col space-y-2">
                <h4 className="font-semibold mb-2 text-pink-400">Help Center</h4>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">FAQ</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">Support Tickets</a>
                <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors text-sm">Knowledge Base</a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 pb-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-gray-400 mr-2">Built on</span>
              <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Algorand Blockchain</span>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-4 pt-6 text-center text-gray-400 text-sm">
            <p>© 2024 CollabChain. All rights reserved. Secured by blockchain technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
