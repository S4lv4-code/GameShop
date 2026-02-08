// src/components/ui/StatCard.jsx
export function StatCard({ title, value, footer, icon }) {
  return (
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl space-y-2">
      <div className="flex justify-between items-start text-gray-400">
        <span className="text-sm font-medium uppercase tracking-wider">{title}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-4xl font-black text-white">{value}</div>
      <div className="text-xs text-gray-500 font-medium">{footer}</div>
    </div>
  );
}
export default StatCard;