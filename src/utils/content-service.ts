import { createClient } from "contentful";
import { config } from "dotenv";

// export  const  client = createClient({
//     space: "zhzgv7x4ee2o",
//     accessToken:  "z1vAzM27q9zu-LsrRgAiZf-O0up5ShDgiAs5_TtKdHw"
// })
declare global
{
    namespace NodeJs
    {
        interface ProcessEnv
        {
            CONTENTFUL_SPACE_ID: string;
            CONTENTFUL_ACCESS_TOKEN: string;
        }
    }
}

config()

export default class ContentService
{
    static get instance()
    {
        return new ContentService
    }

    client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    async getEntriesByType<T>(type: string) {
        return (
          await this.client.getEntries<T>({
            content_type: type,
          })
        ).items;
      }
}
