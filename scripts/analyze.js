#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔍 Analyzing bundle performance...\n');

try {
    // Run bundle analysis
    console.log('📊 Running bundle analyzer...');
    execSync('npm run analyze', { stdio: 'inherit' });
    
    console.log('\n✅ Bundle analysis complete!');
    console.log('📁 Check the generated reports in your browser');
    console.log('💡 Look for large packages and consider:');
    console.log('   - Tree shaking unused code');
    console.log('   - Dynamic imports for non-critical features');
    console.log('   - Code splitting for better caching');
    console.log('   - Removing unused dependencies');
    
} catch (error) {
    console.error('❌ Bundle analysis failed:', error.message);
    process.exit(1);
}
