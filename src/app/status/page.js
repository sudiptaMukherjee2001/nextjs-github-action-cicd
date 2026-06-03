export default function Status() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0";

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">
        Application Status
      </h1>

      <p>Version: {version}</p>

      <p>Status: Running</p>
    </main>
  );
}
