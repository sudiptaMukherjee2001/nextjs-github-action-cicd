export async function GET() {
  return Response.json({
    status: "healthy",
    application: "nextjs-cicd-playground",
    version: "1.0.0",
  });
}
