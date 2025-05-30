"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Uploads</h1>
        
        <div className="flex gap-2">
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
            Grid
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
          
          <Button onClick={handleUploadClick}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2357 14.3751H14.375C16.3084 14.3751 17.6563 12.9838 17.6563 11.25C17.6563 9.84758 16.7661 8.4856 15.4516 8.16777C15.4067 7.01874 14.8967 6.1607 14.1926 5.70813C13.5021 5.26425 12.6494 5.21033 11.8969 5.54942C11.2936 4.38376 10.1044 3.43774 8.54145 3.43774C6.21651 3.43774 4.5779 5.61334 4.69639 7.83225C3.34714 8.19246 2.34375 9.50049 2.34375 11.0548C2.34375 12.8863 3.73334 14.3751 5.44268 14.3751H6.71875"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10 8.90649V16.5627M10 8.90649L7.26562 11.6409M10 8.90649L12.7344 11.6409"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Upload
          </Button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            multiple 
            accept="image/png,image/jpeg,image/svg+xml,image/webp,video/mp4,video/mpeg,video/webm,video/quicktime"
          />
        </div>
      </div>

      {/* Content Area */}
      {files.length === 0 ? (
        <div 
          className={`flex flex-col items-center justify-center h-[calc(100vh-200px)] border-2 border-dashed rounded-lg p-12 transition-colors ${isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/20'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center text-center max-w-md mb-6">
            {/* Stylized File Illustration */}
            <div className="mb-6">
              <svg width="162" height="120" viewBox="0 0 162 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto">
                <path d="M81 50.7866C81 44.5792 85.9249 39.5732 92.1323 39.5732H133.336C139.543 39.5732 144.549 44.5792 144.549 50.7866V91.9898C144.549 98.1973 139.543 103.203 133.336 103.203H92.1323C85.9249 103.203 81 98.1973 81 91.9898V50.7866Z" fill="#EAEAEA" />
                <path d="M17.5493 17C17.5493 10.7926 22.5553 5.78662 28.7627 5.78662H69.9659C76.1734 5.78662 81.1794 10.7926 81.1794 17V58.2032C81.1794 64.4106 76.1734 69.4166 69.9659 69.4166H28.7627C22.5553 69.4166 17.5493 64.4106 17.5493 58.2032V17Z" fill="#F5F5F5" />
                <path d="M112.72 56.8134L108.279 72.6639L87.6387 66.6376L112.72 56.8134Z" fill="#58AFFE" />
                <path d="M87.6387 66.6376L92.0791 50.787L112.72 56.8134L87.6387 66.6376Z" fill="#47FF65" />
                <path d="M47.4196 17.5671L42.9791 33.4175L22.3384 27.3912L47.4196 17.5671Z" fill="#FFC658" />
                <path d="M22.3384 27.3912L26.7789 11.5407L47.4196 17.5671L22.3384 27.3912Z" fill="#FF6D00" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold mb-2">Drop your files here</h2>
            <p className="text-muted-foreground mb-6">And let's get working on your project!</p>

            <Button onClick={handleUploadClick} className="mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M13.2357 14.3748H14.375C16.3084 14.3748 17.6563 12.9836 17.6563 11.2498C17.6563 9.84734 16.7661 8.48536 15.4516 8.16752C15.4067 7.0185 14.8967 6.16045 14.1926 5.70789C13.5021 5.26401 12.6494 5.21009 11.8969 5.54917C11.2936 4.38351 10.1044 3.4375 8.54145 3.4375C6.21651 3.4375 4.5779 5.61309 4.69639 7.83201C3.34714 8.19222 2.34375 9.50024 2.34375 11.0546C2.34375 12.886 3.73334 14.3748 5.44268 14.3748H6.71875"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 8.90625V16.5625M10 8.90625L7.26562 11.6406M10 8.90625L12.7344 11.6406"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Choose Files
            </Button>

            <p className="text-xs text-muted-foreground">Blaze supports uploading images and videos</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {files.map((file, index) => (
            <div key={index} className="bg-card border rounded-lg overflow-hidden">
              <div className="h-40 bg-muted flex items-center justify-center relative">
                {file.type.startsWith('image/') ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span className="mt-2 text-xs text-center">{file.type}</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium truncate">{file.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <Badge variant="secondary">
                    {(file.size / 1024).toFixed(1)} KB
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {file.type.split('/')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
