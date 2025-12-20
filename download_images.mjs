
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const imageUrls = [
  "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-TITULO2.png",
  "https://pedratallada.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2024-01-03-at-00.05.22-1-qhtpal0qy9xmwbn5i1d3tu2m00jumrcie17fve5my8.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.22-1-768x1024.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.22-1-225x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.22-1-1152x1536.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.22-1.jpeg",
  "https://pedratallada.com/wp-content/uploads/2023/11/IMG-20231019-WA0042-400x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/photo-arche%CC%81ologie-400x300.webp",
  "https://pedratallada.com/wp-content/uploads/2022/02/fort-bernia-768x512.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-10-19-at-15.20.18-768x1024.jpeg",
  "https://pedratallada.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-10-19-at-15.20.18-225x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-10-19-at-15.20.18-1152x1536.jpeg",
  "https://pedratallada.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-10-19-at-15.20.18.jpeg",
  "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-Y-TITULO.png",
  "https://pedratallada.com/wp-content/uploads/2020/01/Logo-Algar-Tours-Altea-Costa-Blanca-favicon-100x100.png",
  "https://pedratallada.com/wp-content/uploads/2024/01/Sin-titulo1.png",
  "https://pedratallada.com/wp-content/uploads/2024/01/Sin-titulo1-271x300.png",
  "https://pedratallada.com/wp-content/uploads/2024/01/Sin-titulo1-768x852.png",
  "https://pedratallada.com/wp-content/uploads/2023/11/IMG-20231019-WA0024-768x1024.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/11/IMG-20231019-WA0024-225x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/11/IMG-20231019-WA0024-1152x1536.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/11/IMG-20231019-WA0024.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/01/IMG_4096-1024x1024.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/IMG_4096.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/IMG_4096-300x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/IMG_4096-768x768.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/IMG_4096-500x500.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.26-1024x768.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.26-300x225.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.26-400x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.26-768x576.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.26-1536x1152.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.26-rotated.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.18-1-1024x768.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.18-1-300x225.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.18-1-400x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.18-1-768x576.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.18-1-1536x1152.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.05.18-1.jpeg",
  "https://pedratallada.com/wp-content/uploads/2023/04/Sin-titulo.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/04/Sin-titulo-300x208.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/04/Sin-titulo-768x531.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/09/Feu-archet-2.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/09/Feu-archet-2-300x200.jpg",
  "https://pedratallada.com/wp-content/uploads/2023/09/Feu-archet-2-768x512.jpg",
  "https://pedratallada.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-08-at-17.30.56-1024x768.jpeg",
  "https://pedratallada.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-08-at-17.30.56-300x225.jpeg",
  "https://pedratallada.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-08-at-17.30.56-400x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-08-at-17.30.56-768x576.jpeg",
  "https://pedratallada.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-08-at-17.30.56-1536x1152.jpeg",
  "https://pedratallada.com/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-08-at-17.30.56.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.25-23-1009x1024.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.25-23-296x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.25-23-768x780.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.25-23-1513x1536.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.25-23.jpeg",
  "https://pedratallada.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-03-at-00.07.25-2.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/10/Vaso-cardial-neolitica-I.png",
  "https://pedratallada.com/wp-content/uploads/2025/10/foto-museos.png",
  "https://pedratallada.com/wp-content/uploads/2021/04/Rutas-arqueologicas-Algartours-Altea.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240624193944-1024x771.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240624193944-300x226.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240624193944-400x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240624193944-768x578.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240624193944-1536x1157.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240624193944-2048x1542.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/logo-ajuntament-daltea-1-300x176-1-1.png",
  "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-TITULO2-2-300x107.png",
  "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-TITULO2-2-1024x364.png",
  "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-TITULO2-2-768x273.png",
  "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-TITULO2-2-1536x547.png",
  "https://pedratallada.com/wp-content/uploads/2020/01/LOGO-TITULO2-2-2048x729.png",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240708115720-771x1024.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240708115720-226x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240708115720-768x1020.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240708115720-1157x1536.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240708115720-1542x2048.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240708115720-scaled.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240712095757-1024x771.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240712095757-300x226.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240712095757-400x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240712095757-768x578.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240712095757-1536x1157.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240712095757-2048x1542.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-12.29.42-1024x771.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-12.29.42-300x226.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-12.29.42-400x300.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-12.29.42-768x578.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-12.29.42-1536x1157.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-12.29.42.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240722114220-1024x771.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240722114220-300x226.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240722114220-400x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240722114220-768x578.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240722114220-1536x1157.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240722114220-2048x1542.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/ceramica-y-tela-de-la-prehistoria-una-experiencia-para-ninos-1024x887-1.gif",
  "https://pedratallada.com/wp-content/uploads/2024/05/campamento-baile-ciudad-real-arco.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/campamento-baile-ciudad-real-arco-300x225.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/campamento-baile-ciudad-real-arco-400x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/campamento-baile-ciudad-real-arco-768x576.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/163455315812437.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/163455315812437-300x225.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/163455315812437-400x300.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/163455315812437-768x576.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/DA_full_logo2018-1-300x91.jpg",
  "https://pedratallada.com/wp-content/uploads/2024/05/DA_full_logo2018-1.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-21-at-12.31.05.jpeg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240712095757-scaled.jpg",
  "https://pedratallada.com/wp-content/uploads/2025/06/IMG20240722114220-scaled.jpg"
];

const targetDir = 'src/assets/images/scraped';

if (!fs.existsSync(targetDir)){
    fs.mkdirSync(targetDir, { recursive: true });
}

const downloadImage = (url, retries = 3) => {
  return new Promise((resolve, reject) => {
    const filename = path.basename(new URL(url).pathname);
    const filepath = path.join(targetDir, filename);

    // Skip if file exists and has size > 0
    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 0) {
        console.log(`Skipping existing: ${filename}`);
        return resolve(true);
    }

    const protocol = url.startsWith('https') ? https : http;
    const request = protocol.get(url, (res) => {
      if (res.statusCode !== 200) {
        if (retries > 0) {
            console.log(`Retrying ${filename} (${retries} left)... Status: ${res.statusCode}`);
            return setTimeout(() => resolve(downloadImage(url, retries - 1)), 1000);
        }
        console.error(`Failed to download ${url}: ${res.statusCode}`);
        return resolve(false);
      }

      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${filename}`);
        resolve(true);
      });

      fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {});
          if (retries > 0) {
            console.log(`Retrying ${filename} (${retries} left)... Error: ${err.message}`);
            return setTimeout(() => resolve(downloadImage(url, retries - 1)), 1000);
          }
          console.error(`Error saving ${filename}:`, err);
          resolve(false); 
      });
    });

    request.on('error', (err) => {
        if (retries > 0) {
            console.log(`Retrying ${filename} (${retries} left)... Error: ${err.message}`);
            return setTimeout(() => resolve(downloadImage(url, retries - 1)), 1000);
        }
        console.error(`Error downloading ${url}:`, err);
        resolve(false);
    });
    
    // Set a timeout for the request itself
    request.setTimeout(10000, () => {
        request.destroy();
        if (retries > 0) {
            console.log(`Retrying ${filename} (${retries} left)... Timeout`);
            return setTimeout(() => resolve(downloadImage(url, retries - 1)), 1000);
        }
        console.error(`Timeout downloading ${url}`);
        resolve(false);
    });
  });
};

const processImages = async () => {
    console.log(`Starting clean sequential download of ${imageUrls.length} images...`);
    let successCount = 0;
    
    for (const url of imageUrls) {
        const success = await downloadImage(url);
        if (success) successCount++;
        // Add a small delay between requests to be gentle
        await new Promise(r => setTimeout(r, 500));
    }
    console.log(`All operations finished. Successfully downloaded: ${successCount}/${imageUrls.length}`);
};

processImages();
