import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

const getSeminars = async () => {
  const response = await client.getEntries({
    content_type: 'seminars',
  });

  return response.items;
};

export default getSeminars;