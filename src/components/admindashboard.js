import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  TrendingUp,
  Calendar,
  MapPin,
  Clock,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Bell,
  Settings,
  Pizza,
  MessageCircle,
  Zap,
  Target,
  Award,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Star,
  TrendingDown,
  Activity,
  BarChart3,
  Phone,
  Mail,
  Globe,
} from "lucide-react";

const PizzaShopDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dashboardData, setDashboardData] = useState(null);
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/admin/dashboard");

      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
      } else {
        console.error("Failed to fetch dashboard data:", response.status);
        setDashboardData({
          stats: {
            totalCustomers: 847,
            totalOrders: 1234,
            todayOrders: 23,
            totalRevenue: 45678,
            todayRevenue: 892,
            pendingOrders: 8,
          },
          salesData: [
            { date: "Mon", revenue: 1200 },
            { date: "Tue", revenue: 1890 },
            { date: "Wed", revenue: 1654 },
            { date: "Thu", revenue: 2100 },
            { date: "Fri", revenue: 2400 },
            { date: "Sat", revenue: 2800 },
            { date: "Sun", revenue: 2200 },
          ],
          recentOrders: [
            {
              _id: "1",
              orderId: "TP001",
              customerPhone: "+1-234-567-8901",
              totalAmount: 24.99,
              status: "pending",
              createdAt: new Date(),
            },
            {
              _id: "2",
              orderId: "TP002",
              customerPhone: "+1-234-567-8902",
              totalAmount: 31.5,
              status: "confirmed",
              createdAt: new Date(),
            },
          ],
        });
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setDashboardData({
        stats: {
          totalCustomers: 847,
          totalOrders: 1234,
          todayOrders: 23,
          totalRevenue: 45678,
          todayRevenue: 892,
          pendingOrders: 8,
        },
        salesData: [
          { date: "Mon", revenue: 1200 },
          { date: "Tue", revenue: 1890 },
          { date: "Wed", revenue: 1654 },
          { date: "Thu", revenue: 2100 },
          { date: "Fri", revenue: 2400 },
          { date: "Sat", revenue: 2800 },
          { date: "Sun", revenue: 2200 },
        ],
        recentOrders: [
          {
            _id: "1",
            orderId: "TP001",
            customerPhone: "+1-234-567-8901",
            totalAmount: 24.99,
            status: "pending",
            createdAt: new Date(),
          },
          {
            _id: "2",
            orderId: "TP002",
            customerPhone: "+1-234-567-8902",
            totalAmount: 31.5,
            status: "confirmed",
            createdAt: new Date(),
          },
        ],
      });
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/orders");
      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders || data || []);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/customers");
      if (response.ok) {
        const data = await response.json();
        setCustomers(data.customers || data || []);
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
      setCustomers([]);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || data || []);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/orders/${orderId}/status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );

      if (response.ok) {
        fetchOrders();
        fetchDashboardData();
        alert("Order status updated successfully!");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-orange-500 mx-auto"></div>
            <Pizza className="absolute inset-0 m-auto w-8 h-8 text-orange-500" />
          </div>
          <p className="mt-6 text-lg font-medium text-gray-700">
            Loading Dashboard...
          </p>
          <p className="mt-1 text-sm text-gray-500">
            ChatBiz automation initializing
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Pizza className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Tony's Pizza Palace
                </h1>
                <p className="text-sm text-gray-600">
                  Powered by{" "}
                  <span className="font-semibold text-orange-600">ChatBiz</span>{" "}
                  Automation
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Status Indicators */}
              <div className="flex items-center bg-green-50 border border-green-200 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <MessageCircle className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-sm font-medium text-green-700">
                  WhatsApp Live
                </span>
              </div>

              <div className="flex items-center bg-blue-50 border border-blue-200 px-3 py-2 rounded-lg">
                <Zap className="w-4 h-4 text-blue-600 mr-1" />
                <span className="text-sm font-medium text-blue-700">
                  Automated
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-orange-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></div>
                </div>
                <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-orange-500" />
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">TP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <nav className="flex space-x-8 px-6">
            {[
              {
                id: "dashboard",
                name: "Dashboard",
                icon: BarChart3,
                badge: null,
              },
              {
                id: "orders",
                name: "Live Orders",
                icon: ShoppingCart,
                badge: dashboardData?.stats?.pendingOrders || 0,
              },
              { id: "customers", name: "Customers", icon: Users, badge: null },
              { id: "menu", name: "Menu", icon: Pizza, badge: null },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id === "orders") fetchOrders();
                  if (tab.id === "customers") fetchCustomers();
                  if (tab.id === "menu") fetchProducts();
                }}
                className={`relative flex items-center py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.name}
                {tab.badge > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && dashboardData && dashboardData.stats && (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    <Zap className="w-6 h-6 mr-2" />
                    <h2 className="text-xl font-bold">
                      ChatBiz Pizza Automation
                    </h2>
                  </div>
                  <p className="text-blue-100 text-lg mb-4">
                    Experience the future:{" "}
                    <span className="font-semibold text-yellow-300">
                      Zero staff needed
                    </span>{" "}
                    for WhatsApp orders
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">
                        $0
                      </div>
                      <div className="text-xs text-blue-200">Staff Costs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">
                        24/7
                      </div>
                      <div className="text-xs text-blue-200">Operations</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-300">
                        ∞
                      </div>
                      <div className="text-xs text-blue-200">Capacity</div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-xs">Automated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Customers
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {dashboardData.stats.totalCustomers || 0}
                    </p>
                    <p className="text-xs text-green-600 mt-1 flex items-center">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      WhatsApp Automated
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Orders
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {dashboardData.stats.totalOrders || 0}
                    </p>
                    <p className="text-xs text-green-600 mt-1 flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />+
                      {dashboardData.stats.todayOrders || 0} today
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Revenue
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      $
                      {(dashboardData.stats.totalRevenue || 0).toLocaleString()}
                    </p>
                    <p className="text-xs text-green-600 mt-1 flex items-center">
                      <DollarSign className="w-3 h-3 mr-1" />
                      +$
                      {(
                        dashboardData.stats.todayRevenue || 0
                      ).toLocaleString()}{" "}
                      today
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Active Orders
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {dashboardData.stats.pendingOrders || 0}
                    </p>
                    <p className="text-xs text-blue-600 mt-1 flex items-center">
                      <Activity className="w-3 h-3 mr-1" />
                      Auto-managed
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sales Chart */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Weekly Sales
                  </h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Live Data</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dashboardData.salesData || []}>
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#ea580c"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#ea580c"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      className="opacity-30"
                    />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#ea580c"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Orders
                  </h3>
                  <div className="flex items-center bg-green-50 px-2 py-1 rounded-md">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
                    <span className="text-xs font-medium text-green-700">
                      Real-time
                    </span>
                  </div>
                </div>
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {(dashboardData.recentOrders || [])
                    .slice(0, 6)
                    .map((order, index) => (
                      <div
                        key={order._id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                            <Pizza className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              #{order.orderId}
                            </p>
                            <p className="text-xs text-gray-600">
                              📱 {order.customerPhone}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(order.createdAt).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            ${(order.totalAmount || 0).toFixed(2)}
                          </p>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              order.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : order.status === "confirmed"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {order.status || "pending"}
                          </span>
                        </div>
                      </div>
                    ))}
                  {(!dashboardData.recentOrders ||
                    dashboardData.recentOrders.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      <Pizza className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p className="text-sm">Waiting for orders...</p>
                      <p className="text-xs">WhatsApp automation ready!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ROI Metrics */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Your ChatBiz Automation Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Monthly Savings
                  </h4>
                  <p className="text-2xl font-bold text-green-600 mb-1">
                    $4,200
                  </p>
                  <p className="text-xs text-gray-600">
                    3 staff positions eliminated
                  </p>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Order Processing
                  </h4>
                  <p className="text-2xl font-bold text-blue-600 mb-1">
                    15 sec
                  </p>
                  <p className="text-xs text-gray-600">Average response time</p>
                </div>

                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Order Accuracy
                  </h4>
                  <p className="text-2xl font-bold text-purple-600 mb-1">
                    99.8%
                  </p>
                  <p className="text-xs text-gray-600">Zero human errors</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white">
              <div className="text-center">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Transform YOUR Pizza Business?
                </h3>
                <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                  Join 500+ pizza shops using ChatBiz automation to eliminate
                  staff costs, increase orders, and operate 24/7 without human
                  intervention.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto">
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <Smartphone className="w-6 h-6 mx-auto mb-1" />
                    <div className="font-semibold text-sm">Free Setup</div>
                    <div className="text-xs text-orange-100">
                      24hr integration
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <Zap className="w-6 h-6 mx-auto mb-1" />
                    <div className="font-semibold text-sm">Instant Results</div>
                    <div className="text-xs text-orange-100">
                      Save from day 1
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <CheckCircle className="w-6 h-6 mx-auto mb-1" />
                    <div className="font-semibold text-sm">Proven ROI</div>
                    <div className="text-xs text-orange-100">
                      300% return in 3 months
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="https://www.chatbiz.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Visit ChatBiz.site
                  </a>
                  <a
                    href="https://wa.me/923329934858"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp: +92-3329934858
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Live WhatsApp Orders
                </h2>
                <p className="text-gray-600">
                  Real-time orders processed by ChatBiz automation
                </p>
              </div>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <button className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>

            {/* Order Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-800 text-sm font-medium">
                      Pending
                    </p>
                    <p className="text-2xl font-bold text-yellow-900">
                      {orders.filter((o) => o.status === "pending").length}
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-800 text-sm font-medium">
                      Confirmed
                    </p>
                    <p className="text-2xl font-bold text-blue-900">
                      {orders.filter((o) => o.status === "confirmed").length}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-800 text-sm font-medium">
                      Preparing
                    </p>
                    <p className="text-2xl font-bold text-orange-900">
                      {orders.filter((o) => o.status === "preparing").length}
                    </p>
                  </div>
                  <Pizza className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-800 text-sm font-medium">
                      Delivered
                    </p>
                    <p className="text-2xl font-bold text-green-900">
                      {orders.filter((o) => o.status === "delivered").length}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(orders) &&
                    orders.map((order) => (
                      <tr key={order._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                              <Pizza className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                #{order.orderId}
                              </div>
                              <div className="text-sm text-gray-500">
                                {new Date(order.createdAt).toLocaleDateString()}{" "}
                                •{" "}
                                {new Date(order.createdAt).toLocaleTimeString()}
                              </div>
                              <div className="text-xs text-blue-600">
                                🤖 Auto-processed
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {order.customerId?.name || "WhatsApp Customer"}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1 text-green-500" />
                              {order.customerPhone}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">
                            ${(order.totalAmount || 0).toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-500">
                            {order.items?.length || 0} item(s)
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={order.status || "pending"}
                            onChange={(e) =>
                              updateOrderStatus(order._id, e.target.value)
                            }
                            className={`text-sm font-medium rounded-lg px-3 py-1 border-0 cursor-pointer ${
                              order.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : order.status === "confirmed"
                                ? "bg-blue-100 text-blue-800"
                                : order.status === "preparing"
                                ? "bg-purple-100 text-purple-800"
                                : order.status === "out_for_delivery"
                                ? "bg-orange-100 text-orange-800"
                                : order.status === "delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="preparing">Preparing</option>
                            <option value="out_for_delivery">
                              Out for Delivery
                            </option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                              <MessageCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {(!Array.isArray(orders) || orders.length === 0) && (
                <div className="text-center py-12">
                  <Pizza className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No orders yet</p>
                  <p className="text-gray-400">
                    Orders will appear automatically when customers use WhatsApp
                  </p>
                  <div className="mt-4 flex items-center justify-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm font-medium">
                      ChatBiz automation ready!
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  WhatsApp Customers
                </h2>
                <p className="text-gray-600">
                  Customers acquired through ChatBiz automation
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orders
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Value
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(customers) &&
                    customers.map((customer) => (
                      <tr key={customer._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {customer.name || "Pizza Lover"}
                              </div>
                              <div className="text-sm text-gray-500">
                                {customer.email || "Discovered via WhatsApp"}
                              </div>
                              <div className="text-xs text-blue-600">
                                🤖 ChatBiz Customer
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm">
                            <MessageCircle className="w-4 h-4 mr-2 text-green-500" />
                            <div>
                              <div className="font-medium text-gray-900">
                                {customer.phoneNumber}
                              </div>
                              <div className="text-xs text-gray-500">
                                Joined:{" "}
                                {new Date(
                                  customer.createdAt
                                ).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {customer.orderHistory?.length || 0} orders
                          </div>
                          <div className="text-xs text-gray-500">
                            {customer.orderHistory?.length > 0
                              ? `Last: ${new Date(
                                  customer.orderHistory[
                                    customer.orderHistory.length - 1
                                  ].date
                                ).toLocaleDateString()}`
                              : "No orders yet"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-bold text-gray-900">
                            $
                            {customer.orderHistory
                              ?.reduce(
                                (sum, order) => sum + (order.amount || 0),
                                0
                              )
                              .toFixed(2) || "0.00"}
                          </div>
                          <div className="text-xs text-gray-500">
                            Lifetime value
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                              <MessageCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {(!Array.isArray(customers) || customers.length === 0) && (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No customers yet</p>
                  <p className="text-gray-400">
                    Customers will appear when they start using WhatsApp
                  </p>
                  <div className="mt-4 flex items-center justify-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-sm font-medium">
                      Ready to welcome customers!
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Menu Tab */}
        {activeTab === "menu" && (
          <MenuManagement products={products} onRefresh={fetchProducts} />
        )}
      </div>
    </div>
  );
};

// Menu Management Component
const MenuManagement = ({ products, onRefresh }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      key: "all",
      label: "All Items",
      icon: "🍽️",
      count: products?.length || 0,
    },
    {
      key: "pizzas",
      label: "Pizzas",
      icon: "🍕",
      count: products?.filter((p) => p.category === "pizzas").length || 0,
    },
    {
      key: "salads",
      label: "Salads",
      icon: "🥗",
      count: products?.filter((p) => p.category === "salads").length || 0,
    },
    {
      key: "beverages",
      label: "Beverages",
      icon: "🥤",
      count: products?.filter((p) => p.category === "beverages").length || 0,
    },
    {
      key: "specials",
      label: "Specials",
      icon: "🔥",
      count: products?.filter((p) => p.category === "specials").length || 0,
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((p) => p.category === selectedCategory) || [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Menu Management</h2>
          <p className="text-gray-600">
            Manage items in your ChatBiz WhatsApp automation
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </button>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setSelectedCategory(category.key)}
            className={`px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors ${
              selectedCategory === category.key
                ? "bg-orange-500 text-white"
                : "bg-white border border-gray-300 hover:bg-orange-50"
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.label}</span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                selectedCategory === category.key
                  ? "bg-white text-orange-500"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {category.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(filteredProducts) &&
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-gray-100 relative overflow-hidden">
                {product.images && product.images[0] ? (
                  <img
                    src={
                      product.images[0].base64
                        ? `data:${
                            product.images[0].mimeType || "image/jpeg"
                          };base64,${product.images[0].base64}`
                        : product.images[0].url?.startsWith("http")
                        ? product.images[0].url
                        : `http://localhost:5000${product.images[0].url}`
                    }
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className="w-full h-full flex items-center justify-center text-gray-400"
                  style={{ display: product.images?.[0] ? "none" : "flex" }}
                >
                  <Pizza className="w-12 h-12" />
                </div>

                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    WhatsApp
                  </div>
                  {product.featured && (
                    <div className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md ${
                      product.availability
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.availability ? "Available" : "Unavailable"}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-800">
                    {product.category}
                  </span>
                </div>

                <p className="text-xl font-bold text-orange-600 mb-2">
                  ${(product.price || 0).toFixed(2)}
                </p>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">
                      Stock: {product.stock || 0}
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setEditingProduct(product)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {(!Array.isArray(filteredProducts) || filteredProducts.length === 0) && (
        <div className="text-center py-12">
          <Pizza className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-2">
            {selectedCategory === "all"
              ? "No menu items yet"
              : `No ${selectedCategory} items yet`}
          </p>
          <p className="text-gray-400 mb-4">
            Add your first menu item to get started
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Menu Item
          </button>
        </div>
      )}

      {/* Add/Edit Product Modal */}
      {(showAddForm || editingProduct) && (
        <MenuItemForm
          product={editingProduct}
          onClose={() => {
            setShowAddForm(false);
            setEditingProduct(null);
          }}
          onSave={() => {
            setShowAddForm(false);
            setEditingProduct(null);
            onRefresh();
          }}
        />
      )}
    </div>
  );
};

// Menu Item Form Component
const MenuItemForm = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    category: product?.category || "pizzas",
    description: product?.description || "",
    price: product?.price || "",
    stock: product?.stock || 100,
    availability: product?.availability !== false,
    featured: product?.featured || false,
  });

  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      submitData.append(key, formData[key]);
    });

    images.forEach((image) => {
      submitData.append("images", image);
    });

    try {
      const url = product
        ? `http://localhost:5000/api/admin/products/${product._id}`
        : "http://localhost:5000/api/admin/products";
      const method = product ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: submitData,
      });

      if (response.ok) {
        alert(
          product ? "Item updated successfully!" : "Item added successfully!"
        );
        onSave();
      } else {
        alert("Error saving item");
      }
    } catch (error) {
      console.error("Error saving item:", error);
      alert("Error saving item");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full m-4 max-h-screen overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {product ? "Edit Menu Item" : "Add New Menu Item"}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="e.g., Margherita Pizza"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="pizzas">🍕 Pizzas</option>
                  <option value="salads">🥗 Salads</option>
                  <option value="beverages">🥤 Beverages</option>
                  <option value="specials">🔥 Specials</option>
                  <option value="appetizers">🍤 Appetizers</option>
                  <option value="desserts">🍰 Desserts</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="18.99"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock
                </label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  placeholder="100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                placeholder="Fresh mozzarella, basil, and tomato sauce on hand-tossed dough"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImages(Array.from(e.target.files))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Upload images that will be sent to customers via WhatsApp
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.availability}
                  onChange={(e) =>
                    setFormData({ ...formData, availability: e.target.checked })
                  }
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 w-4 h-4"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Available for orders
                </span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="rounded border-gray-300 text-orange-600 focus:ring-orange-500 w-4 h-4"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  Featured item
                </span>
              </label>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
              >
                {product ? "Update Item" : "Add Item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PizzaShopDashboard;
