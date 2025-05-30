"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronLeft, ChevronRight, Search, Plus } from "lucide-react";

interface Template {
  id: string;
  title: string;
  creator: string;
  type: string;
  imageUrl: string;
  wide?: boolean;
  portrait?: boolean;
}

interface TemplateStyle {
  id: string;
  name: string;
  templates: Template[];
}

const templateStyles = [
  {
    id: "elegant",
    name: "Elegant",
    templates: [
      {
        id: "1",
        title: "Running Motivation Template",
        creator: "Blaze.ai",
        type: "Instagram Square Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/uploads/au3mhoahh5fojxzjxkokjnhnjssktcyu_84zs8mqrl1zzuzzjhe2hu_thumbnail_1739907572-837e55146567ebb8e22b.png"
      },
      {
        id: "2",
        title: "Coaching Inspiration Template",
        creator: "Blaze.ai",
        type: "Instagram Square Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/uploads/g2yfwkuc7mhpymjyteqvtnuvyov1eyql_whxh0epm1ffduk_2ldi1x-2aa289ebcf2fc875a7f0.png"
      },
      {
        id: "3",
        title: "Elegant Love Quote Template",
        creator: "Blaze.ai",
        type: "Instagram Square Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/article_uploads//template-e1c973cf05357b6482e4.png"
      },
      {
        id: "4",
        title: "Elegant Fashion Promotion Template",
        creator: "Blaze.ai",
        type: "Instagram Square Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/article_uploads//template-b0406784d8ac4d10cfbf.png"
      },
      {
        id: "5",
        title: "Business Connection Template",
        creator: "Blaze.ai",
        type: "Instagram Square Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/uploads/wgzdapfjfgsxploghetj96dinibwbiv5_zd8e89p7iboxv0j2rzdgr-46a1e3c9ac43915cdedb.png"
      }
    ]
  },
  {
    id: "feminine",
    name: "Feminine",
    templates: [
      {
        id: "6",
        title: "Elegant Startup Quote Template",
        creator: "Blaze.ai",
        type: "LinkedIn Visual Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_640/article_uploads//template-784614ff5b403fe93755.png",
        wide: true
      },
      {
        id: "7",
        title: "Creative Coaching Illustration",
        creator: "Blaze.ai",
        type: "LinkedIn Visual Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_640/article_uploads//template-962854b906390d87a7ea.png",
        wide: true
      },
      {
        id: "8",
        title: "Minimalist Business Quote Template",
        creator: "Blaze.ai",
        type: "LinkedIn Visual Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_640/article_uploads//template-645cc3a0f9e59d89077e.png",
        wide: true
      },
      {
        id: "9",
        title: "Elegant Manufacturing Collage Template",
        creator: "Blaze.ai",
        type: "LinkedIn Visual Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_640/article_uploads//template-0c38af06a28ff532bb14.png",
        wide: true
      }
    ]
  },
  {
    id: "modern",
    name: "Modern",
    templates: [
      {
        id: "10",
        title: "Business Building Blocks Template",
        creator: "Blaze.ai",
        type: "Instagram Portrait Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/article_uploads//template-5cf7264d8e148c38671a.png",
        portrait: true
      },
      {
        id: "11",
        title: "Business Women Event Template",
        creator: "Blaze.ai",
        type: "Instagram Portrait Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/uploads/z7met3mynooel6vjryalchyzmuqsfzwc_fw3ljhpodej6zdi3cdqnd-c06d0a30ca1e78d0628c.png",
        portrait: true
      },
      {
        id: "12",
        title: "Financial Empowerment Message",
        creator: "Blaze.ai",
        type: "Instagram Portrait Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/uploads/au7thyeesnzpu9s7u6j3d9dpb6woendf_pafnphtxzwhilg9ilhjog-68a9c490d52b9ee79625.png",
        portrait: true
      },
      {
        id: "13",
        title: "Mindful Workshop Announcement",
        creator: "Blaze.ai",
        type: "Instagram Portrait Post",
        imageUrl: "https://res.cloudinary.com/almanac/image/upload/q_auto,c_scale,w_470/article_uploads//template-3456520fd2526123040b.png",
        portrait: true
      }
    ]
  }
];

const TemplateCard = ({ template }: { template: Template }) => {
  const aspectRatio = template.wide ? 'aspect-[1.9/1]' : template.portrait ? 'aspect-[0.8/1]' : 'aspect-square';
  
  return (
    <div className="group cursor-pointer hover:opacity-95 transition-opacity">
      <div className={`relative ${aspectRatio} rounded-lg overflow-hidden bg-muted shadow-sm mb-2`}>
        <img 
          src={template.imageUrl} 
          alt={template.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-1">{template.title}</h3>
        <p className="text-xs text-muted-foreground">{template.type} by {template.creator}</p>
      </div>
    </div>
  );
};

const TemplateCarousel = ({ style }: { style: TemplateStyle }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{style.name}</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {style.templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-center mb-2">AI powered templates built for growth.</h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search thousands of templates..." 
              className="pl-10 h-12 rounded-full" 
            />
          </div>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          <FilterButton label="Format" />
          <FilterButton label="Type" />
          <FilterButton label="Category" />
          <FilterButton label="Style" />
        </div>
      </div>
      
      {/* Template Carousels */}
      <div className="space-y-6">
        {templateStyles.map((style) => (
          <TemplateCarousel key={style.id} style={style} />
        ))}
      </div>
    </div>
  );
}

const FilterButton = ({ label }: { label: string }) => {
  return (
    <Button variant="outline" className="rounded-full border h-10 flex items-center gap-2">
      {label}
      <ChevronDown className="h-4 w-4" />
    </Button>
  );
};
