import { useAuth } from '../context/AuthContext';
import { useEnquiry, Enquiry } from '../context/EnquiryContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Clock,
  MessageSquare,
  Phone,
  Mail,
  CalendarDays,
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const { enquiries, updateStatus } = useEnquiry();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || (user.role !== 'admin' && user.role !== 'staff')) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user || (user.role !== 'admin' && user.role !== 'staff')) {
    return null;
  }

  const enquiryStatusColor = (status: Enquiry['status']) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-700';
      case 'Contacted': return 'bg-yellow-100 text-yellow-700';
      case 'Resolved': return 'bg-green-100 text-green-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {user.role === 'admin' ? 'Admin Dashboard' : 'Staff Dashboard'}
          </h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>

        {/* Enquiries Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Customer Enquiries & Appointments
              {enquiries.filter(e => e.status === 'New').length > 0 && (
                <Badge className="ml-2 bg-blue-600 text-white text-xs px-1.5 py-0.5">
                  {enquiries.filter(e => e.status === 'New').length} New
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {enquiries.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No enquiries yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {enquiries.map(enq => (
                  <div key={enq.id} className="border rounded-xl p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{enq.name}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${enquiryStatusColor(enq.status)}`}>
                            {enq.status}
                          </span>
                          <Badge variant="outline" className="text-xs">{enq.serviceType}</Badge>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            <a href={`tel:${enq.phone}`} className="hover:text-blue-600">{enq.phone}</a>
                          </div>
                          {enq.email && (
                            <div className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              <a href={`mailto:${enq.email}`} className="hover:text-blue-600">{enq.email}</a>
                            </div>
                          )}
                          {enq.preferredDate && (
                            <div className="flex items-center gap-1">
                              <CalendarDays className="w-3 h-3" />
                              <span>Preferred: {enq.preferredDate}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{new Date(enq.submittedAt).toLocaleDateString('en-IN')}</span>
                          </div>
                        </div>
                        {enq.message && (
                          <p className="text-sm text-gray-700 bg-gray-100 rounded p-2 mt-2">
                            "{enq.message}"
                          </p>
                        )}
                      </div>
                      {user.role === 'admin' && (
                        <div className="flex flex-col gap-1">
                          {enq.status !== 'Contacted' && (
                            <Button size="sm" variant="outline" onClick={() => updateStatus(enq.id, 'Contacted')}>
                              Mark Contacted
                            </Button>
                          )}
                          {enq.status !== 'Resolved' && (
                            <Button size="sm" variant="outline" onClick={() => updateStatus(enq.id, 'Resolved')}>
                              Mark Resolved
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}