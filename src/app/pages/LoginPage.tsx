import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuth, UserRole } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Phone, Shield, Users, Lock } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('staff');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const quickLogin = (role: UserRole) => {
    if (role === 'admin') {
      setEmail('admin@raghumobile.com');
    } else {
      setEmail('staff@raghumobile.com');
    }
    setPassword('password');
    setSelectedRole(role);
  };

  const handleSubmit = async (e: React.FormEvent, role: UserRole) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const success = await login(email, password, role);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError('Invalid credentials. Use password: "password"');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 to-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-full">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          <CardTitle className="text-2xl">Staff Portal</CardTitle>
          <CardDescription>Login to access the Raghu Mobile Wholesale management portal</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="staff" onValueChange={value => { setSelectedRole(value as UserRole); quickLogin(value as UserRole); }}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="staff" onClick={() => quickLogin('staff')}>
                <Users className="w-4 h-4 mr-2" />
                Staff
              </TabsTrigger>
              <TabsTrigger value="admin" onClick={() => quickLogin('admin')}>
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </TabsTrigger>
            </TabsList>

            {(['staff', 'admin'] as UserRole[]).map(role => (
              <TabsContent key={role} value={role}>
                <form onSubmit={e => handleSubmit(e, role)} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor={`email-${role}`}>Email</Label>
                    <Input
                      id={`email-${role}`}
                      type="email"
                      placeholder={`${role}@raghumobile.com`}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`password-${role}`}>Password</Label>
                    <Input
                      id={`password-${role}`}
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Logging in...' : `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
                  </Button>
                  <div className="text-sm text-center text-gray-600 mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="font-medium mb-1">Demo Credentials:</p>
                    <p>Email: {role}@raghumobile.com</p>
                    <p>Password: password</p>
                  </div>
                </form>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-6 text-center text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Access restricted to authorised personnel only.</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
