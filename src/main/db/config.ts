import { app } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

/**
 * Get the database directory path based on the environment
 * Development: project_root/.screensage/
 * Production: ~/.screensage/
 */
export function getDatabasePath(): string {
  const isDev = !app.isPackaged;
  
  let dbDir: string;
  
  if (isDev) {
    // In development, use .screensage/ in the project root
    dbDir = path.join(process.cwd(), '.screensage');
  } else {
    // In production, use ~/.screensage/
    dbDir = path.join(app.getPath('home'), '.screensage');
  }
  
  // Ensure the directory exists
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }
  
  return path.join(dbDir, 'database.db');
}