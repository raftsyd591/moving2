/**
 * Script para copiar las imágenes de los artículos del blog a las ubicaciones correctas
 * Este script asegura que las imágenes estén disponibles en las rutas esperadas
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual del módulo ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista de artículos con problemas de imágenes
const articlesWithImageIssues = [
  'moving-within-riyadh-guide',
  'top-riyadh-neighborhoods-families-singles-guide',
  'riyadh-storage-solutions-cost-options-benefits',
  'best-furniture-packing-methods-protection-moving',
  'disassembly-assembly-bedrooms-kitchens-services',
  'long-term-furniture-storage-guide-protection',
  'comprehensive-moving-checklist-before-during-after',
  'moving-furniture-riyadh-jeddah-steps-costs-tips'
];

// Directorio raíz del proyecto
const rootDir = path.resolve(__dirname, '..');
const publicImagesDir = path.join(rootDir, 'public', 'images');
const blogImagesDir = path.join(publicImagesDir, 'blog');

// Asegurarse de que los directorios existan
if (!fs.existsSync(blogImagesDir)) {
  console.log(`Creando directorio: ${blogImagesDir}`);
  fs.mkdirSync(blogImagesDir, { recursive: true });
}

// Función para copiar una imagen si existe
function copyImageIfExists(sourcePath, targetPath) {
  if (fs.existsSync(sourcePath)) {
    try {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Imagen copiada: ${targetPath}`);
      return true;
    } catch (error) {
      console.error(`Error al copiar ${sourcePath} a ${targetPath}:`, error);
      return false;
    }
  }
  return false;
}

// Procesar cada artículo con problemas
articlesWithImageIssues.forEach(slug => {
  const slugWithUnderscores = slug.replace(/-/g, '_');
  
  // Nombres de archivo posibles
  const possibleFileNames = [
    `${slugWithUnderscores}.jpeg`,
    `${slugWithUnderscores}.jpg`,
    `${slug}.jpeg`,
    `${slug}.jpg`
  ];
  
  // Buscar y copiar las imágenes
  let imageFound = false;
  
  possibleFileNames.forEach(fileName => {
    // Verificar si la imagen ya existe en el destino
    const targetPath = path.join(blogImagesDir, fileName);
    if (fs.existsSync(targetPath)) {
      console.log(`La imagen ya existe: ${targetPath}`);
      imageFound = true;
      return;
    }
    
    // Buscar en diferentes ubicaciones
    const possibleSources = [
      path.join(publicImagesDir, fileName),
      path.join(rootDir, 'images', 'blog', fileName),
      path.join(rootDir, 'src', 'assets', 'images', fileName),
      path.join(rootDir, 'src', 'images', fileName)
    ];
    
    for (const sourcePath of possibleSources) {
      if (copyImageIfExists(sourcePath, targetPath)) {
        imageFound = true;
        break;
      }
    }
  });
  
  if (!imageFound) {
    // Si no se encuentra ninguna imagen, crear una copia del default-blog-post.jpg
    const defaultSource = path.join(blogImagesDir, 'default-blog-post.jpg');
    const defaultTarget = path.join(blogImagesDir, `${slugWithUnderscores}.jpeg`);
    
    if (fs.existsSync(defaultSource)) {
      copyImageIfExists(defaultSource, defaultTarget);
      console.log(`Imagen predeterminada copiada para: ${slug}`);
    } else {
      console.error(`No se encontró ninguna imagen para: ${slug} y la imagen predeterminada no existe`);
    }
  }
});

console.log('Proceso de corrección de imágenes completado.'); 