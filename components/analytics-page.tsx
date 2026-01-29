'use client'

import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Download, Filter, Eye, EyeOff, Share2, Settings } from 'lucide-react'

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7days')
  const [selectedTrip, setSelectedTrip] = useState(null)

  // Chart Data
  const distanceData = [
    { date: '2025-05-29', withTrip: 180000, withoutTrip: 150000 },
    { date: '2025-05-30', withTrip: 210000, withoutTrip: 170000 },
    { date: '2025-05-31', withTrip: 200000, withoutTrip: 160000 },
    { date: '2025-06-01', withTrip: 250000, withoutTrip: 190000 },
    { date: '2025-06-02', withTrip: 240000, withoutTrip: 180000 },
    { date: '2025-06-03', withTrip: 220000, withoutTrip: 175000 },
  ]

  const tripsData = [
    { date: '2025-05-29', trips: 95 },
    { date: '2025-05-30', trips: 140 },
    { date: '2025-05-31', trips: 85 },
    { date: '2025-06-01', trips: 160 },
    { date: '2025-06-02', trips: 150 },
    { date: '2025-06-03', trips: 168 },
  ]

  const lockStatusData = [
    { name: 'Locked', value: 850 },
    { name: 'Authorized Unlocking', value: 280 },
  ]

  const tripStatusData = [
    { name: 'Created (3)', value: 3 },
    { name: 'Mapped (8)', value: 8 },
    { name: 'In Transit (24)', value: 24 },
    { name: 'Reached (5)', value: 5 },
    { name: 'Completed (0)', value: 0 },
  ]

  const lockStatusDonut = [
    { name: 'Tampered (2)', value: 2 },
    { name: 'Locked (0)', value: 0 },
    { name: 'Unauthorized Unlocking (5)', value: 5 },
    { name: 'Authorized Unlocking (1)', value: 1 },
  ]

  const deviceStatusData = [
    { name: 'Moving (0)', value: 0 },
    { name: 'Idle (0)', value: 0 },
    { name: 'Offline (5)', value: 5 },
    { name: 'Low Battery (0)', value: 0 },
  ]

  const COLORS = ['#FF6500', '#FFA500', '#FFC700', '#FFD700', '#E0E0E0']

  const trips = [
    {
      id: 'T5439133',
      createdOn: '09-10-2024 11:37 IST by Lalit Kumar',
      vendor: 'Logistics Standard',
      route: 'SHYOLI-MUNDRA SHYOLI-MUNDRA',
      device: 'S03D747970',
      deviceStatus: 'Online',
      status: 'Completed',
      driver: 'Driver ID #123',
      details: 'Standard Route',
      actions: 'View',
    },
    {
      id: 'T3157546',
      createdOn: '13-10-2024 10:30:00 PM IST by Miss Dharam',
      vendor: 'Shafir Exports',
      route: 'SAH - CUSTOM - SAH - CUSTOM -...',
      device: 'YPS31BX',
      deviceStatus: 'Online',
      status: 'Completed',
      driver: 'Vehicle No XYZ',
      details: 'Unauthorized trip issued on 14-10-2024 04:36:59 AM IST at PASSCODE',
      actions: 'View',
    },
    {
      id: 'J6784313',
      createdOn: '12-10-2024 12:57:25 PM IST by API Integration',
      vendor: 'Bluesun',
      route: 'GUKGAH 30W AVK-KL...',
      device: 'WB11D61GO',
      deviceStatus: 'Online',
      status: 'Completed',
      driver: 'Trip Remark',
      details: 'Trip closed on 14-10-2024 12:03:05 PM IST by API Remark.',
      actions: 'View',
    },
  ]

  return (
    <div className="pt-20 pb-12 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Analytics</h1>

          {/* Top Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total KM Travelled */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Total KM Travelled (With trips vs Without trial)</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-orange-500">6,520,071</span>
                    <span className="text-lg text-gray-500">km</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Total Distance Travelled: 13,740,200</p>
                </div>
                <select className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700">
                  <option>Last 7 days</option>
                </select>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={distanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                    <Line type="monotone" dataKey="withTrip" stroke="#FF6500" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="withoutTrip" stroke="#999" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 mt-4 text-xs">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-full"></span> With Trip</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-gray-600 rounded-full"></span> Without Trip</span>
              </div>
            </div>

            {/* Average Distance/one */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Average Distance/one</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-400">931,439</span>
                    <span className="text-lg text-gray-500">km</span>
                  </div>
                </div>
                <select className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700">
                  <option>Both</option>
                </select>
              </div>
              <div className="h-48 bg-gray-800 rounded flex items-center justify-center">
                <p className="text-gray-500">Chart Placeholder</p>
              </div>
            </div>

            {/* Total Trips/Day */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Total Trips/Day</p>
                  <p className="text-xs text-red-400 mb-2">Total Trips Completed: 198</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-orange-500">1,284</span>
                  </div>
                </div>
                <select className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700">
                  <option>Last 7 days</option>
                </select>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tripsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                    <Line type="monotone" dataKey="trips" stroke="#FF6500" strokeWidth={2} dot={false} fill="#FFB366" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Lock Status & Devices */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Lock Status */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Lock Status</h3>
                <select className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700">
                  <option>Last 7 days</option>
                </select>
              </div>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={lockStatusData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                    <Bar dataKey="value" fill="#4CAF50" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-3 bg-orange-500/20 border border-orange-500/40 rounded text-sm">
                A new version of Lynktrac is available!
                <button className="ml-2 text-orange-500 hover:text-orange-400">Update</button>
              </div>
            </div>

            {/* Devices Online vs Offline */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-semibold">Devices (Online vs Offline)</h3>
                  <div className="flex gap-6 mt-3">
                    <div>
                      <p className="text-gray-400 text-xs">Total Online</p>
                      <p className="text-2xl font-bold text-orange-500">1525</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Total Offline</p>
                      <p className="text-2xl font-bold text-red-500">11,070</p>
                    </div>
                  </div>
                </div>
                <select className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700">
                  <option>All</option>
                </select>
              </div>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tripsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#666" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
                    <Line type="monotone" dataKey="trips" stroke="#999" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Trips Section */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Trips</h3>
              <div className="flex gap-3">
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-3 py-2 rounded text-sm transition flex items-center gap-2">
                  Hide Charts
                </button>
                <button className="border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-3 py-2 rounded text-sm transition flex items-center gap-2">
                  Filter(2)
                </button>
              </div>
            </div>

            {/* Three Donut Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Trip Status */}
              <div className="bg-gray-800/50 rounded-lg p-4 flex flex-col items-center">
                <h4 className="text-sm font-semibold mb-4">Trip Status</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={tripStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {tripStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-xs text-gray-400 mt-4 space-y-1">
                  {tripStatusData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx] }}></span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lock Status */}
              <div className="bg-gray-800/50 rounded-lg p-4 flex flex-col items-center">
                <h4 className="text-sm font-semibold mb-4">Lock Status</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={lockStatusDonut}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {lockStatusDonut.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-xs text-gray-400 mt-4 space-y-1">
                  {lockStatusDonut.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx] }}></span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Status */}
              <div className="bg-gray-800/50 rounded-lg p-4 flex flex-col items-center">
                <h4 className="text-sm font-semibold mb-4">Device Status</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={deviceStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {deviceStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-xs text-gray-400 mt-4 space-y-1">
                  {deviceStatusData.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[idx] }}></span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trips Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">#</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Trip ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Created By / On</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Vendor name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Route</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Device #/Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Trip Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Driver/Vehicle No.</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Additional Details</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {trips.map((trip, idx) => (
                    <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                      <td className="py-3 px-4">{idx + 1}</td>
                      <td className="py-3 px-4 font-mono text-gray-400 bg-gray-800/30 rounded">{trip.id}</td>
                      <td className="py-3 px-4 text-xs text-gray-400">{trip.createdOn}</td>
                      <td className="py-3 px-4 text-sm">{trip.vendor}</td>
                      <td className="py-3 px-4 text-xs text-gray-400">{trip.route}</td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-mono text-sm text-gray-300">{trip.device}</p>
                          <p className="text-xs text-green-400">{trip.deviceStatus}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">{trip.status}</span>
                      </td>
                      <td className="py-3 px-4 text-sm">{trip.driver}</td>
                      <td className="py-3 px-4 text-xs text-gray-400">{trip.details}</td>
                      <td className="py-3 px-4">
                        <button className="text-orange-500 hover:text-orange-400 text-xs font-semibold">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
