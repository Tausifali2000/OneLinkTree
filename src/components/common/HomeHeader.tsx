import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const HomeHeader: React.FC<any> = () => {
  return (
    <div className="py-3">
      <Card className="bg-transparent shadow-none border-0 rounded-none">
        <CardHeader>
          <CardTitle>Welcome to OneLink!</CardTitle>
          <CardDescription>
            Best place to discover free stuff on internet
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};