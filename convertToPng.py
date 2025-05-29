import cv2
import numpy as np

def remove_white_background(image_path, output_path):
    # Load image
    image = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)
    
    # Convert to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    # Create mask: White areas (background) will be removed
    _, mask = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)
    
    # Make the font stronger by dilating the mask
    kernel = np.ones((3,3), np.uint8)
    mask = cv2.dilate(mask, kernel, iterations=2)
    
    # Create an output image with transparency
    result = cv2.cvtColor(image, cv2.COLOR_BGR2BGRA)
    result[:, :, 3] = mask  # Assign mask to alpha channel
    
    # Save the new image as PNG
    cv2.imwrite(output_path, result)
    
# Input and output paths
image_path = "logo.jpg"  # Change this to the actual image path
output_path = "output.png"

# Run the function
remove_white_background(image_path, output_path)

print(f"Saved transparent image to {output_path}")