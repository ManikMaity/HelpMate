import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyFeatureProp } from "@/config/dataConfig";

function KeyFeatureCard({data} : {data : KeyFeatureProp}) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <data.icon className="h-8 w-8 text-blue-500" />
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data?.description}</p>
      </CardContent>
    </Card>
  );
}

export default KeyFeatureCard;
