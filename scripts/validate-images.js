import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const requiredImages = [
  'hero_logo_with_tagline.png',
  'hero_device_render.png',
  'problem_infographic.png',
  'solution_icons.png',
  'product_metrics_stats.png',
  'tech_stack_diagram.png',
  'market_chart.png',
  'competitive_table.png',
  'partner_wlb_logo.png',
  'business_model_diagram.png',
  'team_mohammed_abdo.png',
  'team_ahmed_yasser.png',
  'milestones_timeline.png',
  'contact_card.png',
];

const imagesDir = path.join(__dirname, '..', 'public', 'images');

console.log('🔍 Validating required images...\n');

// Check if images directory exists
if (!fs.existsSync(imagesDir)) {
  console.log('❌ Images directory does not exist: public/images/');
  console.log('📁 Creating images directory...\n');
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Check for each required image
const missing = [];
const found = [];

requiredImages.forEach((image) => {
  const imagePath = path.join(imagesDir, image);
  if (fs.existsSync(imagePath)) {
    found.push(image);
    console.log(`✅ ${image}`);
  } else {
    missing.push(image);
    console.log(`❌ ${image}`);
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Found: ${found.length}/${requiredImages.length}`);
console.log(`   Missing: ${missing.length}/${requiredImages.length}`);

if (missing.length > 0) {
  console.log(`\n⚠️  Missing images:`);
  missing.forEach((image) => {
    console.log(`   - ${image}`);
  });
  console.log(`\n📝 Please add these images to: public/images/`);
  console.log(`   See README.md for descriptions and alt text.`);
  process.exit(1);
} else {
  console.log(`\n🎉 All required images are present!`);
  process.exit(0);
}
