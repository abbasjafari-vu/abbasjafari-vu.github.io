import { client } from "_sanity/lib/client";
import { Params } from "_types";

export async function GET(request: Request, { params }: Params) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");

  const query = `*[_type=="post_${lang}"]|order(number asc){title,number}`;
  const data = await client.fetch(query);

  return Response.json(data);
}
