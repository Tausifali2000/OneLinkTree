import { Grid, GridItem } from "@/components/common/Grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ItemCardv1 from "@/components/common/ItemCardv1";
import { softwareSites } from "@/data/utils/utilis.data";
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
              <CardTitle>Softwares</CardTitle>
              <CardDescription>
                Get premium version of softwares here{" "}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* two columns grid inside card */}
              <Grid template="33.33% 33.33% 33.33%" gap={10}>
                {softwareSites.map((GAMES) => (
                  <ItemCardv1 key={GAMES.name} payload={GAMES} />
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
