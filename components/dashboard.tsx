'use client'

import { useState } from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {
  Truck,
  Package,
  AlertCircle,
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Filter,
  Download,
  Menu,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Sample data
const shipmentMetrics = [
  { name: 'Jan', delivered: 340, pending: 240, delayed: 60 },
  { name: 'Feb', delivered: 420, pending: 180, delayed: 40 },
  { name: 'Mar', delivered: 380, pending: 200, delayed: 30 },
  { name: 'Apr', delivered: 490, pending: 120, delayed: 20 },
  { name: 'May', delivered: 520, pending: 100, delayed: 15 },
  { name: 'Jun', delivered: 610, pending: 80, delayed: 10 },
]

const routeEfficiency = [
  { name: 'Route A', value: 85, fill: 'oklch(0.596 0.213 36.877)' },
  { name: 'Route B', value: 72, fill: 'oklch(0.93 0.01 40)' },
  { name: 'Route C', value: 68, fill: 'oklch(0.45 0 0)' },
  { name: 'Route D', value: 91, fill: 'oklch(0.3 0 0)' },
]

const activeShipments = [
  {
    id: 'SHP-2024-001',
    destination: 'Mumbai, MH',
    status: 'in-transit',
    progress: 65,
    eta: '2 hours',
    carrier: 'Express Logistics',
  },
  {
    id: 'SHP-2024-002',
    destination: 'Bangalore, KA',
    status: 'in-transit',
    progress: 45,
    eta: '4 hours',
    carrier: 'Swift Transport',
  },
  {
    id: 'SHP-2024-003',
    destination: 'Delhi, DL',
    status: 'delivered',
    progress: 100,
    eta: 'Delivered',
    carrier: 'Express Logistics',
  },
  {
    id: 'SHP-2024-004',
    destination: 'Hyderabad, TS',
    status: 'delayed',
    progress: 35,
    eta: 'Delayed - 2h',
    carrier: 'Regional Carriers',
  },
]

export default function Dashboard() {
  const [selectedShipment, setSelectedShipment] = useState<string | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50'
      case 'in-transit':
        return 'text-blue-600 bg-blue-50'
      case 'delayed':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle2 className="w-4 h-4" />
      case 'in-transit':
        return <Truck className="w-4 h-4" />
      case 'delayed':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Package className="w-4 h-4" />
    }
  }

  return (
    <div className="flex h-[calc(100vh-73px)] bg-muted/30">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-0'
        } bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 overflow-hidden`}
      >
        <nav className="p-6 space-y-4">
          <div className="text-sm font-semibold text-sidebar-foreground/60 uppercase tracking-wide mb-6">
            Dashboard
          </div>

          {[
            { name: 'Overview', icon: '📊', active: true },
            { name: 'Shipments', icon: '🚚' },
            { name: 'Routes', icon: '🗺️' },
            { name: 'Analytics', icon: '📈' },
            { name: 'Settings', icon: '⚙️' },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full text-left px-4 py-3 rounded-lg transition ${
                item.active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'hover:bg-sidebar-accent/30'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg mb-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-4xl font-bold text-balance">Lynktrac Dashboard</h1>
              <p className="text-muted-foreground mt-2">Welcome back! Here's your supply chain overview.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Active Shipments', value: '1,243', change: '+12%', icon: Truck },
              { label: 'Delivered Today', value: '342', change: '+8%', icon: CheckCircle2 },
              { label: 'On-Time Rate', value: '94.2%', change: '+2.1%', icon: TrendingUp },
              { label: 'Avg. Delivery Time', value: '18h 24m', change: '-1h 12m', icon: Clock },
            ].map((metric, idx) => {
              const Icon = metric.icon
              return (
                <Card key={idx} className="p-6 hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                      <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-green-600">{metric.change}</p>
                </Card>
              )
            })}
          </div>

          {/* Charts Section */}
          <Tabs defaultValue="performance" className="space-y-6 mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="efficiency">Route Efficiency</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Shipment Performance (Last 6 Months)</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={shipmentMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.93 0.01 40)" />
                    <XAxis dataKey="name" stroke="oklch(0.45 0 0)" />
                    <YAxis stroke="oklch(0.45 0 0)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'oklch(1 0 0)',
                        border: '1px solid oklch(0.93 0.01 40)',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="delivered" fill="oklch(0.596 0.213 36.877)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="pending" fill="oklch(0.93 0.01 40)" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="delayed" fill="oklch(0.3 0 0)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </TabsContent>

            <TabsContent value="efficiency">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Route Efficiency Scores</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={routeEfficiency}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {routeEfficiency.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Delivery Timeline Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={shipmentMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.93 0.01 40)" />
                    <XAxis dataKey="name" stroke="oklch(0.45 0 0)" />
                    <YAxis stroke="oklch(0.45 0 0)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'oklch(1 0 0)',
                        border: '1px solid oklch(0.93 0.01 40)',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="delivered"
                      stroke="oklch(0.596 0.213 36.877)"
                      strokeWidth={2}
                      dot={{ fill: 'oklch(0.596 0.213 36.877)', r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="delayed"
                      stroke="oklch(0.3 0 0)"
                      strokeWidth={2}
                      dot={{ fill: 'oklch(0.3 0 0)', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Active Shipments */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Active Shipments</h2>
              <Button variant="ghost" size="sm">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            <div className="space-y-3">
              {activeShipments.map((shipment) => (
                <Card
                  key={shipment.id}
                  className={`p-4 cursor-pointer transition hover:shadow-md ${
                    selectedShipment === shipment.id ? 'border-primary ring-2 ring-primary/20' : ''
                  }`}
                  onClick={() => setSelectedShipment(shipment.id)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <p className="font-semibold">{shipment.id}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {shipment.destination}
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Carrier</p>
                      <p className="font-medium text-sm">{shipment.carrier}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-muted-foreground">Progress</span>
                        <span className="text-sm font-semibold">{shipment.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${shipment.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(shipment.status)}`}>
                        {getStatusIcon(shipment.status)}
                        {shipment.status.charAt(0).toUpperCase() + shipment.status.slice(1)}
                      </span>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">ETA</p>
                      <p className="font-semibold text-sm flex items-center justify-end gap-1 mt-1">
                        <Clock className="w-3 h-3" />
                        {shipment.eta}
                      </p>
                    </div>
                  </div>

                  {selectedShipment === shipment.id && (
                    <div className="mt-4 pt-4 border-t border-border space-y-3">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Origin</p>
                          <p className="font-medium mt-1">Mumbai Warehouse</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Weight</p>
                          <p className="font-medium mt-1">45.2 kg</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Service Type</p>
                          <p className="font-medium mt-1">Express</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Update</p>
                          <p className="font-medium mt-1">30 mins ago</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
