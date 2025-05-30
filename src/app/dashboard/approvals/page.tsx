"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reviews & Approvals</h1>
      </div>

      {/* Controls Section */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div className="flex gap-2 order-2 md:order-2">
            <Button variant="outline" size="sm" disabled>
              Recently Ended
            </Button>
            <Button variant="outline" size="sm" disabled>
              Completed
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="assigned" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
            <TabsTrigger value="assigned" className="flex items-center gap-2">
              Assigned to you
              <Badge variant="secondary" className="ml-1 h-5 min-w-5 flex items-center justify-center rounded-full text-xs">
                0
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              Your Requests
              <Badge variant="secondary" className="ml-1 h-5 min-w-5 flex items-center justify-center rounded-full text-xs">
                0
              </Badge>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="assigned" className="mt-4">
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="80" viewBox="0 0 78 80" fill="none" className="w-24 h-24">
              <g filter="url(#filter0_di_4207_2463)">
                <path fillRule="evenodd" clipRule="evenodd" d="M31.5802 29.7236C50.5409 29.7236 57.5061 40.5866 57.5061 49.2711C57.5061 57.9556 37.5135 59.3605 31.5802 59.3605V59.3594C25.6469 59.3594 5.6543 57.9546 5.6543 49.27C5.6543 40.5855 12.6195 29.8242 31.5802 29.8242V29.7236Z" fill="url(#paint0_linear_4207_2463)"></path>
              </g>
              <g filter="url(#filter1_di_4207_2463)">
                <path fillRule="evenodd" clipRule="evenodd" d="M31.5795 3.29968C22.1287 3.29969 17.4033 10.5794 17.4033 16.4542C17.4033 24.6275 23.6607 32.2213 31.5784 32.222C31.5791 32.2456 31.5795 32.2685 31.5795 32.2907C39.4978 32.2907 45.7558 24.6279 45.7558 16.4542C45.7558 10.5794 41.0304 3.29968 31.5795 3.29968Z" fill="url(#paint1_radial_4207_2463)"></path>
              </g>
              <g filter="url(#filter2_d_4207_2463)">
                <path d="M50.9412 28.934C51.2939 28.6276 51.8183 28.6276 52.1709 28.934L54.189 30.6872C54.4594 30.9221 54.8401 30.9824 55.1699 30.8426L57.631 29.7987C58.0611 29.6163 58.5598 29.7784 58.8005 30.1787L60.178 32.4698C60.3626 32.7768 60.706 32.9518 61.0629 32.9207L63.7261 32.6884C64.1915 32.6479 64.6157 32.9561 64.7209 33.4112L65.323 36.0158C65.4037 36.3649 65.6763 36.6374 66.0253 36.7181L68.6299 37.3202C69.085 37.4254 69.3933 37.8497 69.3527 38.3151L69.1205 40.9782C69.0894 41.3351 69.2643 41.6785 69.5713 41.8631L71.8624 43.2406C72.2628 43.4813 72.4248 43.9801 72.2424 44.4101L71.1986 46.8712C71.0587 47.201 71.119 47.5817 71.3539 47.8521L73.1072 49.8702C73.4136 50.2228 73.4136 50.7472 73.1072 51.0999L71.3539 53.118C71.119 53.3884 71.0587 53.7691 71.1986 54.0989L72.2424 56.5599C72.4248 56.99 72.2628 57.4887 71.8624 57.7295L69.5713 59.107C69.2643 59.2916 69.0894 59.635 69.1205 59.9919L69.3527 62.655C69.3933 63.1204 69.085 63.5447 68.6299 63.6499L66.0253 64.252C65.6763 64.3327 65.4037 64.6052 65.323 64.9543L64.7209 67.5588C64.6157 68.014 64.1915 68.3222 63.7261 68.2816L61.0629 68.0494C60.706 68.0183 60.3626 68.1933 60.178 68.5003L58.8005 70.7914C58.5598 71.1917 58.0611 71.3538 57.631 71.1714L55.1699 70.1275C54.8401 69.9877 54.4594 70.0479 54.189 70.2829L52.1709 72.0361C51.8183 72.3425 51.2939 72.3425 50.9412 72.0361L48.9232 70.2829C48.6527 70.0479 48.2721 69.9877 47.9423 70.1275L45.4812 71.1714C45.0511 71.3538 44.5524 71.1917 44.3117 70.7914L42.9342 68.5003C42.7496 68.1933 42.4062 68.0183 42.0493 68.0494L39.3861 68.2816C38.9207 68.3222 38.4965 68.014 38.3913 67.5588L37.7891 64.9543C37.7085 64.6052 37.4359 64.3327 37.0869 64.252L34.4823 63.6499C34.0271 63.5447 33.7189 63.1204 33.7595 62.655L33.9917 59.9919C34.0228 59.635 33.8479 59.2916 33.5408 59.107L31.2498 57.7295C30.8494 57.4887 30.6874 56.99 30.8698 56.5599L31.9136 54.0989C32.0535 53.7691 31.9932 53.3884 31.7582 53.118L30.005 51.0999C29.6986 50.7472 29.6986 50.2228 30.005 49.8702L31.7582 47.8521C31.9932 47.5817 32.0535 47.201 31.9136 46.8712L30.8698 44.4101C30.6874 43.9801 30.8494 43.4813 31.2498 43.2406L33.5408 41.8631C33.8479 41.6785 34.0228 41.3351 33.9917 40.9782L33.7595 38.3151C33.7189 37.8497 34.0271 37.4254 34.4823 37.3202L37.0869 36.7181C37.4359 36.6374 37.7085 36.3649 37.7891 36.0158L38.3913 33.4112C38.4965 32.9561 38.9207 32.6479 39.3861 32.6884L42.0493 32.9207C42.4062 32.9518 42.7496 32.7768 42.9342 32.4698L44.3117 30.1787C44.5524 29.7784 45.0511 29.6163 45.4812 29.7987L47.9423 30.8426C48.2721 30.9824 48.6527 30.9221 48.9232 30.6872L50.9412 28.934Z" fill="url(#paint2_radial_4207_2463)"></path>
                <path d="M51.8635 29.2878L53.8816 31.0411C54.2872 31.3935 54.8582 31.4839 55.3529 31.2741L57.814 30.2303C58.0291 30.1391 58.2784 30.2201 58.3988 30.4203L59.7763 32.7113C60.0532 33.1719 60.5683 33.4343 61.1036 33.3876L63.7668 33.1554C63.9995 33.1351 64.2116 33.2892 64.2642 33.5168L64.8663 36.1214C64.9874 36.645 65.3962 37.0538 65.9197 37.1748L68.5243 37.7769C68.7519 37.8295 68.906 38.0416 68.8857 38.2743L68.6535 40.9375C68.6068 41.4728 68.8693 41.988 69.3298 42.2649L71.6209 43.6424C71.821 43.7627 71.9021 44.0121 71.8109 44.2271L70.767 46.6882C70.5572 47.1829 70.6477 47.7539 71.0001 48.1596L72.7533 50.1776C72.9065 50.3539 72.9065 50.6161 72.7533 50.7925L71.0001 52.8105C70.6477 53.2162 70.5572 53.7872 70.767 54.2819L71.8109 56.743C71.9021 56.958 71.821 57.2074 71.6209 57.3277L69.3298 58.7052C68.8693 58.9821 68.6068 59.4973 68.6535 60.0326L68.8857 62.6958C68.906 62.9284 68.7519 63.1406 68.5243 63.1932L65.9197 63.7953C65.3962 63.9163 64.9874 64.3251 64.8663 64.8487L64.2642 67.4533C64.2116 67.6808 63.9995 67.835 63.7668 67.8147L61.1036 67.5824C60.5683 67.5358 60.0532 67.7982 59.7763 68.2588L58.3988 70.5498C58.2784 70.75 58.0291 70.831 57.814 70.7398L55.3529 69.696C54.8582 69.4862 54.2872 69.5766 53.8816 69.929L51.8635 71.6823C51.6872 71.8355 51.425 71.8355 51.2487 71.6823L49.2306 69.929C48.825 69.5766 48.2539 69.4862 47.7592 69.696L45.2982 70.7398C45.0831 70.831 44.8338 70.75 44.7134 70.5498L43.3359 68.2588C43.059 67.7982 42.5439 67.5358 42.0086 67.5824L39.3454 67.8147C39.1127 67.835 38.9006 67.6808 38.848 67.4533L38.2458 64.8487C38.1248 64.3251 37.716 63.9163 37.1925 63.7953L34.5879 63.1932C34.3603 63.1406 34.2062 62.9284 34.2265 62.6958L34.4587 60.0326C34.5054 59.4973 34.2429 58.9821 33.7824 58.7052L31.4913 57.3277C31.2911 57.2074 31.2101 56.958 31.3013 56.743L32.3451 54.2819C32.555 53.7872 32.4645 53.2162 32.1121 52.8105L30.3589 50.7925C30.2057 50.6161 30.2057 50.3539 30.3589 50.1776L32.1121 48.1596C32.4645 47.7539 32.555 47.1829 32.3451 46.6882L31.3013 44.2271C31.2101 44.0121 31.2911 43.7627 31.4913 43.6424L33.7824 42.2649C34.2429 41.988 34.5054 41.4728 34.4587 40.9375L34.2265 38.2743C34.2062 38.0416 34.3603 37.8295 34.5879 37.7769L37.1925 37.1748C37.716 37.0538 38.1248 36.645 38.2458 36.1214L38.848 33.5168C38.9006 33.2892 39.1127 33.1351 39.3454 33.1554L42.0086 33.3876C42.5439 33.4343 43.059 33.1719 43.3359 32.7113L44.7134 30.4203C44.8338 30.2201 45.0831 30.1391 45.2982 30.2303L47.7592 31.2741C48.2539 31.4839 48.825 31.3935 49.2306 31.0411L51.2487 29.2878C51.425 29.1346 51.6872 29.1346 51.8635 29.2878Z" stroke="#028B10" strokeWidth="0.9375"></path>
              </g>
              <g filter="url(#filter3_di_4207_2463)">
                <path d="M43.5928 52.1073L50.404 58.3112L59.5206 42.6582" stroke="white" strokeOpacity="0.87" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
              </g>
              <defs>
                <filter id="filter0_di_4207_2463" x="0.0292969" y="29.7236" width="63.1018" height="42.7618" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dy="7.5"></feOffset>
                  <feGaussianBlur stdDeviation="2.8125"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dx="0.9375" dy="0.9375"></feOffset>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_4207_2463"></feBlend>
                </filter>
                <filter id="filter1_di_4207_2463" x="11.7783" y="3.29968" width="39.6024" height="42.116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dy="7.5"></feOffset>
                  <feGaussianBlur stdDeviation="2.8125"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dx="0.9375" dy="0.9375"></feOffset>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_4207_2463"></feBlend>
                </filter>
                <filter id="filter2_d_4207_2463" x="26.0253" y="28.7042" width="51.0616" height="51.0618" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dy="3.75"></feOffset>
                  <feGaussianBlur stdDeviation="1.875"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                </filter>
                <filter id="filter3_di_4207_2463" x="34.2178" y="40.7829" width="34.6781" height="34.4033" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dy="7.5"></feOffset>
                  <feGaussianBlur stdDeviation="3.75"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dx="0.1875" dy="0.1875"></feOffset>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect2_innerShadow_4207_2463"></feBlend>
                </filter>
                <linearGradient id="paint0_linear_4207_2463" x1="31.5802" y1="36.8647" x2="31.5802" y2="59.3605" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5D00D4"></stop>
                  <stop offset="1" stopColor="#BD2AF0"></stop>
                </linearGradient>
                <radialGradient id="paint1_radial_4207_2463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.2501 11.3179) rotate(51.1466) scale(21.6692 21.1919)">
                  <stop stopColor="#A52AF0"></stop>
                  <stop offset="1" stopColor="#5D00D4"></stop>
                </radialGradient>
                <radialGradient id="paint2_radial_4207_2463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.1997 34.5463) rotate(58.5513) scale(33.5302)">
                  <stop stopColor="#11EA27"></stop>
                  <stop offset="1" stopColor="#018F10"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">All tasks and feedback.</h3>
          <p className="text-muted-foreground max-w-md mb-6">
            Use reviews for feedback and approvals. Paired with tasks, they provide a clear view of outstanding to-dos.
          </p>
            </div>
          </TabsContent>
          
          <TabsContent value="requests" className="mt-4">
            {/* Your requests would go here */}
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="78" height="80" viewBox="0 0 78 80" fill="none" className="w-24 h-24">
                  <g filter="url(#filter0_di_4207_2463)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.5802 29.7236C50.5409 29.7236 57.5061 40.5866 57.5061 49.2711C57.5061 57.9556 37.5135 59.3605 31.5802 59.3605V59.3594C25.6469 59.3594 5.6543 57.9546 5.6543 49.27C5.6543 40.5855 12.6195 29.8242 31.5802 29.8242V29.7236Z" fill="url(#paint0_linear_4207_2463)"></path>
                  </g>
                  <g filter="url(#filter1_di_4207_2463)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M31.5795 3.29968C22.1287 3.29969 17.4033 10.5794 17.4033 16.4542C17.4033 24.6275 23.6607 32.2213 31.5784 32.222C31.5791 32.2456 31.5795 32.2685 31.5795 32.2907C39.4978 32.2907 45.7558 24.6279 45.7558 16.4542C45.7558 10.5794 41.0304 3.29968 31.5795 3.29968Z" fill="url(#paint1_radial_4207_2463)"></path>
                  </g>
                  <g filter="url(#filter2_d_4207_2463)">
                    <path d="M50.9412 28.934C51.2939 28.6276 51.8183 28.6276 52.1709 28.934L54.189 30.6872C54.4594 30.9221 54.8401 30.9824 55.1699 30.8426L57.631 29.7987C58.0611 29.6163 58.5598 29.7784 58.8005 30.1787L60.178 32.4698C60.3626 32.7768 60.706 32.9518 61.0629 32.9207L63.7261 32.6884C64.1915 32.6479 64.6157 32.9561 64.7209 33.4112L65.323 36.0158C65.4037 36.3649 65.6763 36.6374 66.0253 36.7181L68.6299 37.3202C69.085 37.4254 69.3933 37.8497 69.3527 38.3151L69.1205 40.9782C69.0894 41.3351 69.2643 41.6785 69.5713 41.8631L71.8624 43.2406C72.2628 43.4813 72.4248 43.9801 72.2424 44.4101L71.1986 46.8712C71.0587 47.201 71.119 47.5817 71.3539 47.8521L73.1072 49.8702C73.4136 50.2228 73.4136 50.7472 73.1072 51.0999L71.3539 53.118C71.119 53.3884 71.0587 53.7691 71.1986 54.0989L72.2424 56.5599C72.4248 56.99 72.2628 57.4887 71.8624 57.7295L69.5713 59.107C69.2643 59.2916 69.0894 59.635 69.1205 59.9919L69.3527 62.655C69.3933 63.1204 69.085 63.5447 68.6299 63.6499L66.0253 64.252C65.6763 64.3327 65.4037 64.6052 65.323 64.9543L64.7209 67.5588C64.6157 68.014 64.1915 68.3222 63.7261 68.2816L61.0629 68.0494C60.706 68.0183 60.3626 68.1933 60.178 68.5003L58.8005 70.7914C58.5598 71.1917 58.0611 71.3538 57.631 71.1714L55.1699 70.1275C54.8401 69.9877 54.4594 70.0479 54.189 70.2829L52.1709 72.0361C51.8183 72.3425 51.2939 72.3425 50.9412 72.0361L48.9232 70.2829C48.6527 70.0479 48.2721 69.9877 47.9423 70.1275L45.4812 71.1714C45.0511 71.3538 44.5524 71.1917 44.3117 70.7914L42.9342 68.5003C42.7496 68.1933 42.4062 68.0183 42.0493 68.0494L39.3861 68.2816C38.9207 68.3222 38.4965 68.014 38.3913 67.5588L37.7891 64.9543C37.7085 64.6052 37.4359 64.3327 37.0869 64.252L34.4823 63.6499C34.0271 63.5447 33.7189 63.1204 33.7595 62.655L33.9917 59.9919C34.0228 59.635 33.8479 59.2916 33.5408 59.107L31.2498 57.7295C30.8494 57.4887 30.6874 56.99 30.8698 56.5599L31.9136 54.0989C32.0535 53.7691 31.9932 53.3884 31.7582 53.118L30.005 51.0999C29.6986 50.7472 29.6986 50.2228 30.005 49.8702L31.7582 47.8521C31.9932 47.5817 32.0535 47.201 31.9136 46.8712L30.8698 44.4101C30.6874 43.9801 30.8494 43.4813 31.2498 43.2406L33.5408 41.8631C33.8479 41.6785 34.0228 41.3351 33.9917 40.9782L33.7595 38.3151C33.7189 37.8497 34.0271 37.4254 34.4823 37.3202L37.0869 36.7181C37.4359 36.6374 37.7085 36.3649 37.7891 36.0158L38.3913 33.4112C38.4965 32.9561 38.9207 32.6479 39.3861 32.6884L42.0493 32.9207C42.4062 32.9518 42.7496 32.7768 42.9342 32.4698L44.3117 30.1787C44.5524 29.7784 45.0511 29.6163 45.4812 29.7987L47.9423 30.8426C48.2721 30.9824 48.6527 30.9221 48.9232 30.6872L50.9412 28.934Z" fill="url(#paint2_radial_4207_2463)"></path>
                    <path d="M51.8635 29.2878L53.8816 31.0411C54.2872 31.3935 54.8582 31.4839 55.3529 31.2741L57.814 30.2303C58.0291 30.1391 58.2784 30.2201 58.3988 30.4203L59.7763 32.7113C60.0532 33.1719 60.5683 33.4343 61.1036 33.3876L63.7668 33.1554C63.9995 33.1351 64.2116 33.2892 64.2642 33.5168L64.8663 36.1214C64.9874 36.645 65.3962 37.0538 65.9197 37.1748L68.5243 37.7769C68.7519 37.8295 68.906 38.0416 68.8857 38.2743L68.6535 40.9375C68.6068 41.4728 68.8693 41.988 69.3298 42.2649L71.6209 43.6424C71.821 43.7627 71.9021 44.0121 71.8109 44.2271L70.767 46.6882C70.5572 47.1829 70.6477 47.7539 71.0001 48.1596L72.7533 50.1776C72.9065 50.3539 72.9065 50.6161 72.7533 50.7925L71.0001 52.8105C70.6477 53.2162 70.5572 53.7872 70.767 54.2819L71.8109 56.743C71.9021 56.958 71.821 57.2074 71.6209 57.3277L69.3298 58.7052C68.8693 58.9821 68.6068 59.4973 68.6535 60.0326L68.8857 62.6958C68.906 62.9284 68.7519 63.1406 68.5243 63.1932L65.9197 63.7953C65.3962 63.9163 64.9874 64.3251 64.8663 64.8487L64.2642 67.4533C64.2116 67.6808 63.9995 67.835 63.7668 67.8147L61.1036 67.5824C60.5683 67.5358 60.0532 67.7982 59.7763 68.2588L58.3988 70.5498C58.2784 70.75 58.0291 70.831 57.814 70.7398L55.3529 69.696C54.8582 69.4862 54.2872 69.5766 53.8816 69.929L51.8635 71.6823C51.6872 71.8355 51.425 71.8355 51.2487 71.6823L49.2306 69.929C48.825 69.5766 48.2539 69.4862 47.7592 69.696L45.2982 70.7398C45.0831 70.831 44.8338 70.75 44.7134 70.5498L43.3359 68.2588C43.059 67.7982 42.5439 67.5358 42.0086 67.5824L39.3454 67.8147C39.1127 67.835 38.9006 67.6808 38.848 67.4533L38.2458 64.8487C38.1248 64.3251 37.716 63.9163 37.1925 63.7953L34.5879 63.1932C34.3603 63.1406 34.2062 62.9284 34.2265 62.6958L34.4587 60.0326C34.5054 59.4973 34.2429 58.9821 33.7824 58.7052L31.4913 57.3277C31.2911 57.2074 31.2101 56.958 31.3013 56.743L32.3451 54.2819C32.555 53.7872 32.4645 53.2162 32.1121 52.8105L30.3589 50.7925C30.2057 50.6161 30.2057 50.3539 30.3589 50.1776L32.1121 48.1596C32.4645 47.7539 32.555 47.1829 32.3451 46.6882L31.3013 44.2271C31.2101 44.0121 31.2911 43.7627 31.4913 43.6424L33.7824 42.2649C34.2429 41.988 34.5054 41.4728 34.4587 40.9375L34.2265 38.2743C34.2062 38.0416 34.3603 37.8295 34.5879 37.7769L37.1925 37.1748C37.716 37.0538 38.1248 36.645 38.2458 36.1214L38.848 33.5168C38.9006 33.2892 39.1127 33.1351 39.3454 33.1554L42.0086 33.3876C42.5439 33.4343 43.059 33.1719 43.3359 32.7113L44.7134 30.4203C44.8338 30.2201 45.0831 30.1391 45.2982 30.2303L47.7592 31.2741C48.2539 31.4839 48.825 31.3935 49.2306 31.0411L51.2487 29.2878C51.425 29.1346 51.6872 29.1346 51.8635 29.2878Z" stroke="#028B10" strokeWidth="0.9375"></path>
                  </g>
                  <g filter="url(#filter3_di_4207_2463)">
                    <path d="M43.5928 52.1073L50.404 58.3112L59.5206 42.6582" stroke="white" strokeOpacity="0.87" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
                  </g>
                  <defs>
                    <filter id="filter0_di_4207_2463" x="0.0292969" y="29.7236" width="63.1018" height="42.7618" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="7.5"></feOffset>
                      <feGaussianBlur stdDeviation="2.8125"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dx="0.9375" dy="0.9375"></feOffset>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_4207_2463"></feBlend>
                    </filter>
                    <filter id="filter1_di_4207_2463" x="11.7783" y="3.29968" width="39.6024" height="42.116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="7.5"></feOffset>
                      <feGaussianBlur stdDeviation="2.8125"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dx="0.9375" dy="0.9375"></feOffset>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_4207_2463"></feBlend>
                    </filter>
                    <filter id="filter2_d_4207_2463" x="26.0253" y="28.7042" width="51.0616" height="51.0618" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="3.75"></feOffset>
                      <feGaussianBlur stdDeviation="1.875"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                    </filter>
                    <filter id="filter3_di_4207_2463" x="34.2178" y="40.7829" width="34.6781" height="34.4033" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dy="7.5"></feOffset>
                      <feGaussianBlur stdDeviation="3.75"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4207_2463"></feBlend>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4207_2463" result="shape"></feBlend>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                      <feOffset dx="0.1875" dy="0.1875"></feOffset>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"></feColorMatrix>
                      <feBlend mode="normal" in2="shape" result="effect2_innerShadow_4207_2463"></feBlend>
                    </filter>
                    <linearGradient id="paint0_linear_4207_2463" x1="31.5802" y1="36.8647" x2="31.5802" y2="59.3605" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5D00D4"></stop>
                      <stop offset="1" stopColor="#BD2AF0"></stop>
                    </linearGradient>
                    <radialGradient id="paint1_radial_4207_2463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(26.2501 11.3179) rotate(51.1466) scale(21.6692 21.1919)">
                      <stop stopColor="#A52AF0"></stop>
                      <stop offset="1" stopColor="#5D00D4"></stop>
                    </radialGradient>
                    <radialGradient id="paint2_radial_4207_2463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.1997 34.5463) rotate(58.5513) scale(33.5302)">
                      <stop stopColor="#11EA27"></stop>
                      <stop offset="1" stopColor="#018F10"></stop>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">All tasks and feedback.</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Use reviews for feedback and approvals. Paired with tasks, they provide a clear view of outstanding to-dos.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
