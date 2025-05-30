import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Brand Kits</h1>
        <Button size="lg" className="flex gap-2 items-center">
          <Plus className="h-5 w-5" />
          New Brand Kit
        </Button>
      </div>

      {/* Brand Kits Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Brand Kits</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10L10 13.75M10 7.22046V7.1875M2.5 10C2.5 5.85786 5.85787 2.5 10 2.5C14.1421 2.5 17.5 5.85787 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Button>
        </div>
        {/* Empty State / Callout */}
        <Card className="bg-blue-50 border-blue-100 flex flex-col sm:flex-row items-center justify-between p-6 gap-4">
          <CardHeader className="p-0 border-0 flex-1">
            <h3 className="text-xl font-semibold mb-1">Generate content that looks and sounds exactly like you</h3>
            <span className="text-muted-foreground text-base">Blaze will analyze the posts, photos, copy, and files in your accounts to generate content</span>
          </CardHeader>
          <CardContent className="p-0 flex items-center">
            <Button size="lg" className="flex gap-2 items-center">
              <Plus className="h-5 w-5" />
              New Brand Kit
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Snippets Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">Snippets</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10L10 13.75M10 7.22046V7.1875M2.5 10C2.5 5.85786 5.85787 2.5 10 2.5C14.1421 2.5 17.5 5.85787 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Button>
        </div>
        {/* New Snippet Card */}
        <div className="flex flex-col items-center gap-3 bg-muted/50 rounded-lg border border-dashed border-blue-200 p-6 cursor-pointer hover:bg-blue-50 transition">
          <div className="flex flex-col items-center">
            {/* SVG Preview */}
            <svg width="64" height="64" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_2860_429)"><rect x="8" y="7.85693" width="14.1429" height="12.8571" rx="1.40493" fill="white" shapeRendering="crispEdges"></rect><rect x="9.29224" y="12.9736" width="11.2595" height="1.15521" rx="0.577605" fill="#58AFFE"></rect><rect x="9.29224" y="15.4458" width="11.2595" height="1.15521" rx="0.577605" fill="#58AFFE"></rect><rect x="9.29224" y="17.918" width="7.96857" height="1.15521" rx="0.577605" fill="#58AFFE"></rect><rect x="9.29224" y="10.5015" width="7.96857" height="1.15521" rx="0.577605" fill="#58AFFE"></rect></g><g filter="url(#filter1_bdi_2860_429)"><rect x="11.8572" y="4" width="14.1429" height="12.8571" rx="1.40493" fill="white" fillOpacity="0.67" shapeRendering="crispEdges"></rect><rect x="13.4482" y="8.63672" width="11.2595" height="1.15521" rx="0.577605" fill="#58AFFE"></rect><rect x="13.4482" y="11.1084" width="11.2595" height="1.15521" rx="0.577605" fill="#58AFFE"></rect><rect x="13.4482" y="13.5806" width="7.96857" height="1.15521" rx="0.577605" fill="#58AFFE"></rect><rect x="13.4482" y="6.16455" width="7.96857" height="1.15521" rx="0.577605" fill="#58AFFE"></rect></g><defs><filter id="filter0_d_2860_429" x="0.915714" y="0.772648" width="28.3114" height="27.0255" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="3.54214"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2860_429"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2860_429" result="shape"></feBlend></filter><filter id="filter1_bdi_2860_429" x="6.23747" y="-1.61971" width="25.3822" height="24.0963" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.80985"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2860_429"></feComposite><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1.95987"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"></feColorMatrix><feBlend mode="normal" in2="effect1_backgroundBlur_2860_429" result="effect2_dropShadow_2860_429"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2860_429" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="0.280985" dy="0.280985"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect3_innerShadow_2860_429"></feBlend></filter></defs></svg>
            <div className="flex items-center justify-center -mt-5">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white shadow-lg">
                <Plus className="h-4 w-4" />
              </span>
            </div>
          </div>
          <div className="text-center">
            <span className="block text-base font-semibold text-slate-800">New Snippet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

