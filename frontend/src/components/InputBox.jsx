export default function InputBox({ label, placeholder }) {
  return (
    <>
      <div>
        <div className="text-sm font-medium text-left p-2">{label}</div>
        <input
          type="text"
          className="w-full border border-slate-300 px-2 py-1"
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
