import { CategoryCard } from "@/components/categories/CategoryCard";
import { Grid, GridItem } from "@/components/common/Grid";
import { HomeHeader } from "@/components/common/HomeHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CATEGORIES from "@/data/categories/categories.data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex gap-5 w-full">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-5 flex-[3]">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <Grid template="50% 50%" gap={12}>
                {CATEGORIES.map((category) => {
                  const href = category.route?.startsWith("/")
                    ? category.route
                    : `/categories/${category.route}`;
                  return (
                    <GridItem key={category.id}>
                      <CategoryCard
                        category={category}
                        borderRadius="12px"
                        height={150}
                        overlay="linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.45))"
                        shadow
                        href={href}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </CardContent>
          </Card>

        
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-5 flex-[2]">
      

<Card>
  <CardHeader><CardTitle className="text-orange-400">Important!</CardTitle></CardHeader>
  <CardContent className="flex flex-col gap-3">
    <p className="text-sm text-muted-foreground">
      Download Brave browser to avoid ads and malware before accessing any site.
    </p>
    <Link
  href="https://brave.com/download"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 bg-orange-100 hover:bg-orange-200 transition-colors text-orange-600 text-sm font-medium px-4 py-2 rounded-lg w-fit"
>
  <Image src="/utils/brave.svg" alt="Brave" width={18} height={18} />
  Download Brave
</Link>
  </CardContent>


</Card>

<Card>
  <CardHeader><CardTitle>Quick Links</CardTitle></CardHeader>
  <CardContent>
    <Grid template="50% 50%" gap={8}>

      <GridItem>
        <Link
          href="https://filecr.com/windows/microsoft-office-2021-2024/?id=649115723000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 group"
        >
          <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image src="/utils/office.svg" alt="Office" width={22} height={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">Docs Editor</span>
            <span className="text-xs text-gray-400">Microsoft Office 2024</span>
          </div>
        </Link>
      </GridItem>

      <GridItem>
        <Link
          href="https://filecr.com/windows/adobe-acrobat-pro-dc-0054/?id=367676987000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 group"
        >
          <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image src="/utils/adobe.svg" alt="Adobe" width={22} height={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">PDF Editor</span>
            <span className="text-xs text-gray-400">Adobe Acrobat</span>
          </div>
        </Link>
      </GridItem>

      <GridItem>
        <Link
          href="https://www.skidrowreloaded.com/gta-5-premium-edition-v1-0-3028-canek77/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 group"
        >
          <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image src="/GAMING/gtav.png" alt="GTA 5" width={22} height={22} className="rounded-sm object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">GTA 5</span>
            <span className="text-xs text-gray-400">Skidrow</span>
          </div>
        </Link>
      </GridItem>

      <GridItem>
        <Link
          href="https://filecr.com/windows/easeus-data-recovery-wizard/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 group"
        >
          <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
            <Image src="/utils/easeUsdata.svg" alt="EaseUS" width={22} height={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900">Data Recovery</span>
            <span className="text-xs text-gray-400">EaseUS Data Recovery</span>
          </div>
        </Link>
      </GridItem>

    </Grid>
  </CardContent>
</Card>
        </div>

      </div>
    </>
  );
}
