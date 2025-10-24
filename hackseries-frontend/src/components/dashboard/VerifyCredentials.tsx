import { useState } from 'react';
import { Search, CheckCircle, XCircle, Clock, ExternalLink } from 'lucide-react';

export default function VerifyCredentials() {
  const [credentialId, setCredentialId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);

  const handleVerify = async () => {
    if (!credentialId.trim()) return;

    setIsVerifying(true);
    setVerificationResult(null);

    setTimeout(() => {
      const isValid = Math.random() > 0.3;
      setVerificationResult({
        valid: isValid,
        data: isValid ? {
          studentName: 'Alex Johnson',
          organization: 'TechCorp Innovation Labs',
          role: 'Software Engineering Intern',
          duration: 'Jun 2024 - Aug 2024',
          issueDate: 'August 28, 2024',
          transactionId: 'ALGO' + Math.random().toString(36).substring(2, 15).toUpperCase(),
          skills: ['React', 'TypeScript', 'Blockchain', 'Smart Contracts']
        } : null
      });
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Credentials</h1>
        <p className="text-gray-600">Enter a credential ID to verify its authenticity on the Algorand blockchain</p>
      </div>

      <div className="bg-white border border-gray-200 p-8">
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <input
              type="text"
              value={credentialId}
              onChange={(e) => setCredentialId(e.target.value)}
              placeholder="Enter credential ID or transaction hash..."
              className="w-full px-6 py-4 bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
            />
          </div>
          <button
            onClick={handleVerify}
            disabled={isVerifying || !credentialId.trim()}
            className="px-8 py-4 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            {isVerifying ? 'Verifying...' : 'Verify'}
          </button>
        </div>

        {isVerifying && (
          <div className="flex items-center justify-center py-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-600">Checking blockchain records...</p>
            </div>
          </div>
        )}

        {verificationResult && !isVerifying && (
          <div className={`p-6 border-2 ${
            verificationResult.valid
              ? 'bg-green-50 border-green-300'
              : 'bg-red-50 border-red-300'
          }`}>
            <div className="flex items-start gap-4">
              {verificationResult.valid ? (
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
              ) : (
                <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
              )}

              <div className="flex-1">
                <h3 className={`text-xl font-semibold mb-2 ${
                  verificationResult.valid ? 'text-green-700' : 'text-red-700'
                }`}>
                  {verificationResult.valid ? 'Credential Verified' : 'Verification Failed'}
                </h3>

                {verificationResult.valid ? (
                  <div className="space-y-4">
                    <p className="text-gray-700">This credential has been verified on the Algorand blockchain.</p>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Student Name</p>
                        <p className="text-gray-900 font-medium">{verificationResult.data.studentName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Organization</p>
                        <p className="text-gray-900 font-medium">{verificationResult.data.organization}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Role</p>
                        <p className="text-gray-900 font-medium">{verificationResult.data.role}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="text-gray-900 font-medium">{verificationResult.data.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Issue Date</p>
                        <p className="text-gray-900 font-medium">{verificationResult.data.issueDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Transaction ID</p>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-900 font-mono text-sm truncate">{verificationResult.data.transactionId}</p>
                          <ExternalLink className="w-4 h-4 text-blue-600 cursor-pointer hover:text-blue-700" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-2">Skills Verified</p>
                      <div className="flex flex-wrap gap-2">
                        {verificationResult.data.skills.map((skill: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-700">This credential could not be verified. It may not exist or has been revoked.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="p-6 bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">1,247</p>
          </div>
          <p className="text-sm text-gray-600">Credentials Verified</p>
        </div>

        <div className="p-6 bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">2.3s</p>
          </div>
          <p className="text-sm text-gray-600">Average Verification Time</p>
        </div>

        <div className="p-6 bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-100 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">23</p>
          </div>
          <p className="text-sm text-gray-600">Fraudulent Attempts Blocked</p>
        </div>
      </div>
    </div>
  );
}
