import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Content Analytics</h1>
      </div>

      {/* Empty State */}
      <div className="bg-white rounded-xl shadow-sm border p-8 flex flex-col items-center text-center">
        <div className="max-w-md mx-auto mb-8 flex flex-col items-center">
          <h4 className="text-xl font-semibold mb-4">Track your followers, profile interactions, post performance & much more.</h4>
          <Button size="lg" className="flex gap-2 items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.2291 10C18.2291 9.25369 18.1298 8.53057 17.9436 7.84316C16.9959 4.34448 13.7985 1.77083 9.99994 1.77083C5.45508 1.77083 1.77075 5.45516 1.77075 10C1.77075 14.5449 5.45508 18.2292 9.99994 18.2292M10 12.143C7.06872 12.143 4.93154 13.4843 3.57089 15.1521" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
              <path d="M18.8021 15.0087H15.0521M15.0521 15.0087H11.3021M15.0521 15.0087V18.7585M15.0521 15.0087V11.2585" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.0639 6.90872C12.0639 5.8094 11.1358 4.91119 9.99994 4.91119C8.86409 4.91119 7.93604 5.8094 7.93604 6.90872C7.93604 8.00804 8.86409 8.90625 9.99994 8.90625C11.1358 8.90625 12.0639 8.00804 12.0639 6.90872Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
            Connect Social Media
          </Button>
        </div>
        <div className="relative w-full max-w-2xl h-64 sm:h-80 md:h-96">
          <img 
            src="https://res.cloudinary.com/almanac/image/upload/v1730400712/blaze_assets/analytics/desktop-empty.png" 
            alt="Analytics Empty State" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Future Analytics Components */}
      <div className="space-y-6">
        {/* These components would be shown after connecting social media */}
        {/* Analytics cards will go here */}
      </div>
    </div>
  );
}
