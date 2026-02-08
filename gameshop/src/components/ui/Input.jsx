export function Input({ label, ...props }) {
  return (
    <div className="space-y-2 w-full">
      {label && <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{label}</label>}
      <input 
        className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-white outline-none transition-all placeholder:text-gray-700"
        {...props} 
      />
    </div>
  );
}