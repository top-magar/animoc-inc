"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, Search, Bell, Plus, ArrowRight } from "lucide-react"
import { AreaChart, CartesianGrid, XAxis, Area } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const chartData = [
  { date: "2025-04-01", desktop: 222, mobile: 150 },
  { date: "2025-04-05", desktop: 373, mobile: 290 },
  { date: "2025-04-10", desktop: 261, mobile: 190 },
  { date: "2025-04-15", desktop: 120, mobile: 170 },
  { date: "2025-04-20", desktop: 89, mobile: 150 },
  { date: "2025-04-25", desktop: 215, mobile: 250 },
  { date: "2025-04-30", desktop: 454, mobile: 380 },
  { date: "2025-05-05", desktop: 481, mobile: 390 },
  { date: "2025-05-10", desktop: 293, mobile: 330 },
  { date: "2025-05-15", desktop: 473, mobile: 380 },
  { date: "2025-05-20", desktop: 177, mobile: 230 },
  { date: "2025-05-25", desktop: 201, mobile: 250 },
  { date: "2025-05-30", desktop: 340, mobile: 280 }
]

const categories = [
  { id: 1, name: "Tools", icon: "⚙️" },
  { id: 2, name: "Social media", icon: "❤️" },
  { id: 3, name: "Blog/SEO", icon: "📝" },
  { id: 4, name: "Marketplaces", icon: "🎁" },
  { id: 5, name: "Video", icon: "🎬" },
  { id: 6, name: "Emails", icon: "✉️" },
  { id: 7, name: "Ads", icon: "🔍" },
  { id: 8, name: "Website", icon: "🌐" },
  { id: 9, name: "Sales", icon: "💰" }
]

const recentWork = [
  { id: 1, title: "Landing Page - Sustainable Fashion", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?crop=entropy&cs=srgb&fm=jpg&q=85", type: "article" },
  { id: 2, title: "Sustainable Fashion Trends", image: "https://images.unsplash.com/photo-1518838439236-2b73ceb4638a?crop=entropy&cs=srgb&fm=jpg&q=85", type: "article" },
  { id: 3, title: "Fashion Expression", image: "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?crop=entropy&cs=srgb&fm=jpg&q=85", type: "article" },
  { id: 4, title: "Blog Post - Fall Fashion Ideas", image: "https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=srgb&fm=jpg&q=85", type: "article" }
]

const scheduledPosts = [
  { id: 1, title: "Instagram Post - Summer Fashion", date: "2025-06-01", time: "2:45pm", channel: "instagram" },
  { id: 2, title: "LinkedIn Article - Fashion Trends", date: "2025-06-03", time: "2:45pm", channel: "linkedin" },
  { id: 3, title: "Blog Post - Sustainable Fashion", date: "2025-06-04", time: "2:45pm", channel: "blog" },
  { id: 4, title: "Email Newsletter - Fashion Tips", date: "2025-06-02", time: "2:45pm", channel: "email" }
]

export default function Page() {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  return (
    <main className="w-full">
      {/* Banner */}
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">Create a Brand Kit</h1>
            <p className="text-blue-100">Generate content that looks and sounds exactly like you</p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            Create Your First Brand Kit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8 relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <Button 
              key={category.id}
              variant={activeCategory.id === category.id ? "default" : "outline"}
              className="flex items-center gap-2 rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Get Ideas Card */}
        <Card>
          <CardHeader>
            <CardTitle>Get fresh ideas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-2"></div>
                <span className="text-sm">Social Media Ideas</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg mb-2"></div>
                <span className="text-sm">Blog Ideas</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-2"></div>
                <span className="text-sm">Newsletter Ideas</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-2"></div>
                <span className="text-sm">Content Plan</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full justify-between">
              <span>See everything you can do</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Generate Content Card */}
        <Card>
          <CardHeader>
            <CardTitle>Generate new content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-lg mb-2"></div>
                <span className="text-sm">Social media</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg mb-2"></div>
                <span className="text-sm">Emails</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-2"></div>
                <span className="text-sm">Blogs</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg hover:bg-slate-200 cursor-pointer transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg mb-2"></div>
                <span className="text-sm">Video</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full justify-between">
              <span>See everything you can do</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Integrate Accounts Card */}
        <Card className="border-2 hover:border-blue-200 transition-all duration-300">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-bold text-blue-700">Integrate your accounts</CardTitle>
                <CardDescription>Post, analyze, optimize, repeat</CardDescription>
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                5 Available
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg hover:bg-pink-50 hover:border-pink-200 border border-transparent cursor-pointer transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white p-1.5 shadow-sm group-hover:shadow flex items-center justify-center">
                    <img src="/icons/instagram.svg" alt="Instagram" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium group-hover:text-pink-600 transition-colors duration-200">Instagram</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-pink-600">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent cursor-pointer transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white p-1.5 shadow-sm group-hover:shadow flex items-center justify-center">
                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium group-hover:text-blue-600 transition-colors duration-200">LinkedIn</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg hover:bg-slate-200 hover:border-slate-300 border border-transparent cursor-pointer transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white p-1.5 shadow-sm group-hover:shadow flex items-center justify-center">
                    <img src="/icons/x.svg" alt="X/Twitter" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium group-hover:text-slate-800 transition-colors duration-200">X/Twitter</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-600">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent cursor-pointer transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white p-1.5 shadow-sm group-hover:shadow flex items-center justify-center">
                    <img src="/icons/facebook.svg" alt="Facebook" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium group-hover:text-blue-600 transition-colors duration-200">Facebook</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg hover:bg-slate-200 hover:border-slate-300 border border-transparent cursor-pointer transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white p-1.5 shadow-sm group-hover:shadow flex items-center justify-center">
                    <img src="/icons/tiktok.svg" alt="TikTok" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-medium group-hover:text-slate-800 transition-colors duration-200">TikTok</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-slate-600">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-800 hover:bg-blue-50">
              <span>Manage all integrations</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Chart */}
        <Card className="h-full flex flex-col border-2 hover:border-blue-200 transition-all duration-300">
          <CardHeader className="space-y-4 pb-2">
            <div className="flex flex-row justify-between items-center">
              <div>
                <CardTitle className="text-xl md:text-2xl font-bold text-blue-700">Total Visitors</CardTitle>
                <CardDescription className="text-slate-500">Last 90 days performance</CardDescription>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Desktop</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span>Mobile</span>
                </div>
              </div>
            </div>
            <Tabs defaultValue="90d" className="w-full">
              <TabsList className="grid w-full grid-cols-3 h-10">
                <TabsTrigger value="90d" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-md">Last 90 days</TabsTrigger>
                <TabsTrigger value="30d" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-md">Last 30 days</TabsTrigger>
                <TabsTrigger value="7d" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-none rounded-md">Last 7 days</TabsTrigger>
              </TabsList>
              <TabsContent value="90d">
                <div className="flex justify-between items-center px-2 pt-4">
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Total Views</p>
                    <p className="text-xl md:text-2xl font-bold">28,346</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <span className="mr-1">↑</span> 12.4% from last period
                    </Badge>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="30d">
                <div className="flex justify-between items-center px-2 pt-4">
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Total Views</p>
                    <p className="text-xl md:text-2xl font-bold">12,768</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <span className="mr-1">↑</span> 8.2% from last period
                    </Badge>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="7d">
                <div className="flex justify-between items-center px-2 pt-4">
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Total Views</p>
                    <p className="text-xl md:text-2xl font-bold">3,541</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                      <span className="mr-1">↓</span> 2.1% from last period
                    </Badge>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
          <CardContent className="pt-0 flex-1 flex flex-col justify-end">
            <div className="h-[220px] md:h-[250px] w-full overflow-hidden">
              <AreaChart 
                data={chartData} 
                width={600} 
                height={250} 
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                className="[&_.recharts-responsive-container]:overflow-visible"
              >
                <defs>
                  <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                  }}
                  tick={{ fontSize: 12, fill: '#64748b' }}
                  axisLine={{ stroke: '#e2e8f0' }}
                  tickLine={{ stroke: '#e2e8f0' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="desktop" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorDesktop)" 
                  animationDuration={1500}
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="mobile" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorMobile)" 
                  animationDuration={1500}
                  animationBegin={300}
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#8b5cf6' }}
                />
              </AreaChart>
            </div>
          </CardContent>
        </Card>

        {/* Recent Work */}
        <Card className="h-full flex flex-col border-2 hover:border-blue-200 transition-all duration-300">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl md:text-2xl font-bold text-blue-700">Edit recent work</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 gap-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50">
                <Plus className="h-4 w-4" />
                <span>New</span>
              </Button>
            </div>
            <CardDescription>Your recently edited content</CardDescription>
          </CardHeader>
          <CardContent className="pt-0 flex-1 flex flex-col justify-end">
            <div className="space-y-2">
              {recentWork.map((work) => (
                <div 
                  key={work.id} 
                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-all duration-200 border border-transparent hover:border-blue-200"
                >
                  <div className="relative w-16 h-16 rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-200">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-1">
                      <Button size="sm" variant="ghost" className="h-6 text-xs text-white hover:bg-black/20">
                        Edit
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 truncate">
                    <p className="text-sm md:text-base font-medium truncate group-hover:text-blue-700 transition-colors duration-200">{work.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs bg-slate-50 group-hover:bg-blue-100 transition-colors duration-200">{work.type}</Badge>
                      <span className="text-xs text-slate-400">Updated {Math.floor(Math.random() * 24)}h ago</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="ghost" className="w-full justify-between text-blue-600 hover:text-blue-800 hover:bg-blue-50">
              <span>View all work</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Calendar */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Next 7 Days</CardTitle>
            <CardDescription>Your scheduled content</CardDescription>
          </div>
          <Button variant="outline">
            Open Content Calendar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="flex p-4 border rounded-lg">
                <div className="flex items-center justify-center p-2 mr-4">
                  <div className="text-center">
                    <div className="text-sm font-medium">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-xs text-muted-foreground">{post.time}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{post.title}</h4>
                  <Badge className="mt-1" variant="outline">
                    {post.channel === "instagram" && "Instagram"}
                    {post.channel === "linkedin" && "LinkedIn"}
                    {post.channel === "blog" && "Blog"}
                    {post.channel === "email" && "Email"}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
  