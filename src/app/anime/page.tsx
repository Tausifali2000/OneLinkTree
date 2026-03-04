import { Grid, GridItem } from "@/components/common/Grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IGames } from "@/data/gaming/gaming.interface";
import ItemCardv2 from "@/components/common/ItemCardv2";
import { animeSites } from "@/data/anime/anime.data";
import { PageHeader } from "@/components/common/PageHeader";

export const runtime = "edge";

type Props = {};
const page = (props: Props) => {
  return (
    <>
      <PageHeader />
      <Grid template="70% 30%" gap={15}>
        <GridItem>
          <Card>
            <CardHeader>
              <CardTitle>Anime</CardTitle>
              <CardDescription>Deepdive in anime world! </CardDescription>
            </CardHeader>

            <CardContent>
              <Grid template="33.33% 33.33% 33.33%" gap={14}>
                {animeSites.map((g: IGames) => (
                  <ItemCardv2 key={g.name} payload={g} />
                ))}
              </Grid>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
};
export default page;
