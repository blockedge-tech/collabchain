import { User, Wallet, Shield, Mail, Building, MapPin, Edit2, Save } from 'lucide-react';
import { useState } from 'react';

interface ProfilePageProps {
  walletAddress: string;
}

export default function ProfilePage({ walletAddress }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    organization: 'TechCorp Innovation Labs',
    role: 'Student',
    location: 'San Francisco, CA',
    bio: 'Passionate about blockchain technology and building decentralized applications. Currently exploring opportunities in Web3 development.'
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
        <p className="text-gray-600">Manage your account information and preferences</p>
      </div>

      <div className="bg-white border border-gray-200 overflow-hidden">
        <div className="h-32 bg-blue-600" />

        <div className="px-8 pb-8">
          <div className="flex items-end justify-between -mt-16 mb-6">
            <div className="flex items-end gap-4">
              <div className="w-32 h-32 bg-blue-600 flex items-center justify-center border-4 border-white">
                <User className="w-16 h-16 text-white" />
              </div>
              <div className="mb-2">
                <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-gray-600">{profile.role}</p>
              </div>
            </div>

            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-all"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </>
              )}
            </button>
          </div>

          <div className="space-y-6">
            <div className="p-4 bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <Wallet className="w-5 h-5 text-blue-600" />
                <p className="text-sm text-gray-600">Wallet Address</p>
              </div>
              <code className="text-gray-900 font-mono text-sm">{walletAddress}</code>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                ) : (
                  <p className="text-gray-900 px-4 py-3">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                ) : (
                  <p className="text-gray-900 px-4 py-3">{profile.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Organization
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.organization}
                    onChange={(e) => setProfile({ ...profile, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                ) : (
                  <p className="text-gray-900 px-4 py-3">{profile.organization}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                ) : (
                  <p className="text-gray-900 px-4 py-3">{profile.location}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors resize-none"
                />
              ) : (
                <p className="text-gray-900 px-4 py-3 leading-relaxed">{profile.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-gray-900 font-semibold">Account Security</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Your account is secured with blockchain authentication</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-600 rounded-full" />
            <span className="text-green-600">Wallet Connected</span>
          </div>
        </div>

        <div className="p-6 bg-white border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-gray-900 font-semibold">Blockchain Network</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">Connected to Algorand MainNet</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-blue-600">Network Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
