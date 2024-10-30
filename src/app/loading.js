'use client'

export default function Loading() {
    console.log('loading');
    
    return (
        <div className="flex bg-black flex-col items-center justify-center h-screen space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            <p className="text-lg font-medium text-gray-700">Yükleniyor...</p>
        </div>
    );
}