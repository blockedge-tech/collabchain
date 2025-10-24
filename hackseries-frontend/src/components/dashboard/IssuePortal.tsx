// import { AlgorandClient } from "@algorandfoundation/algokit-utils";
// import { OnSchemaBreak, OnUpdate } from "@algorandfoundation/algokit-utils/types/app";
// import { useWallet } from "@txnlab/use-wallet-react";
// import { useSnackbar } from "notistack";
// import { useState } from "react";
// import { UserIdContractFactory } from "../../contracts/UserIDContract";
// import {
//   getAlgodConfigFromViteEnvironment,
//   getIndexerConfigFromViteEnvironment,
// } from "../../utils/network/getAlgoClientConfigs";



// import { Briefcase, Calendar, CheckCircle, FileCheck, Upload } from "lucide-react";

// export default function IssuePortal() {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     studentWallet: "",
//     organization: "",
//     role: "",
//     startDate: "",
//     endDate: "",
//     skills: "",
//     description: "",
//   });

//   const [isIssuing, setIsIssuing] = useState(false);
//   const [issued, setIssued] = useState(false);
//   const { enqueueSnackbar } = useSnackbar();
//   const { transactionSigner, activeAddress } = useWallet();

//   // Initialize Algorand client
//   const algodConfig = getAlgodConfigFromViteEnvironment();
//   const indexerConfig = getIndexerConfigFromViteEnvironment();
//   const algorand = AlgorandClient.fromConfig({ algodConfig, indexerConfig });
//   algorand.setDefaultSigner(transactionSigner);

//   // ✅ Smart contract call
//   const callUserIDContract = async () => {
//     setIsIssuing(true);
//     try {
//       if (!activeAddress) throw new Error("Please connect your wallet first.");
//       if (!formData.studentName || !formData.organization || !formData.role)
//         throw new Error("Please fill in all required fields.");

//       // 1️⃣ Initialize UserID contract
//       const factory = new UserIdContractFactory({ defaultSender: activeAddress, algorand });

//       // 2️⃣ Deploy or get existing contract client
//       const { appClient } = await factory.deploy({
//         onSchemaBreak: OnSchemaBreak.AppendApp,
//         onUpdate: OnUpdate.AppendApp,
//       });

//       // 3️⃣ Call the generateUserId method on the contract
//       const result = await appClient.send.generateUserId({
//         args: {
//           wallet: activeAddress,
//           name: formData.studentName,
//           company: formData.organization,
//           event: formData.role,
//         },
//       });

//       // 4️⃣ Extract the generated hashId
//       const [hashId] = result.return ?? [];
//       enqueueSnackbar(`✅ User ID generated: ${hashId}`, { variant: "success" });

//       setIssued(true);
//       setTimeout(() => setIssued(false), 4000);
//     } catch (err: any) {
//       enqueueSnackbar(`❌ Error: ${err.message}`, { variant: "error" });
//     } finally {
//       setIsIssuing(false);
//     }
//   };

//   // Dummy data for recently issued credentials
//   const recentlyIssued = [
//     {
//       id: "CRED004",
//       studentName: "Alex Thompson",
//       studentWallet: "ALGOX7Y4W2N9R6T1M5Q8P3K",
//       role: "Frontend Developer Intern",
//       organization: "TechCorp Innovation Labs",
//       issueDate: "2 hours ago",
//       status: "Active",
//     },
//     {
//       id: "CRED005",
//       studentName: "Maria Rodriguez",
//       studentWallet: "ALGOM3K8P5Q1W7E9R2N4Y6T",
//       role: "Data Analyst Intern",
//       organization: "DataVerse Analytics",
//       issueDate: "1 day ago",
//       status: "Active",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">Issue Credential</h1>
//         <p className="text-gray-600">
//           Create and issue verified internship credentials on the Algorand blockchain
//         </p>
//       </div>

//       {issued ? (
//         <div className="bg-green-50 border-2 border-green-300 p-12 text-center rounded-xl">
//           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <FileCheck className="w-10 h-10 text-green-600" />
//           </div>
//           <h2 className="text-2xl font-bold text-green-700 mb-3">
//             Credential Issued Successfully!
//           </h2>
//           <p className="text-gray-700 mb-4">
//             The credential has been recorded on the Algorand blockchain
//           </p>
//         </div>
//       ) : (
//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="bg-white border border-gray-200 p-8 rounded-xl"
//         >
//           <div className="grid md:grid-cols-2 gap-6 mb-6">
//             {/* Input fields */}
//             {[
//               ["Student Name", "studentName", "Enter student's full name"],
//               ["Student Wallet Address", "studentWallet", "ALGO..."],
//               ["Organization Name", "organization", "Your organization"],
//               ["Events/Internship Role", "role", "e.g., Software Engineering Intern"],
//             ].map(([label, key, placeholder], i) => (
//               <div key={i}>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
//                 <input
//                   type="text"
//                   required
//                   value={(formData as any)[key]}
//                   onChange={(e) =>
//                     setFormData({ ...formData, [key]: e.target.value })
//                   }
//                   className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
//                   placeholder={placeholder}
//                 />
//               </div>
//             ))}

//             {/* Dates */}
//             {["Start Date", "End Date"].map((label, i) => (
//               <div key={i}>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
//                 <div className="relative">
//                   <input
//                     type="date"
//                     required
//                     value={i === 0 ? formData.startDate : formData.endDate}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         [i === 0 ? "startDate" : "endDate"]: e.target.value,
//                       })
//                     }
//                     className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
//                   />
//                   <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Skills & Description */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Skills Acquired
//             </label>
//             <input
//               type="text"
//               required
//               value={formData.skills}
//               onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
//               className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400/50 transition-colors"
//               placeholder="Separate skills with commas (e.g., React, TypeScript, API Development)"
//             />
//           </div>

//           <div className="mb-8">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Description
//             </label>
//             <textarea
//               required
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               rows={4}
//               className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
//               placeholder="Brief description of the internship experience..."
//             />
//           </div>

//           {/* ✅ Blockchain Button */}
//           <button
//             type="button"
//             onClick={callUserIDContract}
//             disabled={isIssuing}
//             className={`w-full py-4 rounded-2xl text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg
//               ${
//                 isIssuing
//                   ? "bg-gradient-to-r from-purple-500 to-indigo-600 animate-pulse cursor-wait opacity-90"
//                   : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-indigo-600 hover:shadow-blue-500/50 active:scale-95"
//               }
//               disabled:opacity-60 disabled:cursor-not-allowed`}
//           >
//             {isIssuing ? (
//               <>
//                 <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
//                 <span>Issuing on Blockchain...</span>
//               </>
//             ) : (
//               <>
//                 <Upload className="w-5 h-5" />
//                 <span>Generate Hash ID</span>
//               </>
//             )}
//           </button>
//         </form>
//       )}

//       {/* Organization Verification */}
//       <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
//         <div className="flex items-start gap-4">
//           <div className="w-10 h-10 bg-blue-100 flex items-center justify-center flex-shrink-0 rounded-full">
//             <Briefcase className="w-5 h-5 text-blue-600" />
//           </div>
//           <div>
//             <h3 className="text-gray-900 font-semibold mb-2">Organization Verification Required</h3>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               Only verified organizations can issue credentials. Your organization status:{" "}
//               <span className="text-green-600 font-medium">Verified</span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Recently Issued */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Issued Credentials</h2>
//         <div className="space-y-4">
//           {recentlyIssued.map((credential, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                     <CheckCircle className="w-6 h-6 text-green-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900 mb-1">
//                       {credential.studentName}
//                     </h3>
//                     <p className="text-blue-600 font-medium mb-1">{credential.role}</p>
//                     <p className="text-sm text-gray-600 mb-2">
//                       Student Wallet:{" "}
//                       <code className="text-xs font-mono">{credential.studentWallet}</code>
//                     </p>
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       <span>ID: {credential.id}</span>
//                       <span>•</span>
//                       <span>{credential.issueDate}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
//                     <div className="w-2 h-2 bg-green-600 rounded-full" />
//                     {credential.status}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import axios from "axios";
import { Briefcase, Calendar, CheckCircle, FileCheck, Upload } from "lucide-react";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function IssuePortal() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentWallet: "",
    organization: "",
    role: "",
    startDate: "",
    endDate: "",
    skills: "",
    description: "",
  });

  const [isIssuing, setIsIssuing] = useState(false);
  const [issued, setIssued] = useState(false);
  const [backendResult, setBackendResult] = useState<any>(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleIssueCredential = async () => {
    setIsIssuing(true);
    setBackendResult(null);

    try {
      if (!formData.studentName || !formData.organization || !formData.role)
        throw new Error("Please fill in all required fields.");

      // ✅ Send credential data to backend API
      const payload = {
        student_name: formData.studentName,
        student_wallet: formData.studentWallet,
        organization: formData.organization,
        event: formData.role,
      };

      const res = await axios.post("http://127.0.0.1:8000/generate", payload);
      setBackendResult(res.data);

      // ✅ Save credential to localStorage for Student Portal
      const newCredential = {
        id: res.data.hashID || `CRED${Date.now()}`,
        organization: formData.organization,
        role: formData.role,
        duration: `${formData.startDate} - ${formData.endDate}`,
        issueDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        skills: formData.skills.split(',').map((s: string) => s.trim()),
        transactionId: res.data.transaction_id || 'N/A',
        status: 'active',
        studentWallet: formData.studentWallet,
        studentName: formData.studentName,
        cid: res.data.cid
      };

      // Get existing credentials from localStorage
      const existingCredentials = JSON.parse(localStorage.getItem('issuedCredentials') || '[]');
      
      // Add new credential
      existingCredentials.unshift(newCredential);
      
      // Save back to localStorage
      localStorage.setItem('issuedCredentials', JSON.stringify(existingCredentials));
      
      // Dispatch custom event to notify Student Portal
      window.dispatchEvent(new Event('credentialIssued'));

      enqueueSnackbar("✅ Credential generated and saved successfully!", { variant: "success" });
      setIssued(true);
      setTimeout(() => {
        setIssued(false);
        // Reset form
        setFormData({
          studentName: "",
          studentWallet: "",
          organization: "",
          role: "",
          startDate: "",
          endDate: "",
          skills: "",
          description: "",
        });
      }, 5000);
    } catch (err: any) {
      enqueueSnackbar(`❌ Error: ${err.message}`, { variant: "error" });
    } finally {
      setIsIssuing(false);
    }
  };

  const recentlyIssued = [
    {
      id: "CRED004",
      studentName: "Alex Thompson",
      studentWallet: "ALGOX7Y4W2N9R6T1M5Q8P3K",
      role: "Frontend Developer Intern",
      organization: "TechCorp Innovation Labs",
      issueDate: "2 hours ago",
      status: "Active",
    },
    {
      id: "CRED005",
      studentName: "Maria Rodriguez",
      studentWallet: "ALGOM3K8P5Q1W7E9R2N4Y6T",
      role: "Data Analyst Intern",
      organization: "DataVerse Analytics",
      issueDate: "1 day ago",
      status: "Active",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Issue Credential</h1>
        <p className="text-white font-medium">
          Create and issue verified internship credentials through your backend service.
        </p>
      </div>

      {issued ? (
        <div className="bg-green-50 border-2 border-green-300 p-12 text-center rounded-xl">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileCheck className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Credential Generated Successfully!
          </h2>
          <p className="text-gray-700 mb-4">
            The credential has been recorded via your backend service.
          </p>

          {backendResult && (
            <div className="bg-white border border-green-300 p-6 rounded-xl text-left mt-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Transaction Details
              </h3>
              <p><b>IPFS CID:</b> {backendResult.cid}</p>
              <p><b>Hash ID:</b> {backendResult.hashID}</p>
              <p><b>Txn ID:</b> {backendResult.transaction_id}</p>
              <a
                href={`https://testnet.explorer.perawallet.app/transaction/${backendResult.transaction_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 block"
              >
                View on Algo Explorer
              </a>
            </div>
          )}
        </div>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white border border-gray-200 p-8 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              ["Student Name", "studentName", "Enter student's full name"],
              ["Student Wallet Address", "studentWallet", "ALGO..."],
              ["Organization Name", "organization", "Your organization"],
              ["Events/Internship Role", "role", "e.g., Software Engineering Intern"],
            ].map(([label, key, placeholder], i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                <input
                  type="text"
                  required
                  value={(formData as any)[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  placeholder={placeholder}
                />
              </div>
            ))}

            {["Start Date", "End Date"].map((label, i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={i === 0 ? formData.startDate : formData.endDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [i === 0 ? "startDate" : "endDate"]: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Skills Acquired</label>
            <input
              type="text"
              required
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400/50 transition-colors"
              placeholder="Separate skills with commas (e.g., React, TypeScript, API Development)"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
              placeholder="Brief description of the internship experience..."
            />
          </div>

          <button
            type="button"
            onClick={handleIssueCredential}
            disabled={isIssuing}
            className={`w-full py-4 rounded-2xl text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg
              ${
                isIssuing
                  ? "bg-gradient-to-r from-purple-500 to-indigo-600 animate-pulse cursor-wait opacity-90"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-indigo-600 hover:shadow-blue-500/50 active:scale-95"
              }
              disabled:opacity-60 disabled:cursor-not-allowed`}
          >
            {isIssuing ? (
              <>
                <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
                <span>Generating Credential...</span>
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                <span>Generate Credential</span>
              </>
            )}
          </button>
        </form>
      )}

      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 flex items-center justify-center flex-shrink-0 rounded-full">
            <Briefcase className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-2">Organization Verification Required</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Only verified organizations can issue credentials. Your organization status:{" "}
              <span className="text-green-600 font-medium">Verified</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Issued Credentials</h2>
        <div className="space-y-4">
          {recentlyIssued.map((credential, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{credential.studentName}</h3>
                    <p className="text-blue-600 font-medium mb-1">{credential.role}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      Student Wallet:{" "}
                      <code className="text-xs font-mono">{credential.studentWallet}</code>
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>ID: {credential.id}</span>
                      <span>•</span>
                      <span>{credential.issueDate}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    {credential.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
