import { Grid, GridItem } from "@/components/common/Grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GAMES } from "@oneLinkData";
import ItemCardv1 from "@/components/common/ItemCardv1";
import { PageHeader } from "@/components/common/PageHeader";

type Props = {};
const page = (props: Props) => {
  return (
    <>
      <PageHeader />
      <Grid template="70% 30%" gap={15}>
        <GridItem>
          <Card>
            <CardHeader>
              <CardTitle>Games</CardTitle>
              <CardDescription>Get cracked games right here </CardDescription>
            </CardHeader>

            <CardContent>
              {/* two columns grid inside card */}
              <Grid template="33.33% 33.33% 33.33%" gap={10}>
                {GAMES.map((GAMES) => (
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
