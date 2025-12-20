import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const images = [
    {
      "url": "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-TITULO2.png",
      "filename": "logo-main.png"
    },
    {
      "url": "https://pedratallada.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-01-03-at-00.05.22-1-qhtpal0qy9xmwbn5i1d3tu2m00jumrcie17fve5my8.jpeg",
      "filename": "educacion-banner.jpg" 
    },
    {
      "url": "https://pedratallada.com/wp-content/uploads/2023/11/IMG-20231019-WA0042-400x300.jpg",
      "filename": "museos-banner.jpg"
    },
    {
      "url": "https://pedratallada.com/wp-content/uploads/2024/05/photo-arche%CC%81ologie-400x300.webp",
      "filename": "generic-archaeology.webp"
    },
    {
      "url": "https://pedratallada.com/wp-content/uploads/2022/02/fort-bernia-768x512.jpg",
      "filename": "fort-bernia.jpg"
    },
    {
      "url": "https://pedratallada.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-10-19-at-15.20.18.jpeg",
      "filename": "background-hero.jpg"
    }
];

const DOWNLOAD_DIR = path.join(__dirname, 'src', 'assets', 'images');

// Unsplash Fallback API (Using Source URL directly which redirects to an image)
const FALLBACK_URL = 'https://source.unsplash.com/800x600/?archaeology,excavation,stone';

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(DOWNLOAD_DIR, filename));
        
        const request = https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                   file.close();
                   console.log(`✅ Downloaded: ${filename}`);
                   resolve();
                });
            } else {
                file.close();
                fs.unlink(path.join(DOWNLOAD_DIR, filename), () => {}); // Delete empty file
                console.warn(`⚠️ Failed to download ${url} (Status: ${response.statusCode}). Using fallback...`);
                // Fallback logic
                downloadFallback(filename).then(resolve).catch(reject);
            }
        });

        request.on('error', (err) => {
            fs.unlink(path.join(DOWNLOAD_DIR, filename), () => {});
            console.error(`❌ Error downloading ${url}: ${err.message}. Using fallback...`);
             downloadFallback(filename).then(resolve).catch(reject);
        });
    });
};

const downloadFallback = (filename) => {
     return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(DOWNLOAD_DIR, filename));
        // Redirect logic might be needed for source.unsplash, but usually https.get handles simple ones? 
        // actually https.get follows redirects automatically only if configured? No, standard https.get does NOT follow redirects automatically.
        // Let's use a simpler approach: finding a real Unsplash image ID if possible or implementing a simple redirect follower.
        // For simplicity/robustness, let's use a known placeholder service that doesn't 302 aggressively or handle the 302.
        
        // Actually, let's just try to fetch a static placeholder if the main one fails, 
        // or a specific Unsplash ID.
        // Let's use `images.unsplash.com` with a fixed photo ID for reliability if the original fails.
        const PLACEHOLDER_URL = "https://images.unsplash.com/photo-1599930113854-d6d7fd521f10?w=800&q=80"; // Archaeology stone photo

        https.get(PLACEHOLDER_URL, (res) => {
             if (res.statusCode === 200) {
                res.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`ℹ️ Saved placeholder for: ${filename}`);
                    resolve();
                });
             } else {
                 reject(new Error(`Fallback failed with status ${res.statusCode}`));
             }
        }).on('error', (err) => reject(err));
     });
}


async function run() {
    console.log(`Downloading ${images.length} images to ${DOWNLOAD_DIR}...`);
    let successCount = 0;
    
    for (const img of images) {
        try {
            await downloadImage(img.url, img.filename);
            successCount++;
        } catch (error) {
            console.error(`❌ Complete failure for ${img.filename}:`, error);
        }
    }
    
    console.log(`\n🎉 Processed ${successCount}/${images.length} images.`);
}

run();
