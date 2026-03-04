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
import { entertainmentSites } from "@/data/entertainment/entertainment.data";
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
              <CardTitle>Entertainment</CardTitle>
              <CardDescription>
                All couch potato content right here{" "}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* two columns grid inside card */}
              <Grid template="33.33% 33.33% 33.33%" gap={14}>
                {entertainmentSites.map((g: IGames) => (
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
