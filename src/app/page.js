export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl font-bold">
        Next.js CI/CD Playground
      </h1>

      <p className="text-lg text-gray-500">
        Learning Docker, GitHub Actions and VPS Deployment
      </p>

      <div className="flex gap-4">
        <a
          href="/about"
          className="border px-4 py-2 rounded"
        >
          About
        </a>

        <a
          href="/status"
          className="border px-4 py-2 rounded"
        >
          Status
        </a>
      </div>
    </main>
  );
}
