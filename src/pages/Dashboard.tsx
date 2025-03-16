
import React from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <img 
                src={user?.imageUrl} 
                alt={user?.fullName || 'User'} 
                className="object-cover"
              />
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome, {user?.firstName || 'User'}!</h1>
              <p className="text-gray-600">Manage your DigiSanchaar account and orders</p>
            </div>
          </div>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>Your recent orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">0</p>
                    <p className="text-gray-500 mt-2">No orders yet</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Services</CardTitle>
                    <CardDescription>Active services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">0</p>
                    <p className="text-gray-500 mt-2">No active services</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Support</CardTitle>
                    <CardDescription>Need help?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button 
                      onClick={() => window.location.href = '/contact'}
                      className="btn-primary w-full"
                    >
                      Contact Support
                    </button>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Things you can do</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                      onClick={() => window.location.href = '/services'}
                      className="btn-secondary"
                    >
                      Browse Services
                    </button>
                    <button 
                      onClick={() => window.location.href = '/get-started'}
                      className="btn-primary"
                    >
                      Get Started
                    </button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Your Orders</CardTitle>
                  <CardDescription>Track and manage your orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-xl font-medium mb-2">No orders yet</p>
                    <p className="text-gray-500 mb-6">When you place an order, it will appear here</p>
                    <button 
                      onClick={() => window.location.href = '/services'}
                      className="btn-primary"
                    >
                      Browse Services
                    </button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Full name</p>
                      <p className="text-lg">{user?.fullName || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email address</p>
                      <p className="text-lg">{user?.primaryEmailAddress?.emailAddress || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Member since</p>
                      <p className="text-lg">{user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        onClick={() => window.open('https://accounts.clerk.dev/user/settings', '_blank')}
                        className="btn-secondary"
                      >
                        Manage Account
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
