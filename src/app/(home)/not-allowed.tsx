export default function NotAllowedPage() {
    return (
        <main className="min-h-screen flex items-center justify-center text-center">
            <div>
                <h1 className="text-3xl font-bold mb-4">このページにはアクセスできません。</h1>
                <p className="text-gray-500">日本国内からのみ閲覧可能です。</p>
            </div>
        </main>
    );
}