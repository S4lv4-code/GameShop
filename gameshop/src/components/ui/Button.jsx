export function Button({ children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 font-black",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 font-bold",
    danger: "bg-red-500/10 text-red-500 hover:bg-red-600 hover:text-white font-bold",
    ghost: "bg-transparent border border-gray-800 text-gray-400 hover:border-white hover:text-white font-bold"
  };

  return (
    <button 
      className={`px-4 py-2 rounded-lg uppercase tracking-tighter transition-all duration-200 text-sm ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}