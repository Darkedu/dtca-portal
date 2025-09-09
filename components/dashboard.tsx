"use client"
import React, { useState, useEffect } from 'react';
import { 
  Users, BookOpen, DollarSign, TrendingUp, Calendar, Award, 
  BarChart3, PieChart, Target, Briefcase, GraduationCap, 
  Bell, Search, Menu, X, Sun, Moon, ChevronDown, Filter,
  ArrowUp, ArrowDown, MapPin, Phone, Mail, Globe, LucideIcon
} from 'lucide-react';

// Type definitions
type ViewType = 'dashboard' | 'students' | 'courses' | 'analytics' | 'finance' | 'calendar' | 'reports';
type AnalyticsViewType = 'finance' | 'marketing' | 'admissions' | 'enrollment';

interface NavItem {
  id: ViewType;
  label: string;
  icon: LucideIcon;
}

interface StatCard {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

interface EnrollmentData {
  month: string;
  students: number;
  percent: number;
}

interface Activity {
  action: string;
  user: string;
  time: string;
}

interface Student {
  name: string;
  email: string;
  course: string;
  progress: number;
  status: 'Active' | 'Completed';
}

interface RevenueData {
  month: string;
  amount: number;
  percent: number;
}

interface PaymentMethod {
  method: string;
  amount: string;
  percent: number;
}

interface LeadStage {
  stage: string;
  count: number;
  percent: number;
  color: string;
}

interface TrafficSource {
  source: string;
  visits: number;
  percent: number;
  color: string;
}

interface Campaign {
  campaign: string;
  ctr: string;
  spend: string;
  roi: string;
}

interface ApplicationStatus {
  status: string;
  count: number;
  percent: number;
  color: string;
}

interface ApplicationSource {
  source: string;
  count: number;
  percent: number;
}

interface Cohort {
  cohort: string;
  students: number;
  progress: number;
  color: string;
}

interface CompletionData {
  month: string;
  completions: number;
  target: number;
  percent: number;
}

const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ViewType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [analyticsView, setAnalyticsView] = useState<AnalyticsViewType>('finance');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = (): void => setDarkMode(!darkMode);
  const toggleSidebar = (): void => setSidebarOpen(!sidebarOpen);

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: PieChart },
  ];

  const statsData: StatCard[] = [
    { label: 'Total Students', value: '1,247', change: '+12%', icon: Users, color: '[#003F67]' },
    { label: 'Active Courses', value: '18', change: '+3', icon: BookOpen, color: 'green' },
    { label: 'Revenue', value: '$567K', change: '+15%', icon: DollarSign, color: 'yellow' },
    { label: 'Completion Rate', value: '89%', change: '+5%', icon: Award, color: 'purple' },
  ];

  const enrollmentData: EnrollmentData[] = [
    { month: 'Jan', students: 156, percent: 78 },
    { month: 'Feb', students: 189, percent: 95 },
    { month: 'Mar', students: 201, percent: 100 },
    { month: 'Apr', students: 167, percent: 83 },
  ];

  const recentActivities: Activity[] = [
    { action: 'New student enrollment', user: 'Sarah Johnson', time: '2 hours ago' },
    { action: 'Course completion', user: 'Mike Chen', time: '4 hours ago' },
    { action: 'Payment received', user: 'Emily Davis', time: '6 hours ago' },
    { action: 'Assignment submitted', user: 'John Smith', time: '8 hours ago' },
  ];

  const studentsData: Student[] = [
    { name: 'Sarah Johnson', email: 'sarah.j@email.com', course: 'Full Stack Development', progress: 78, status: 'Active' },
    { name: 'Mike Chen', email: 'mike.chen@email.com', course: 'Data Analytics', progress: 92, status: 'Active' },
    { name: 'Emily Davis', email: 'emily.d@email.com', course: 'UI/UX Design', progress: 65, status: 'Active' },
    { name: 'John Smith', email: 'john.smith@email.com', course: 'Cybersecurity', progress: 45, status: 'Active' },
    { name: 'Lisa Wang', email: 'lisa.wang@email.com', course: 'Cloud Computing', progress: 89, status: 'Completed' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#003F67] to-[#004d7a] rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">DTCA Portal</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Digital Technology Career Academy</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students, courses..."
                  className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#003F67] focus:border-transparent w-64"
                />
              </div>
              
              <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <button
                onClick={toggleDarkMode}
                className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-300 dark:border-gray-600">
                <div className="w-8 h-8 bg-[#003F67] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">EC</span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Eduardo Cosme</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Program Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white dark:bg-gray-800 shadow-lg border-r border-gray-200 dark:border-gray-700 min-h-screen transition-all duration-300`}>
          <nav className="mt-6">
            <div className="px-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeView === item.id
                        ? 'bg-[#003F67]/10 dark:bg-[#003F67]/20 text-[#003F67] dark:text-[#4A90E2] border-r-2 border-[#003F67]'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {sidebarOpen && <span className="font-medium">{item.label}</span>}
                  </button>
                );
              })}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard View */}
          {activeView === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
                <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 bg-[#003F67] text-white rounded-lg hover:bg-[#002c4b] transition-colors">
                    Export Report
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                          <p className="text-sm text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
                        </div>
                        <div className={`p-3 rounded-lg ${stat.color === '[#003F67]' ? 'bg-[#003F67]/10' : `bg-${stat.color}-100`} dark:bg-${stat.color === '[#003F67]' ? '[#003F67]/20' : stat.color + '-900/20'}`}>
                          <Icon className={`w-6 h-6 ${stat.color === '[#003F67]' ? 'text-[#003F67]' : `text-${stat.color}-600 dark:text-${stat.color}-400`}`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Enrollment Trends */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Enrollment Trends</h3>
                  <div className="space-y-3">
                    {enrollmentData.map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-12">{data.month}</span>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-[#003F67] to-[#4A90E2] h-3 rounded-full"
                              style={{ width: `${data.percent}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white w-12 text-right">{data.students}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                        <div className="w-2 h-2 bg-[#003F67] rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.action}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{activity.user} • {activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics View */}
          {activeView === 'analytics' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Advanced Analytics</h2>
                <div className="flex items-center space-x-3">
                  <select 
                    value={analyticsView} 
                    onChange={(e) => setAnalyticsView(e.target.value as AnalyticsViewType)}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#003F67]"
                  >
                    <option value="finance">Finance & Billing</option>
                    <option value="marketing">Marketing</option>
                    <option value="admissions">Admissions</option>
                    <option value="enrollment">Enrollment</option>
                  </select>
                </div>
              </div>

              {/* Finance & Billing Analytics */}
              {analyticsView === "finance" && (
                <div className="space-y-6">
                  {/* Finance Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</h3>
                      <p className="text-3xl font-bold text-green-600">$567,000</p>
                      <p className="text-sm text-green-600 mt-1">↗ +12% vs last month</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Payments</h3>
                      <p className="text-3xl font-bold text-yellow-600">$45,000</p>
                      <p className="text-sm text-yellow-600 mt-1">18 invoices outstanding</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Collection Rate</h3>
                      <p className="text-3xl font-bold text-[#003F67]">94%</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Within 30 days</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg Payment Time</h3>
                      <p className="text-3xl font-bold text-indigo-600">8.2</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Days to payment</p>
                    </div>
                  </div>

                  {/* Revenue Trend Chart */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Monthly Revenue Trend</h3>
                    <div className="space-y-3">
                      {([
                        { month: 'Jan 2025', amount: 485000, percent: 88 },
                        { month: 'Feb 2025', amount: 521000, percent: 95 },
                        { month: 'Mar 2025', amount: 567000, percent: 100 },
                      ] as RevenueData[]).map((data, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-20">{data.month}</span>
                          <div className="flex-1 mx-4">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                              <div 
                                className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full flex items-center justify-end pr-2"
                                style={{ width: `${data.percent}%` }}
                              >
                                <span className="text-xs text-white font-medium">${data.amount.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Status and Methods */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Payment Status Distribution</h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Paid on Time (68%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Late Payment (26%)</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">Overdue (6%)</span>
                        </div>
                      </div>
                      <div className="mt-4 relative w-32 h-32 mx-auto">
                        <svg viewBox="0 0 42 42" className="w-full h-full transform -rotate-90">
                          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#10B981" strokeWidth="3" 
                                  strokeDasharray="68 32" strokeDashoffset="0"></circle>
                          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#F59E0B" strokeWidth="3" 
                                  strokeDasharray="26 74" strokeDashoffset="-68"></circle>
                          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#EF4444" strokeWidth="3" 
                                  strokeDasharray="6 94" strokeDashoffset="-94"></circle>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Payment Methods</h3>
                      <div className="space-y-3">
                        {([
                          { method: 'Bank Transfer', amount: '$342,000', percent: 60 },
                          { method: 'Credit Card', amount: '$136,080', percent: 24 },
                          { method: 'Check', amount: '$79,380', percent: 14 },
                          { method: 'Other', amount: '$9,540', percent: 2 }
                        ] as PaymentMethod[]).map((payment, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{payment.method}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-900 dark:text-white font-semibold">{payment.amount}</span>
                              <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-green-500 h-2 rounded-full"
                                  style={{ width: `${payment.percent}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Marketing Analytics */}
              {analyticsView === "marketing" && (
                <div className="space-y-6">
                  {/* Marketing Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Leads</h3>
                      <p className="text-3xl font-bold text-blue-600">1,245</p>
                      <p className="text-sm text-blue-600 mt-1">↗ +18% vs last month</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</h3>
                      <p className="text-3xl font-bold text-green-600">19.7%</p>
                      <p className="text-sm text-green-600 mt-1">Leads to applications</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Cost per Acquisition</h3>
                      <p className="text-3xl font-bold text-orange-600">$387</p>
                      <p className="text-sm text-red-600 mt-1">↗ +5% vs last month</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">ROI</h3>
                      <p className="text-3xl font-bold text-purple-600">4.2x</p>
                      <p className="text-sm text-purple-600 mt-1">Marketing spend return</p>
                    </div>
                  </div>

                  {/* Lead Conversion Funnel */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Lead Conversion Funnel</h3>
                    <div className="space-y-4">
                      {([
                        { stage: 'Website Visitors', count: 12450, percent: 100, color: 'bg-blue-500' },
                        { stage: 'Leads Generated', count: 1245, percent: 10, color: 'bg-blue-600' },
                        { stage: 'Qualified Leads', count: 623, percent: 5, color: 'bg-indigo-600' },
                        { stage: 'Applications', count: 245, percent: 2, color: 'bg-purple-600' },
                        { stage: 'Enrollments', count: 98, percent: 0.8, color: 'bg-green-600' }
                      ] as LeadStage[]).map((stage, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{stage.stage}</span>
                            <div className="text-right">
                              <span className="text-sm font-bold text-gray-900 dark:text-white">{stage.count.toLocaleString()}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({stage.percent}%)</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6">
                            <div 
                              className={`${stage.color} h-6 rounded-full flex items-center justify-center`}
                              style={{ width: `${Math.max(stage.percent * 10, 8)}%` }}
                            >
                              <span className="text-xs text-white font-medium">{stage.percent}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Traffic Sources & Campaign Performance */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Traffic Sources</h3>
                      <div className="space-y-3">
                        {([
                          { source: 'Google Ads', visits: 4890, percent: 39.3, color: 'bg-red-500' },
                          { source: 'Facebook', visits: 3115, percent: 25.0, color: 'bg-blue-600' },
                          { source: 'Organic Search', visits: 2485, percent: 20.0, color: 'bg-green-500' },
                          { source: 'LinkedIn', visits: 1235, percent: 9.9, color: 'bg-blue-700' },
                          { source: 'Direct', visits: 725, percent: 5.8, color: 'bg-gray-600' }
                        ] as TrafficSource[]).map((source, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 ${source.color} rounded mr-3`}></div>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{source.source}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-bold text-gray-900 dark:text-white">{source.visits.toLocaleString()}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{source.percent}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Campaign Performance</h3>
                      <div className="space-y-3">
                        {([
                          { campaign: 'Spring Enrollment', ctr: '3.2%', spend: '$12,500', roi: '5.1x' },
                          { campaign: 'Career Change', ctr: '2.8%', spend: '$8,900', roi: '4.7x' },
                          { campaign: 'Skills Upgrade', ctr: '2.1%', spend: '$6,200', roi: '3.8x' },
                          { campaign: 'Digital Marketing', ctr: '1.9%', spend: '$5,400', roi: '3.2x' }
                        ] as Campaign[]).map((campaign, index) => (
                          <div key={index} className="border-l-4 border-blue-500 pl-3 py-2">
                            <div className="flex justify-between items-start">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{campaign.campaign}</span>
                              <span className="text-sm font-bold text-green-600">{campaign.roi}</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                              <span>CTR: {campaign.ctr}</span>
                              <span>Spend: {campaign.spend}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Admissions Analytics */}
              {analyticsView === "admissions" && (
                <div className="space-y-6">
                  {/* Admissions Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Application Volume</h3>
                      <p className="text-3xl font-bold text-[#003F67]">245</p>
                      <p className="text-sm text-green-600 mt-1">↗ +22% vs last month</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Acceptance Rate</h3>
                      <p className="text-3xl font-bold text-green-600">78%</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">191 of 245 applications</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg Review Time</h3>
                      <p className="text-3xl font-bold text-blue-600">3.2</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Days to decision</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Yield Rate</h3>
                      <p className="text-3xl font-bold text-purple-600">82%</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Accepted to enrolled</p>
                    </div>
                  </div>

                  {/* Application Pipeline Progress */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Application Processing Pipeline</h3>
                    <div className="space-y-4">
                      {([
                        { status: 'Received', count: 245, percent: 100, color: 'bg-gray-400' },
                        { status: 'Under Review', count: 89, percent: 36, color: 'bg-yellow-500' },
                        { status: 'Interview Scheduled', count: 156, percent: 64, color: 'bg-blue-500' },
                        { status: 'Accepted', count: 191, percent: 78, color: 'bg-green-500' },
                        { status: 'Enrolled', count: 157, percent: 64, color: 'bg-[#003F67]' }
                      ] as ApplicationStatus[]).map((status, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{status.status}</span>
                            <div className="text-right">
                              <span className="text-sm font-bold text-gray-900 dark:text-white">{status.count}</span>
                              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">({status.percent}%)</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                            <div 
                              className={`${status.color} h-3 rounded-full`}
                              style={{ width: `${status.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Application Sources & Decision Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Application Sources</h3>
                      <div className="space-y-3">
                        {([
                          { source: 'Website Direct', count: 98, percent: 40 },
                          { source: 'Referral Program', count: 74, percent: 30 },
                          { source: 'Social Media', count: 49, percent: 20 },
                          { source: 'Partner Schools', count: 24, percent: 10 }
                        ] as ApplicationSource[]).map((source, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{source.source}</span>
                              <span className="text-sm text-gray-900 dark:text-white">{source.count}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-[#003F67] h-2 rounded-full"
                                style={{ width: `${source.percent}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Decision Timeline</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <span className="text-sm font-medium text-green-800 dark:text-green-400">≤ 2 days</span>
                          <span className="text-sm font-bold text-green-800 dark:text-green-400">45 applications</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                          <span className="text-sm font-medium text-yellow-800 dark:text-yellow-400">3-5 days</span>
                          <span className="text-sm font-bold text-yellow-800 dark:text-yellow-400">112 applications</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <span className="text-sm font-medium text-orange-800 dark:text-orange-400">6-10 days</span>
                          <span className="text-sm font-bold text-orange-800 dark:text-orange-400">67 applications</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                          <span className="text-sm font-medium text-red-800 dark:text-red-400">&gt; 10 days</span>
                          <span className="text-sm font-bold text-red-800 dark:text-red-400">21 applications</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Enrollment Analytics */}
              {analyticsView === "enrollment" && (
                <div className="space-y-6">
                  {/* Enrollment Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Enrolled</h3>
                      <p className="text-3xl font-bold text-purple-600">189</p>
                      <p className="text-sm text-green-600 mt-1">↗ +15% vs last cohort</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Completion Rate</h3>
                      <p className="text-3xl font-bold text-green-600">85%</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Program completion</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg Time to Complete</h3>
                      <p className="text-3xl font-bold text-blue-600">4.8</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Months to completion</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Job Placement Rate</h3>
                      <p className="text-3xl font-bold text-orange-600">92%</p>
                      <p className="text-sm text-green-600 mt-1">Within 90 days</p>
                    </div>
                  </div>

                  {/* Student Progress Tracking */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Current Cohort Progress</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {([
                        { cohort: 'DTCA-2501', students: 20, progress: 75, color: 'bg-blue-500' },
                        { cohort: 'DTCA-2502', students: 18, progress: 45, color: 'bg-green-500' },
                        { cohort: 'DTCA-2503', students: 22, progress: 20, color: 'bg-purple-500' }
                      ] as Cohort[]).map((cohort, index) => (
                        <div key={index} className="text-center">
                          <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">{cohort.cohort}</h4>
                          <div className="relative w-24 h-24 mx-auto">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                              <circle cx="18" cy="18" r="16" fill="none" stroke="#f3f4f6" strokeWidth="3"/>
                              <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" 
                                      strokeWidth="3" strokeDasharray={`${cohort.progress} ${100 - cohort.progress}`}
                                      className={cohort.color.replace('bg-', 'text-')}/>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{cohort.progress}%</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{cohort.students} students</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Completion Trends & Employment Outcomes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Monthly Completions</h3>
                      <div className="space-y-3">
                        {([
                          { month: 'Dec 2024', completions: 24, target: 25, percent: 96 },
                          { month: 'Jan 2025', completions: 28, target: 30, percent: 93 },
                          { month: 'Feb 2025', completions: 32, target: 28, percent: 114 },
                          { month: 'Mar 2025', completions: 19, target: 25, percent: 76 }
                        ] as CompletionData[]).map((data, index) => (
                          <div key={index}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{data.month}</span>
                              <span className="text-sm text-gray-900 dark:text-white">{data.completions}/{data.target}</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${data.percent >= 100 ? 'bg-green-500' : data.percent >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${Math.min(data.percent, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Employment Outcomes</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div>
                            <span className="text-sm font-bold text-green-800 dark:text-green-400 block">Employed</span>
                            <span className="text-xs text-green-600 dark:text-green-300">Within 90 days</span>
                          </div>
                          <span className="text-lg font-bold text-green-800 dark:text-green-400">92%</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div>
                            <span className="text-sm font-bold text-blue-800 dark:text-blue-400 block">Avg Starting Salary</span>
                            <span className="text-xs text-blue-600 dark:text-blue-300">Full-time positions</span>
                          </div>
                          <span className="text-lg font-bold text-blue-800 dark:text-blue-400">$68k</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <div>
                            <span className="text-sm font-bold text-purple-800 dark:text-purple-400 block">Career Advancement</span>
                            <span className="text-xs text-purple-600 dark:text-purple-300">Within 1 year</span>
                          </div>
                          <span className="text-lg font-bold text-purple-800 dark:text-purple-400">78%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Students View */}
          {activeView === 'students' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Student Management</h2>
                <button className="px-4 py-2 bg-[#003F67] text-white rounded-lg hover:bg-[#002c4b] transition-colors">
                  Add New Student
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Student Directory</h3>
                    <div className="flex items-center space-x-3">
                      <Filter className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">1,247 students</span>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Course</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Progress</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {studentsData.map((student, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900 dark:text-white">{student.name}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{student.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{student.course}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                                <div className="bg-[#003F67] h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                              </div>
                              <span className="text-sm text-gray-900 dark:text-white">{student.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              student.status === 'Active' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            <button className="text-[#003F67] hover:text-[#002c4b] dark:text-[#4A90E2] dark:hover:text-blue-300">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;