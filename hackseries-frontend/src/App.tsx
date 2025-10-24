// // // // // import { SupportedWallet, WalletId, WalletManager, WalletProvider } from '@txnlab/use-wallet-react'
// // // // // import { SnackbarProvider } from 'notistack'
// // // // // import Home from './Home'
// // // // // import { getAlgodConfigFromViteEnvironment, getKmdConfigFromViteEnvironment } from './utils/network/getAlgoClientConfigs'
// // // // // import FeaturesPage from "./components/pages/FeaturesPage";
// // // // // import BenefitsPage from "./components/pages/BenefitsPage";
// // // // // import StatisticsPage from "./components/pages/StatisticsPage";
// // // // // import HowItWorksPage from "./components/pages/HowItWorksPage";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // // let supportedWallets: SupportedWallet[]
// // // // // if (import.meta.env.VITE_ALGOD_NETWORK === 'localnet') {
// // // // //   const kmdConfig = getKmdConfigFromViteEnvironment()
// // // // //   supportedWallets = [
// // // // //     {
// // // // //       id: WalletId.KMD,
// // // // //       options: {
// // // // //         baseServer: kmdConfig.server,
// // // // //         token: String(kmdConfig.token),
// // // // //         port: String(kmdConfig.port),
// // // // //       },
// // // // //     },
// // // // //   ]
// // // // // } else {
// // // // //   supportedWallets = [
// // // // //     { id: WalletId.DEFLY },
// // // // //     { id: WalletId.PERA },
// // // // //     { id: WalletId.EXODUS },
// // // // //     // If you are interested in WalletConnect v2 provider
// // // // //     // refer to https://github.com/TxnLab/use-wallet for detailed integration instructions
// // // // //   ]
// // // // // }

// // // // // export default function App() {
// // // // //   const algodConfig = getAlgodConfigFromViteEnvironment()

// // // // //   const walletManager = new WalletManager({
// // // // //     wallets: supportedWallets,
// // // // //     defaultNetwork: algodConfig.network,
// // // // //     networks: {
// // // // //       [algodConfig.network]: {
// // // // //         algod: {
// // // // //           baseServer: algodConfig.server,
// // // // //           port: algodConfig.port,
// // // // //           token: String(algodConfig.token),
// // // // //         },
// // // // //       },
// // // // //     },
// // // // //     options: {
// // // // //       resetNetwork: true,
// // // // //     },
// // // // //   })

// // // // //   return (
// // // // //   <SnackbarProvider maxSnack={3}>
// // // // //     <WalletProvider manager={walletManager}>
// // // // //       <Router>
// // // // //         <Routes>
// // // // //           <Route path="/" element={<Home />} />
// // // // //           <Route path="/features" element={<FeaturesPage />} />
// // // // //           <Route path="/benefits" element={<BenefitsPage />} />
// // // // //           <Route path="/statistics" element={<StatisticsPage />} />
// // // // //           <Route path="/how-it-works" element={<HowItWorksPage />} />
// // // // //         </Routes>
// // // // //       </Router>
// // // // //     </WalletProvider>
// // // // //   </SnackbarProvider>
// // // // // );

// // // // // }




// // // // import {
// // // //   SupportedWallet,
// // // //   WalletId,
// // // //   WalletManager,
// // // //   WalletProvider,
// // // // } from "@txnlab/use-wallet-react";
// // // // import { SnackbarProvider } from "notistack";
// // // // import {
// // // //   Route,
// // // //   BrowserRouter as Router,
// // // //   Routes,
// // // //   useNavigate,
// // // // } from "react-router-dom";

// // // // import Home from "./Home";
// // // // // import CompanyPortal from "./components/CompanyPortal";
// // // // // import LandingPage from "./components/LandingPage";
// // // // // import StudentPortal from "./components/StudentPortal";
// // // // import ProfilePage from './components/dashboard/ProfilePage';
// // // // import BenefitsPage from "./components/pages/BenefitsPage";
// // // // import FeaturesPage from "./components/pages/FeaturesPage";
// // // // import HowItWorksPage from "./components/pages/HowItWorksPage";
// // // // import StatisticsPage from "./components/pages/StatisticsPage";

// // // // import {
// // // //   getAlgodConfigFromViteEnvironment,
// // // //   getKmdConfigFromViteEnvironment,
// // // // } from "./utils/network/getAlgoClientConfigs";


// // // // // ---------------------- ROUTES COMPONENT ----------------------
// // // // function AppRoutes() {
// // // //   const navigate = useNavigate();

// // // //   // Centralized navigation function
// // // //   const handleNavigate = (page: string) => {
// // // //     const routes: Record<string, string> = {
// // // //       landing: "/",
// // // //       home: "/home",
// // // //       features: "/features",
// // // //       benefits: "/benefits",
// // // //       statistics: "/statistics",
// // // //       "how-it-works": "/how-it-works",
// // // //       company: "/company-portal",
// // // //       student: "/student-portal",
// // // //     };
// // // //     navigate(routes[page] || "/");
// // // //   };

// // // //   return (
// // // //     <Routes>
// // // //       <Route path="/" element={<Home onNavigate={handleNavigate} />} />
// // // //       <Route path="/home" element={<Home onNavigate={handleNavigate} />} />
// // // //       <Route path="/features" element={<FeaturesPage onNavigate={handleNavigate} />} />
// // // //       <Route path="/benefits" element={<BenefitsPage onNavigate={handleNavigate} />} />
// // // //       <Route path="/statistics" element={<StatisticsPage onNavigate={handleNavigate} />} />
// // // //       <Route path="/how-it-works" element={<HowItWorksPage onNavigate={handleNavigate} />} />
// // // //       <Route path="/profile" element={<ProfilePage onNavigate={handleNavigate} />} />
// // // //       {/* <Route path="/company-portal" element={<CompanyPortal onNavigate={handleNavigate} />} />
// // // //       <Route path="/student-portal" element={<StudentPortal onNavigate={handleNavigate} />} /> */}
// // // //     </Routes>
// // // //   );
// // // // }


// // // // // ---------------------- MAIN APP ----------------------
// // // // export default function App() {
// // // //   const algodConfig = getAlgodConfigFromViteEnvironment();

// // // //   // Choose wallet configuration
// // // //   let supportedWallets: SupportedWallet[];
// // // //   if (import.meta.env.VITE_ALGOD_NETWORK === "localnet") {
// // // //     const kmdConfig = getKmdConfigFromViteEnvironment();
// // // //     supportedWallets = [
// // // //       {
// // // //         id: WalletId.KMD,
// // // //         options: {
// // // //           baseServer: kmdConfig.server,
// // // //           token: String(kmdConfig.token),
// // // //           port: String(kmdConfig.port),
// // // //         },
// // // //       },
// // // //     ];
// // // //   } else {
// // // //     supportedWallets = [
// // // //       { id: WalletId.DEFLY },
// // // //       { id: WalletId.PERA },
// // // //       { id: WalletId.EXODUS },
// // // //     ];
// // // //   }

// // // //   // Initialize wallet manager
// // // //   const walletManager = new WalletManager({
// // // //     wallets: supportedWallets,
// // // //     defaultNetwork: algodConfig.network,
// // // //     networks: {
// // // //       [algodConfig.network]: {
// // // //         algod: {
// // // //           baseServer: algodConfig.server,
// // // //           port: algodConfig.port,
// // // //           token: String(algodConfig.token),
// // // //         },
// // // //       },
// // // //     },
// // // //     options: { resetNetwork: true },
// // // //   });

// // // //   return (
// // // //     <SnackbarProvider maxSnack={3}>
// // // //       <WalletProvider manager={walletManager}>
// // // //         <Router>
// // // //           <AppRoutes />
// // // //         </Router>
// // // //       </WalletProvider>
// // // //     </SnackbarProvider>
// // // //   );
// // // // }


// // // import {
// // //   SupportedWallet,
// // //   WalletId,
// // //   WalletManager,
// // //   WalletProvider,
// // // } from '@txnlab/use-wallet-react';
// // // import { SnackbarProvider } from 'notistack';
// // // import { useEffect, useState } from 'react';
// // // import {
// // //   Route,
// // //   BrowserRouter as Router,
// // //   Routes,
// // //   useNavigate,
// // // } from 'react-router-dom';

// // // import CompanyPortal from './components/CompanyPortal';
// // // import ProfilePage from './components/dashboard/ProfilePage';
// // // import LandingPage from './components/LandingPage';
// // // import BenefitsPage from './components/pages/BenefitsPage';
// // // import FeaturesPage from './components/pages/FeaturesPage';
// // // import HowItWorksPage from './components/pages/HowItWorksPage';
// // // import StatisticsPage from './components/pages/StatisticsPage';
// // // import StudentPortal from './components/StudentPortal';
// // // import Home from './Home';

// // // import {
// // //   getAlgodConfigFromViteEnvironment,
// // //   getKmdConfigFromViteEnvironment,
// // // } from './utils/network/getAlgoClientConfigs';

// // // // ---------------------- PAGE TYPES ----------------------
// // // type AppPage =
// // //   | 'landing'
// // //   | 'company'
// // //   | 'student'
// // //   | 'features'
// // //   | 'how-it-works'
// // //   | 'benefits'
// // //   | 'statistics';
// // // type UserType = 'company' | 'student' | null;

// // // // ---------------------- ROUTES COMPONENT ----------------------
// // // function AppRoutes({
// // //   walletAddress,
// // //   onConnect,
// // //   onDisconnect,
// // // }: {
// // //   walletAddress: string;
// // //   onConnect: (address: string, type: UserType) => void;
// // //   onDisconnect: () => void;
// // // }) {
// // //   const navigate = useNavigate();

// // //   const handleNavigate = (page: string) => {
// // //     const routes: Record<string, string> = {
// // //       landing: '/',
// // //       home: '/home',
// // //       features: '/features',
// // //       benefits: '/benefits',
// // //       statistics: '/statistics',
// // //       'how-it-works': '/how-it-works',
// // //       company: '/company-portal',
// // //       student: '/student-portal',
// // //       profile: '/profile',
// // //     };
// // //     navigate(routes[page] || '/');
// // //   };

// // //   return (
// // //     <Routes>
// // //       <Route
// // //         path="/"
// // //         element={<LandingPage onConnect={onConnect} onNavigate={handleNavigate} />}
// // //       />
// // //       <Route path="/home" element={<Home onNavigate={handleNavigate} />} />
// // //       <Route
// // //         path="/company-portal"
// // //         element={
// // //           <CompanyPortal
// // //             walletAddress={walletAddress}
// // //             onDisconnect={onDisconnect}
// // //             onNavigate={handleNavigate}
// // //           />
// // //         }
// // //       />
// // //       <Route
// // //         path="/student-portal"
// // //         element={
// // //           <StudentPortal
// // //             walletAddress={walletAddress}
// // //             onDisconnect={onDisconnect}
// // //             onNavigate={handleNavigate}
// // //           />
// // //         }
// // //       />
// // //       <Route
// // //         path="/features"
// // //         element={<FeaturesPage onNavigate={handleNavigate} />}
// // //       />
// // //       <Route
// // //         path="/benefits"
// // //         element={<BenefitsPage onNavigate={handleNavigate} />}
// // //       />
// // //       <Route
// // //         path="/statistics"
// // //         element={<StatisticsPage onNavigate={handleNavigate} />}
// // //       />
// // //       <Route
// // //         path="/how-it-works"
// // //         element={<HowItWorksPage onNavigate={handleNavigate} />}
// // //       />
// // //       <Route
// // //         path="/profile"
// // //         element={<ProfilePage onNavigate={handleNavigate} />}
// // //       />
// // //     </Routes>
// // //   );
// // // }

// // // // ---------------------- MAIN APP ----------------------
// // // export default function App() {
// // //   const [walletAddress, setWalletAddress] = useState<string>('');
// // //   const [userType, setUserType] = useState<UserType>(null);

// // //   // Load wallet + userType from session
// // //   useEffect(() => {
// // //     const savedAddress = sessionStorage.getItem('peraWalletAddress');
// // //     const savedUserType = sessionStorage.getItem('userType') as UserType;
// // //     if (savedAddress && savedUserType) {
// // //       setWalletAddress(savedAddress);
// // //       setUserType(savedUserType);
// // //     }
// // //   }, []);

// // //   // Handle connect/disconnect
// // //   const handleConnect = (address: string, type: UserType) => {
// // //     setWalletAddress(address);
// // //     setUserType(type);
// // //     sessionStorage.setItem('peraWalletAddress', address);
// // //     sessionStorage.setItem('userType', type!);
// // //   };

// // //   const handleDisconnect = () => {
// // //     setWalletAddress('');
// // //     setUserType(null);
// // //     sessionStorage.removeItem('peraWalletAddress');
// // //     sessionStorage.removeItem('userType');
// // //   };

// // //   // Wallet Config
// // //   const algodConfig = getAlgodConfigFromViteEnvironment();

// // //   let supportedWallets: SupportedWallet[];
// // //   if (import.meta.env.VITE_ALGOD_NETWORK === 'localnet') {
// // //     const kmdConfig = getKmdConfigFromViteEnvironment();
// // //     supportedWallets = [
// // //       {
// // //         id: WalletId.KMD,
// // //         options: {
// // //           baseServer: kmdConfig.server,
// // //           token: String(kmdConfig.token),
// // //           port: String(kmdConfig.port),
// // //         },
// // //       },
// // //     ];
// // //   } else {
// // //     supportedWallets = [
// // //       { id: WalletId.DEFLY },
// // //       { id: WalletId.PERA },
// // //       { id: WalletId.EXODUS },
// // //     ];
// // //   }

// // //   const walletManager = new WalletManager({
// // //     wallets: supportedWallets,
// // //     defaultNetwork: algodConfig.network,
// // //     networks: {
// // //       [algodConfig.network]: {
// // //         algod: {
// // //           baseServer: algodConfig.server,
// // //           port: algodConfig.port,
// // //           token: String(algodConfig.token),
// // //         },
// // //       },
// // //     },
// // //     options: { resetNetwork: true },
// // //   });

// // //   return (
// // //     <SnackbarProvider maxSnack={3}>
// // //       <WalletProvider manager={walletManager}>
// // //         <Router>
// // //           <AppRoutes
// // //             walletAddress={walletAddress}
// // //             onConnect={handleConnect}
// // //             onDisconnect={handleDisconnect}
// // //           />
// // //         </Router>
// // //       </WalletProvider>
// // //     </SnackbarProvider>
// // //   );
// // // }


// // import {
// //   SupportedWallet,
// //   WalletId,
// //   WalletManager,
// //   WalletProvider,
// // } from "@txnlab/use-wallet-react";
// // import { SnackbarProvider } from "notistack";
// // import { useState, useEffect } from "react";
// // import {
// //   Route,
// //   BrowserRouter as Router,
// //   Routes,
// //   useNavigate,
// //   Navigate,
// // } from "react-router-dom";

// // import Home from "./Home";
// // import ProfilePage from "./components/dashboard/ProfilePage";
// // import BenefitsPage from "./components/pages/BenefitsPage";
// // import FeaturesPage from "./components/pages/FeaturesPage";
// // import HowItWorksPage from "./components/pages/HowItWorksPage";
// // import StatisticsPage from "./components/pages/StatisticsPage";
// // import StudentPortal from "./components/StudentPortal";
// // import CompanyPortal from "./components/CompanyPortal";

// // import {
// //   getAlgodConfigFromViteEnvironment,
// //   getKmdConfigFromViteEnvironment,
// // } from "./utils/network/getAlgoClientConfigs";

// // type UserRole = 'student' | 'company' | null;

// // // ---------------------- PROTECTED ROUTE ----------------------
// // function ProtectedRoute({
// //   children,
// //   requiredRole,
// //   userRole
// // }: {
// //   children: React.ReactNode;
// //   requiredRole?: UserRole;
// //   userRole: UserRole;
// // }) {
// //   if (!userRole) {
// //     return <Navigate to="/" replace />;
// //   }
// //   if (requiredRole && userRole !== requiredRole) {
// //     return <Navigate to="/" replace />;
// //   }
// //   return <>{children}</>;
// // }

// // // ---------------------- ROUTES ----------------------
// // function AppRoutes({
// //   userRole,
// //   walletAddress,
// //   onRoleSelect,
// //   onDisconnect,
// // }: {
// //   userRole: UserRole;
// //   walletAddress: string;
// //   onRoleSelect: (role: UserRole) => void;
// //   onDisconnect: () => void;
// // }) {
// //   const navigate = useNavigate();

// //   const handleNavigate = (page: string) => {
// //     const routes: Record<string, string> = {
// //       landing: "/",
// //       home: "/",
// //       features: "/features",
// //       benefits: "/benefits",
// //       statistics: "/statistics",
// //       "how-it-works": "/how-it-works",
// //       profile: "/profile",
// //     };
// //     navigate(routes[page] || "/");
// //   };

// //   return (
// //     <Routes>
// //       <Route
// //         path="/"
// //         element={
// //           <Home
// //             onNavigate={handleNavigate}
// //             userRole={userRole}
// //             walletAddress={walletAddress}
// //             onRoleSelect={onRoleSelect}
// //             onDisconnect={onDisconnect}
// //           />
// //         }
// //       />
// //       <Route path="/features" element={<FeaturesPage onNavigate={handleNavigate} />} />
// //       <Route path="/how-it-works" element={<HowItWorksPage onNavigate={handleNavigate} />} />
// //       <Route path="/benefits" element={<BenefitsPage onNavigate={handleNavigate} />} />
// //       <Route path="/statistics" element={<StatisticsPage onNavigate={handleNavigate} />} />

// //       {/* Student Portal - Only accessible for students */}
// //       <Route
// //         path="/student-portal"
// //         element={
// //           <ProtectedRoute requiredRole="student" userRole={userRole}>
// //             <StudentPortal
// //               walletAddress={walletAddress}
// //               onDisconnect={onDisconnect}
// //               onNavigate={handleNavigate}
// //             />
// //           </ProtectedRoute>
// //         }
// //       />

// //       {/* Company Portal - Only accessible for companies */}
// //       <Route
// //         path="/company-portal"
// //         element={
// //           <ProtectedRoute requiredRole="company" userRole={userRole}>
// //             <CompanyPortal
// //               walletAddress={walletAddress}
// //               onDisconnect={onDisconnect}
// //               onNavigate={handleNavigate}
// //             />
// //           </ProtectedRoute>
// //         }
// //       />

// //       {/* Profile - Accessible for authenticated users */}
// //       <Route
// //         path="/profile"
// //         element={
// //           <ProtectedRoute userRole={userRole}>
// //             <ProfilePage walletAddress={walletAddress} />
// //           </ProtectedRoute>
// //         }
// //       />

// //       {/* Catch all - redirect to home */}
// //       <Route path="*" element={<Navigate to="/" replace />} />
// //     </Routes>
// //   );
// // }

// // // ---------------------- MAIN APP ----------------------
// // export default function App() {
// //   const [userRole, setUserRole] = useState<UserRole>(null);
// //   const [walletAddress, setWalletAddress] = useState<string>("");

// //   // Load saved role and wallet from localStorage on mount
// //   useEffect(() => {
// //     const savedRole = localStorage.getItem('userRole') as UserRole;
// //     const savedAddress = localStorage.getItem('walletAddress');
// //     if (savedRole && savedAddress) {
// //       setUserRole(savedRole);
// //       setWalletAddress(savedAddress);
// //     }
// //   }, []);

// //   const handleRoleSelect = (role: UserRole) => {
// //     setUserRole(role);
// //     if (role) {
// //       localStorage.setItem('userRole', role);
// //     }
// //   };

// //   const handleWalletConnect = (address: string) => {
// //     setWalletAddress(address);
// //     localStorage.setItem('walletAddress', address);
// //   };

// //   const handleDisconnect = () => {
// //     setUserRole(null);
// //     setWalletAddress("");
// //     localStorage.removeItem('userRole');
// //     localStorage.removeItem('walletAddress');
// //   };

// //   const algodConfig = getAlgodConfigFromViteEnvironment();

// //   // Select wallet setup based on environment
// //   let supportedWallets: SupportedWallet[];
// //   if (import.meta.env.VITE_ALGOD_NETWORK === "localnet") {
// //     const kmdConfig = getKmdConfigFromViteEnvironment();
// //     supportedWallets = [
// //       {
// //         id: WalletId.KMD,
// //         options: {
// //           baseServer: kmdConfig.server,
// //           token: String(kmdConfig.token),
// //           port: String(kmdConfig.port),
// //         },
// //       },
// //     ];
// //   } else {
// //     supportedWallets = [
// //       { id: WalletId.PERA },
// //       { id: WalletId.DEFLY },
// //       { id: WalletId.EXODUS },
// //     ];
// //   }

// //   // Initialize wallet manager
// //   const walletManager = new WalletManager({
// //     wallets: supportedWallets,
// //     defaultNetwork: algodConfig.network,
// //     networks: {
// //       [algodConfig.network]: {
// //         algod: {
// //           baseServer: algodConfig.server,
// //           port: algodConfig.port,
// //           token: String(algodConfig.token),
// //         },
// //       },
// //     },
// //     options: { resetNetwork: true },
// //   });

// //   return (
// //     <SnackbarProvider maxSnack={3}>
// //       <WalletProvider manager={walletManager}>
// //         <Router>
// //           <AppRoutes
// //             userRole={userRole}
// //             walletAddress={walletAddress}
// //             onRoleSelect={handleRoleSelect}
// //             onDisconnect={handleDisconnect}
// //           />
// //         </Router>
// //       </WalletProvider>
// //     </SnackbarProvider>
// //   );
// // }




// import {
//   SupportedWallet,
//   WalletId,
//   WalletManager,
//   WalletProvider,
// } from "@txnlab/use-wallet-react";
// import { SnackbarProvider } from "notistack";
// import {
//   Route,
//   BrowserRouter as Router,
//   Routes,
//   useNavigate,
// } from "react-router-dom";

// import Home from "./Home";
// import ProfilePage from "./components/dashboard/ProfilePage";
// import BenefitsPage from "./components/pages/BenefitsPage";
// import FeaturesPage from "./components/pages/FeaturesPage";
// import HowItWorksPage from "./components/pages/HowItWorksPage";
// import StatisticsPage from "./components/pages/StatisticsPage";

// import {
//   getAlgodConfigFromViteEnvironment,
//   getKmdConfigFromViteEnvironment,
// } from "./utils/network/getAlgoClientConfigs";

// // ---------------------- ROUTES ----------------------
// function AppRoutes() {
//   const navigate = useNavigate();

//   const handleNavigate = (page: string) => {
//     const routes: Record<string, string> = {
//       landing: "/",
//       home: "/home",
//       features: "/features",
//       benefits: "/benefits",
//       statistics: "/statistics",
//       "how-it-works": "/how-it-works",
//       profile: "/profile",
//     };
//     navigate(routes[page] || "/");
//   };

//   return (
//     <Routes>
//       <Route path="/" element={<Home onNavigate={handleNavigate} />} />
//       <Route path="/home" element={<Home onNavigate={handleNavigate} />} />
//       <Route path="/features" element={<FeaturesPage onNavigate={handleNavigate} />} />
//       <Route path="/how-it-works" element={<HowItWorksPage onNavigate={handleNavigate} />} />
//       <Route path="/benefits" element={<BenefitsPage onNavigate={handleNavigate} />} />
//       <Route path="/statistics" element={<StatisticsPage onNavigate={handleNavigate} />} />
//       <Route path="/profile" element={<ProfilePage onNavigate={handleNavigate} />} />
//     </Routes>
//   );
// }

// // ---------------------- MAIN APP ----------------------
// export default function App() {
//   const algodConfig = getAlgodConfigFromViteEnvironment();

//   // ✅ Use the same wallet setup logic as your working project
//   let supportedWallets: SupportedWallet[];
//   if (import.meta.env.VITE_ALGOD_NETWORK === "localnet") {
//     const kmdConfig = getKmdConfigFromViteEnvironment();
//     supportedWallets = [
//       {
//         id: WalletId.KMD,
//         options: {
//           baseServer: kmdConfig.server,
//           token: String(kmdConfig.token),
//           port: String(kmdConfig.port),
//         },
//       },
//     ];
//   } else {
//     supportedWallets = [
//       { id: WalletId.PERA },
//       { id: WalletId.DEFLY },
//       { id: WalletId.EXODUS },
//     ];
//   }

//   // ✅ Initialize wallet manager — this ensures PeraWalletConnect is properly loaded
//   const walletManager = new WalletManager({
//     wallets: supportedWallets,
//     defaultNetwork: algodConfig.network,
//     networks: {
//       [algodConfig.network]: {
//         algod: {
//           baseServer: algodConfig.server,
//           port: algodConfig.port,
//           token: String(algodConfig.token),
//         },
//       },
//     },
//     options: { resetNetwork: true },
//   });

//   return (
//     <SnackbarProvider maxSnack={3}>
//       <WalletProvider manager={walletManager}>
//         <Router>
//           <AppRoutes />
//         </Router>
//       </WalletProvider>
//     </SnackbarProvider>
//   );
// }



import {
  SupportedWallet,
  WalletId,
  WalletManager,
  WalletProvider,
} from "@txnlab/use-wallet-react";
import { SnackbarProvider } from "notistack";
import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import CompanyPortal from "./components/CompanyPortal";
import ProfilePage from "./components/dashboard/ProfilePage";
import BenefitsPage from "./components/pages/BenefitsPage";
import FeaturesPage from "./components/pages/FeaturesPage";
import HowItWorksPage from "./components/pages/HowItWorksPage";
import VerifyCredentialsPage from "./components/pages/VerifyCredentialsPage";
import StudentPortal from "./components/StudentPortal";
import Home from "./Home";

import {
  getAlgodConfigFromViteEnvironment,
  getKmdConfigFromViteEnvironment,
} from "./utils/network/getAlgoClientConfigs";

// ---------------------- USER ROLE TYPE ----------------------
type UserRole = "student" | "company" | null;

// ---------------------- PROTECTED ROUTE ----------------------
function ProtectedRoute({
  children,
  requiredRole,
  userRole,
}: {
  children: React.ReactNode;
  requiredRole?: UserRole;
  userRole: UserRole;
}) {
  if (!userRole) {
    return <Navigate to="/" replace />;
  }
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

// ---------------------- ROUTES ----------------------
function AppRoutes({
  userRole,
  walletAddress,
  onRoleSelect,
  onDisconnect,
}: {
  userRole: UserRole;
  walletAddress: string;
  onRoleSelect: (role: UserRole) => void;
  onDisconnect: () => void;
}) {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    const routes: Record<string, string> = {
      landing: "/",
      home: "/",
      features: "/features",
      benefits: "/benefits",
      "how-it-works": "/how-it-works",
      "verify-credentials": "/verify-credentials",
      profile: "/profile",
      "student-portal": "/student-portal",
      "company-portal": "/company-portal",
    };
    navigate(routes[page] || "/");
  };

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <Home
            onNavigate={handleNavigate}
            userRole={userRole}
            walletAddress={walletAddress}
            onRoleSelect={onRoleSelect}
            onDisconnect={onDisconnect}
          />
        }
      />
      <Route
        path="/features"
        element={<FeaturesPage onNavigate={handleNavigate} />}
      />
      <Route
        path="/how-it-works"
        element={<HowItWorksPage onNavigate={handleNavigate} />}
      />
      <Route
        path="/benefits"
        element={<BenefitsPage onNavigate={handleNavigate} />}
      />
      <Route
        path="/verify-credentials"
        element={<VerifyCredentialsPage onNavigate={handleNavigate} />}
      />

      {/* Student Portal - Protected */}
      <Route
        path="/student-portal"
        element={
          <ProtectedRoute requiredRole="student" userRole={userRole}>
            <StudentPortal
              walletAddress={walletAddress}
              onDisconnect={onDisconnect}
              onNavigate={handleNavigate}
            />
          </ProtectedRoute>
        }
      />

      {/* Company Portal - Protected */}
      <Route
        path="/company-portal"
        element={
          <ProtectedRoute requiredRole="company" userRole={userRole}>
            <CompanyPortal
              walletAddress={walletAddress}
              onDisconnect={onDisconnect}
              onNavigate={handleNavigate}
            />
          </ProtectedRoute>
        }
      />

      {/* Profile Page - Protected */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute userRole={userRole}>
            <ProfilePage walletAddress={walletAddress} />
          </ProtectedRoute>
        }
      />

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// ---------------------- GLOBAL WALLET MANAGER ----------------------
const algodConfig = getAlgodConfigFromViteEnvironment();

let supportedWallets: SupportedWallet[];
if (import.meta.env.VITE_ALGOD_NETWORK === "localnet") {
  const kmdConfig = getKmdConfigFromViteEnvironment();
  supportedWallets = [
    {
      id: WalletId.KMD,
      options: {
        baseServer: kmdConfig.server,
        token: String(kmdConfig.token),
        port: String(kmdConfig.port),
      },
    },
  ];
} else {
  supportedWallets = [
    { id: WalletId.PERA },
    { id: WalletId.DEFLY },
    { id: WalletId.EXODUS },
  ];
}

// ✅ Initialize WalletManager once globally
const walletManager = new WalletManager({
  wallets: supportedWallets,
  defaultNetwork: algodConfig.network,
  networks: {
    [algodConfig.network]: {
      algod: {
        baseServer: algodConfig.server,
        port: algodConfig.port,
        token: String(algodConfig.token),
      },
    },
  },
  options: { resetNetwork: true },
});

// ---------------------- MAIN APP ----------------------
export default function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [walletAddress, setWalletAddress] = useState<string>("");

  // Load saved state on mount
  useEffect(() => {
    const savedRole = localStorage.getItem("userRole") as UserRole;
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedRole && savedAddress) {
      setUserRole(savedRole);
      setWalletAddress(savedAddress);
    }
  }, []);

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    if (role) localStorage.setItem("userRole", role);
  };

  const handleDisconnect = () => {
    setUserRole(null);
    setWalletAddress("");
    localStorage.removeItem("userRole");
    localStorage.removeItem("walletAddress");
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <WalletProvider manager={walletManager}>
        <Router>
          <AppRoutes
            userRole={userRole}
            walletAddress={walletAddress}
            onRoleSelect={handleRoleSelect}
            onDisconnect={handleDisconnect}
          />
        </Router>
      </WalletProvider>
    </SnackbarProvider>
  );
}
