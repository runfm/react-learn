export async function rootLoader({ request }) {
  const uids = [1, 2, 56, 44, 78];
  const url = new URL(request.url);
  const layout = url.searchParams.get("la");
  return { uids, layout };
}
