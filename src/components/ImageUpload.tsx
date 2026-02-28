"use client";

import { useState, useCallback } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";

interface UploadedFile {
  filename: string;
  originalName: string;
  size: number;
  type: string;
  url: string;
}

interface ImageUploadProps {
  onImagesUploaded: (files: UploadedFile[]) => void;
  maxImages?: number;
  maxSize?: number; // in MB
  className?: string;
}

export default function ImageUpload({ 
  onImagesUploaded, 
  maxImages = 10, 
  maxSize = 5,
  className = "" 
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedFile[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      handleFiles(files);
    }
  }, []);

  const handleFiles = async (files: File[]) => {
    setError(null);
    
    // Validate number of files
    if (uploadedImages.length + files.length > maxImages) {
      setError(`Maximum ${maxImages} images allowed`);
      return;
    }

    // Validate file types and sizes
    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        setError(`${file.name} is not an image file`);
        return;
      }
      if (file.size > maxSize * 1024 * 1024) {
        setError(`${file.name} is too large. Maximum size is ${maxSize}MB`);
        return;
      }
    }

    // Upload files
    setUploading(true);
    try {
      const formData = new FormData();
      files.forEach(file => {
        formData.append('images', file);
      });

      const response = await fetch('/api/upload-images', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      const newImages = data.files;
      const allImages = [...uploadedImages, ...newImages];
      
      setUploadedImages(allImages);
      onImagesUploaded(allImages);
    } catch (err) {
      console.error('Upload error:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload images');
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    onImagesUploaded(newImages);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          isDragging
            ? 'border-cyan-500 bg-cyan-500/5'
            : 'border-gray-700 hover:border-gray-600'
        } ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center space-y-2">
            {uploading ? (
              <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            ) : (
              <Upload className="w-12 h-12 text-gray-500" />
            )}
            <div className="text-gray-400">
              {uploading ? (
                <p>Uploading...</p>
              ) : (
                <>
                  <p className="text-lg font-medium">Drop images here</p>
                  <p className="text-sm">or click to browse</p>
                  <p className="text-xs mt-2">
                    PNG, JPG, GIF up to {maxSize}MB each (max {maxImages} images)
                  </p>
                </>
              )}
            </div>
          </div>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Uploaded Images */}
      {uploadedImages.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-300">
              Uploaded Images ({uploadedImages.length})
            </h4>
            <button
              onClick={() => {
                setUploadedImages([]);
                onImagesUploaded([]);
              }}
              className="text-xs text-red-400 hover:text-red-300 transition"
            >
              Clear All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                  <img
                    src={image.url}
                    alt={image.originalName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={12} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-xs text-white p-1 truncate">
                  {image.originalName}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
