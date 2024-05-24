export default function Header({ title, subtitle, backgroundClass }) {
  return (
    <div
      className={`relative ${backgroundClass} h-80 flex items-center justify-center text-center bg-cover bg-center`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex items-center justify-center h-full">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
