import os
import sys
import argparse
import re
from PIL import Image

# Supported image extensions (lowercase)
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".gif", ".webp"}

def convert_to_webp(input_path, output_path, quality=85):
    """Convert an image to WebP format"""
    try:
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary (WebP doesn't support RGBA well)
            if img.mode in ('RGBA', 'LA'):
                # Create a white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'RGBA':
                    background.paste(img, mask=img.split()[-1])  # Use alpha channel as mask
                else:
                    background.paste(img)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            img.save(output_path, 'WebP', quality=quality, optimize=True)
            return True
    except Exception as e:
        print(f"Error converting {input_path} to WebP: {e}")
        return False

def count_images_in_directory(dir_path):
    """Count the number of image files in a directory"""
    images = [f for f in os.listdir(dir_path)
              if os.path.splitext(f)[1].lower() in IMAGE_EXTS]
    return len(images)

def update_gallery_file(gallery_file_path, dry_run=False):
    """Update the totalImages field in the gallery page.js file"""
    if not os.path.exists(gallery_file_path):
        print(f"Warning: Gallery file not found at {gallery_file_path}")
        return
    
    try:
        with open(gallery_file_path, 'r') as f:
            content = f.read()
        
        # Find all imageDir patterns and update corresponding totalImages
        pattern = r'imageDir:\s*["\']([^"\']+)["\'],\s*mainImage:\s*["\'][^"\']+["\'],\s*totalImages:\s*(\d+)'
        
        def replace_total_images(match):
            image_dir = match.group(1)
            current_total = int(match.group(2))
            
            # Convert imageDir to actual directory path
            actual_dir = image_dir.replace('/projects/', 'public/projects/')
            
            if os.path.exists(actual_dir):
                actual_count = count_images_in_directory(actual_dir)
                if actual_count != current_total:
                    print(f"Updating {image_dir}: {current_total} -> {actual_count} images")
                    return match.group(0).replace(f'totalImages: {current_total}', f'totalImages: {actual_count}')
                else:
                    print(f"No change needed for {image_dir}: {actual_count} images")
            
            return match.group(0)
        
        updated_content = re.sub(pattern, replace_total_images, content)
        
        if updated_content != content:
            if dry_run:
                print("DRY RUN: Would update gallery file")
            else:
                with open(gallery_file_path, 'w') as f:
                    f.write(updated_content)
                print("Updated gallery file")
        else:
            print("No updates needed in gallery file")
            
    except Exception as e:
        print(f"Error updating gallery file: {e}")

def rename_images_in_directory(dir_path, dry_run=False, webp_quality=85, preserve_names=False):
    # Get all image files in this directory (not recursive)
    images = [f for f in os.listdir(dir_path)
              if os.path.splitext(f)[1].lower() in IMAGE_EXTS]

    # Sort alphabetically (or by modification time if you prefer)
    images.sort()

    # Check if all images are already WebP
    webp_images = [f for f in images if f.lower().endswith('.webp')]
    if len(webp_images) == len(images) and len(images) > 0:
        print(f"Skipping {dir_path}: All images are already WebP")
        return

    for filename in images:
        old_path = os.path.join(dir_path, filename)
        
        if preserve_names:
            # Keep original filename, just change extension to .webp
            name_without_ext = os.path.splitext(filename)[0]
            new_filename = f"{name_without_ext}.webp"
        else:
            # Use sequential numbering
            index = images.index(filename) + 1
            new_filename = f"{index}.webp"
        
        new_path = os.path.join(dir_path, new_filename)

        # Skip if already correct
        if filename == new_filename:
            continue

        if dry_run:
            print(f"Would convert and rename: {old_path} -> {new_path}")
        else:
            # If target name already exists, remove it first to avoid collision
            if os.path.exists(new_path):
                os.remove(new_path)

            # Convert to WebP
            if convert_to_webp(old_path, new_path, webp_quality):
                # Remove original file after successful conversion
                os.remove(old_path)
                print(f"Converted and renamed: {old_path} -> {new_path}")
            else:
                print(f"Failed to convert: {old_path}")

def main():
    # Set up command line argument parsing
    parser = argparse.ArgumentParser(description='Process images: rename to sequential numbers, convert to WebP, and optionally update gallery file')
    parser.add_argument('root_dir', help='Root directory to process (e.g., public/projects)')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be done without actually doing it')
    parser.add_argument('--quality', type=int, default=85, help='WebP quality (1-100, default: 85)')
    parser.add_argument('--preserve-names', action='store_true', help='Keep original filenames and only change extension to .webp')
    parser.add_argument('--update-gallery', action='store_true', help='Update totalImages field in gallery page.js file')
    parser.add_argument('--gallery-file', default='src/app/gallery/page.js', help='Path to gallery file (default: src/app/gallery/page.js)')
    
    args = parser.parse_args()
    
    # Validate quality parameter
    if not (1 <= args.quality <= 100):
        print("Error: Quality must be between 1 and 100")
        sys.exit(1)
    
    # Check if the root directory exists
    if not os.path.exists(args.root_dir):
        print(f"Error: Directory '{args.root_dir}' does not exist.")
        sys.exit(1)
    
    if not os.path.isdir(args.root_dir):
        print(f"Error: '{args.root_dir}' is not a directory.")
        sys.exit(1)
    
    print(f"Processing directory: {args.root_dir}")
    if args.dry_run:
        print("DRY RUN MODE - No files will be modified")
    print(f"WebP conversion enabled with quality: {args.quality}")
    if args.preserve_names:
        print("Preserving original filenames (only changing extension)")
    else:
        print("Using sequential numbering (1.webp, 2.webp, etc.)")
    if args.update_gallery:
        print(f"Gallery file update enabled: {args.gallery_file}")
    
    # Update gallery file first if requested
    if args.update_gallery:
        update_gallery_file(args.gallery_file, args.dry_run)
        print()  # Add spacing
    
    # Process all subdirectories
    for subdir, dirs, files in os.walk(args.root_dir):
        rename_images_in_directory(subdir, args.dry_run, args.quality, args.preserve_names)

if __name__ == "__main__":
    main()