import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Recent</h1>
      </div>

      <div className="files-container">
        {/* Filter Controls */}
        <div className="flex items-center justify-between mb-6">
          {/* Segmented Control */}
          <div className="bg-muted rounded-lg p-1 flex space-x-1">
            <button
              className="flex items-center space-x-1 rounded-md bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm"
              type="button"
              aria-pressed="true"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.42857V3M10 18V14.5714M14.0714 10.5H17.5M2.5 10.5H5.92857M12.8792 7.62121L15.3036 5.19685M4.69617 15.8034L7.12054 13.379M12.8792 13.3788L15.3036 15.8032M4.69617 5.19659L7.12054 7.62095"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>All</span>
            </button>

            <button
              className="flex items-center space-x-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00086 7.0139L2.00078 14.6175C2.00077 15.7221 2.8962 16.6175 4.00078 16.6175L15.9997 16.6175C17.1043 16.6176 17.9997 15.7222 17.9997 14.6176L18 6.84372C18 6.29142 17.5523 5.84369 17 5.84369H10.0697L7.76555 3.38232H3.00038C2.44794 3.38232 2.00017 3.82964 2.00034 4.38207C2.00058 5.16753 2.00086 6.2523 2.00086 7.0139Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Projects</span>
            </button>

            <button
              className="flex items-center space-x-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00007 6.5H13.0001M7.00007 9.5H13.0001M7.00007 12.5H10.0001M5.49983 2.5H14.5C15.6046 2.5 16.5 3.39545 16.5 4.50004L16.4998 16.5C16.4998 17.6046 15.6043 18.5 14.4998 18.5L5.49975 18.5C4.39518 18.5 3.49975 17.6045 3.49976 16.4999L3.49983 4.49999C3.49984 3.39542 4.39527 2.5 5.49983 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Docs</span>
            </button>

            <button
              className="flex items-center space-x-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0002 5.5V5.52769M5.02769 10.5002H5M13.5358 6.96462L13.5162 6.9842M6.48431 14.0161L6.46473 14.0357M6.48431 6.98389L6.46473 6.96431M10 18.5C5.58172 18.5 2 14.9183 2 10.5C2 6.08172 5.58172 2.5 10 2.5C14.4183 2.5 18 6.08172 18 10.5C18 11.845 16.7572 12.74 15.4121 12.74H14.89C14.6204 12.74 14.3545 12.8028 14.1133 12.9233C13.2554 13.3523 12.9077 14.3954 13.3367 15.2533C13.4572 15.4945 13.52 15.7604 13.52 16.03V16.1876C13.52 17.1048 13.0053 17.9733 12.1208 18.2158C11.4454 18.4011 10.7342 18.5 10 18.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Designs</span>
            </button>

            <button
              className="flex items-center space-x-1 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3545 17.1579L13.3548 14.4798C13.3549 13.0005 12.1557 11.8012 10.6764 11.8012H4.67868C3.19957 11.8012 2.00047 13.0001 2.0003 14.4792L2 17.1579M17.9998 17.1581L18 14.4799C18.0001 13.0006 16.8009 11.8013 15.3216 11.8013M12.8386 3.3994C13.4964 3.88743 13.9226 4.66981 13.9226 5.55176C13.9226 6.4337 13.4964 7.21608 12.8386 7.70411M10.4115 5.55161C10.4115 7.03084 9.21235 8.22999 7.73312 8.22999C6.25389 8.22999 5.05474 7.03084 5.05474 5.55161C5.05474 4.07238 6.25389 2.87323 7.73312 2.87323C9.21235 2.87323 10.4115 4.07238 10.4115 5.55161Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Shared with me</span>
            </button>
          </div>

          {/* View Toggle Button */}
          <Button variant="outline" size="lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 2.5C16.7538 2.5 17.5 3.23597 17.5 4.14383L17.5 6.94994C17.5 7.8578 16.7538 8.59377 15.8333 8.59377H13.3333C12.4129 8.59377 11.6667 7.8578 11.6667 6.94994L11.6667 4.14383C11.6667 3.23597 12.4129 2.5 13.3333 2.5L15.8333 2.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16667 2.5C3.24619 2.5 2.5 3.23597 2.5 4.14383L2.50001 6.94994C2.50001 7.8578 3.2462 8.59377 4.16667 8.59377H6.66667C7.58715 8.59377 8.33334 7.8578 8.33334 6.94994L8.33333 4.14383C8.33333 3.23597 7.58714 2.5 6.66667 2.5L4.16667 2.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.8333 11.4063C16.7538 11.4063 17.5 12.1422 17.5 13.0501V15.8562C17.5 16.764 16.7538 17.5 15.8333 17.5H13.3333C12.4129 17.5 11.6667 16.764 11.6667 15.8562L11.6667 13.0501C11.6667 12.1422 12.4129 11.4063 13.3333 11.4063H15.8333Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.16667 11.4063C3.2462 11.4063 2.50001 12.1422 2.50001 13.0501L2.50001 15.8562C2.50001 16.764 3.2462 17.5 4.16668 17.5H6.66667C7.58715 17.5 8.33334 16.764 8.33334 15.8562L8.33334 13.0501C8.33334 12.1422 7.58715 11.4063 6.66667 11.4063H4.16667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Grid View
            <svg
              className="ml-1"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 8.687L10.0006 11.893L13.5 8.687"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Content Items */}
          {[
            {
              title: "Landing Page - Sustainable Fashion Insights",
              type: "docs",
              image: "https://example.com/image1.jpg",
            },
            {
              title: "Sustainable Fashion Trends",
              type: "docs",
              image: "https://example.com/image2.jpg",
            },
            {
              title: "Fashion Expression",
              type: "docs",
              image: "https://example.com/image3.jpg",
            },
            {
              title: "Saas",
              type: "docs",
              image: "https://example.com/image4.jpg",
            },
            {
              title: "Supportive Growth",
              type: "designs",
              image: "https://example.com/image5.jpg",
            },
            {
              title: "Balanced Lifestyle",
              type: "designs",
              image: "https://example.com/image6.jpg",
            },
            {
              title: "Boost Productivity",
              type: "designs",
              image: "https://example.com/image7.jpg",
            },
            {
              title: "Google Ad Copy - Fall Fashion Ideas",
              type: "docs",
              image: "https://example.com/image8.jpg",
            },
          ].map((item, index) => (
            <div key={index} className="bg-card border rounded-lg overflow-hidden">
              <div className="h-40 bg-muted flex items-center justify-center">
                {/* Placeholder for image */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-medium truncate">{item.title}</h3>
                <Badge variant="secondary" className="mt-2">
                  {item.type}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
