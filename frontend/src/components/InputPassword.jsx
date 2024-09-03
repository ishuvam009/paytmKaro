export default function InputPassword({ label, placeholder }) {
  return (
    <>
      <div className="pb-4">
        <div className="text-left font-medium text-sm p-2">{label}</div>
        <input
          className="w-full px-2 py-1 border border-slate-300 "
          type="password"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
