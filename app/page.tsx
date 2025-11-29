export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">SAMKALP-2025 Backend Check</h1>
        <p className="mt-2 text-gray-600">
          Frontend is live. Test backend at <code>/api/health</code> and <code>/api/db-check</code>.
        </p>
      </div>
    </main>
  );
}
