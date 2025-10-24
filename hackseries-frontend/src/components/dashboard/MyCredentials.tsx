import { useState, useEffect } from 'react';
import { Award, Download, ExternalLink, Calendar, Building } from 'lucide-react';
import { useSnackbar } from 'notistack';

// Function to download credential as HTML
const downloadCredential = (credential: any, enqueueSnackbar?: any) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Credential Certificate - ${credential.id}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Arial', sans-serif; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .certificate {
          background: white;
          max-width: 900px;
          padding: 60px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          position: relative;
          border: 8px solid #667eea;
        }
        .header {
          text-align: center;
          margin-bottom: 40px;
          border-bottom: 3px solid #667eea;
          padding-bottom: 20px;
        }
        .logo {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 15px;
        }
        h1 {
          color: #667eea;
          font-size: 42px;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .subtitle {
          color: #666;
          font-size: 18px;
        }
        .content {
          margin: 40px 0;
        }
        .student-name {
          text-align: center;
          font-size: 32px;
          color: #333;
          margin: 30px 0;
          font-weight: 600;
        }
        .details {
          background: #f8f9ff;
          padding: 30px;
          border-radius: 15px;
          margin: 20px 0;
        }
        .detail-row {
          display: flex;
          margin: 15px 0;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 10px;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          font-weight: 600;
          color: #667eea;
          width: 180px;
          flex-shrink: 0;
        }
        .detail-value {
          color: #333;
          flex: 1;
        }
        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 5px;
        }
        .skill-badge {
          background: #667eea;
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 30px;
          border-top: 3px solid #667eea;
        }
        .transaction {
          font-family: monospace;
          color: #667eea;
          font-size: 12px;
          margin-top: 20px;
          word-break: break-all;
        }
        .status-badge {
          display: inline-block;
          background: #10b981;
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          margin-top: 20px;
        }
        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
          font-size: 120px;
          color: rgba(102, 126, 234, 0.03);
          font-weight: bold;
          pointer-events: none;
          z-index: 0;
        }
        .content { position: relative; z-index: 1; }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="watermark">VERIFIED</div>
        <div class="header">
          <div class="logo">C</div>
          <h1>CollabChain</h1>
          <p class="subtitle">Blockchain-Powered Credential Verification</p>
        </div>
        
        <div class="content">
          <p style="text-align: center; color: #666; font-size: 20px; margin-bottom: 10px;">
            This certifies that
          </p>
          <div class="student-name">${credential.studentName || 'Student'}</div>
          <p style="text-align: center; color: #666; font-size: 18px; margin-bottom: 30px;">
            has successfully completed
          </p>
          
          <div class="details">
            <div class="detail-row">
              <div class="detail-label">Position:</div>
              <div class="detail-value">${credential.role}</div>
            </div>
            <div class="detail-row">
              <div class="detail-label">Organization:</div>
              <div class="detail-value">${credential.organization}</div>
            </div>
            <div class="detail-row">
              <div class="detail-label">Duration:</div>
              <div class="detail-value">${credential.duration}</div>
            </div>
            <div class="detail-row">
              <div class="detail-label">Issue Date:</div>
              <div class="detail-value">${credential.issueDate}</div>
            </div>
            <div class="detail-row">
              <div class="detail-label">Skills Verified:</div>
              <div class="detail-value">
                <div class="skills">
                  ${credential.skills.map((skill: string) => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <div class="status-badge">✓ VERIFIED ON BLOCKCHAIN</div>
            <p style="margin-top: 20px; color: #666; font-size: 14px;">
              <strong>Credential ID:</strong> ${credential.id}
            </p>
            <p class="transaction">
              <strong>Transaction ID:</strong><br>${credential.transactionId}
            </p>
            <p style="margin-top: 30px; color: #999; font-size: 12px;">
              This credential is permanently recorded on the Algorand blockchain and cannot be altered or revoked.
              <br>Verify at: https://collabchain.app/verify/${credential.id}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Create blob and download
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Credential_${credential.id}_${credential.studentName?.replace(/\s+/g, '_') || 'Certificate'}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  // Show success notification
  if (enqueueSnackbar) {
    enqueueSnackbar('✅ Credential certificate downloaded successfully!', { variant: 'success' });
  }
};

const dummyCredentials = [
  {
    id: 'CRED001',
    studentName: 'Sarah Johnson',
    organization: 'TechCorp Innovation Labs',
    role: 'Software Engineering Intern',
    duration: 'Jun 2024 - Aug 2024',
    issueDate: 'August 28, 2024',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    transactionId: 'ALGO8F3N2K9P1M5Q',
    status: 'active'
  },
  {
    id: 'CRED002',
    studentName: 'Sarah Johnson',
    organization: 'DataVerse Analytics',
    role: 'Data Science Intern',
    duration: 'Jan 2024 - May 2024',
    issueDate: 'May 15, 2024',
    skills: ['Python', 'Machine Learning', 'Data Visualization', 'SQL'],
    transactionId: 'ALGOX7Y4W2N9R6T',
    status: 'active'
  },
  {
    id: 'CRED003',
    studentName: 'Sarah Johnson',
    organization: 'CloudNine Solutions',
    role: 'DevOps Intern',
    duration: 'Sep 2023 - Dec 2023',
    issueDate: 'December 20, 2023',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    transactionId: 'ALGOM3K8P5Q1W7E',
    status: 'active'
  }
];

export default function MyCredentials() {
  const [issuedCredentials, setIssuedCredentials] = useState<any[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  // Load issued credentials from localStorage
  useEffect(() => {
    const loadCredentials = () => {
      const stored = localStorage.getItem('issuedCredentials');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setIssuedCredentials(parsed);
        } catch (error) {
          console.error('Error loading credentials:', error);
        }
      }
    };
    
    loadCredentials();
    
    // Listen for storage changes (when new credentials are issued)
    const handleStorageChange = () => {
      loadCredentials();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('credentialIssued', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('credentialIssued', handleStorageChange);
    };
  }, []);

  // Combine dummy credentials with issued credentials
  const allCredentials = [...issuedCredentials, ...dummyCredentials];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Credentials</h1>
        <p className="text-gray-400">View and manage your verified internship credentials</p>
      </div>

      {issuedCredentials.length > 0 && (
        <div className="mb-6 p-4 bg-gradient-to-r from-cyber-500/20 to-neon-500/20 border border-cyber-500/30 rounded-xl">
          <p className="text-white font-semibold">🎉 {issuedCredentials.length} new credential{issuedCredentials.length > 1 ? 's' : ''} issued by companies!</p>
        </div>
      )}

      <div className="grid gap-6">
        {allCredentials.map((credential, index) => (
          <div
            key={credential.id}
            className="group card-cyber hover:border-cyber-400 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex gap-4 flex-1">
                <div className="w-14 h-14 bg-cyber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform rounded-xl border border-cyber-500/30">
                  <Award className="w-7 h-7 text-cyber-400" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{credential.role}</h3>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Building className="w-4 h-4" />
                        <span>{credential.organization}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Duration</p>
                      <div className="flex items-center gap-2 text-white">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{credential.duration}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Issued On</p>
                      <p className="text-white">{credential.issueDate}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500 mb-2">Transaction ID</p>
                      <div className="flex items-center gap-2">
                        <code className="text-sm text-cyber-400 font-mono">{credential.transactionId}</code>
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-cyber-400 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Skills Verified</p>
                    <div className="flex flex-wrap gap-2">
                      {credential.skills.map((skill: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyber-500/20 text-cyber-300 text-sm border border-cyber-500/30 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 text-sm border border-green-500/30 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      Active
                    </span>
                    <span className="text-sm text-gray-400">Credential ID: {credential.id}</span>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col gap-2">
                <button 
                  onClick={() => downloadCredential(credential, enqueueSnackbar)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-dark-800/50 hover:bg-cyber-500/20 text-white transition-all border border-cyber-500/30 hover:border-cyber-400 rounded-lg"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">Download</span>
                </button>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(`https://collabchain.app/verify/${credential.id}`);
                    enqueueSnackbar('📋 Share link copied to clipboard!', { variant: 'success' });
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-dark-800/50 hover:bg-cyber-500/20 text-white transition-all border border-cyber-500/30 hover:border-cyber-400 rounded-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden md:inline">Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="p-6 card-cyber">
          <p className="text-3xl font-bold text-white mb-2">{allCredentials.length}</p>
          <p className="text-sm text-gray-400">Total Credentials</p>
        </div>

        <div className="p-6 card-cyber">
          <p className="text-3xl font-bold text-green-400 mb-2">{allCredentials.length}</p>
          <p className="text-sm text-gray-400">Active Credentials</p>
        </div>

        <div className="p-6 card-cyber">
          <p className="text-3xl font-bold text-white mb-2">{allCredentials.reduce((acc, c) => acc + c.skills.length, 0)}</p>
          <p className="text-sm text-gray-400">Skills Verified</p>
        </div>
      </div>
    </div>
  );
}
