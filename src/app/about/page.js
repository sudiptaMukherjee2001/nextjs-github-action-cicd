export default function About() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold">
        About This Project
      </h1>

      <p>
        This application exists to learn:
      </p>

      <ul className="list-disc">
        <li>Docker</li>
        <li>GitHub Actions</li>
        <li>Docker Hub</li>
        <li>VPS Deployment</li>
        <li>CI/CD Pipelines</li>
      </ul>
    </main>
  );
}
