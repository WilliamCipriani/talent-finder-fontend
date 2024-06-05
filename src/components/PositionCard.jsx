export default function PositionCard({ title, description, progress  }) {
    return (
        <div className="bg-white rounded-lg shadow-custom p-4 flex justify-between items-center">
            <div>
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <div className="flex flex-row space-x-6">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full border-4 border-gray-200">
                        <div className="absolute top-0 left-0 w-10 h-10 rounded-full border-4 border-blue-500"
                            style={{ clipPath: `inset(0 ${100 - progress}% 0 0 round 50%)` }}>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-gray-700">
                    Más de 3 días<br/>
                    100 candidatos postulados
                </div>
            </div>
        </div>
    );
}