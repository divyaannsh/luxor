/**
 * Lazy loader for offline data to prevent Fast Refresh issues
 * This module loads the large offlineData.js file only when needed
 * Uses dynamic import with webpackIgnore to prevent HMR issues
 */

let offlineDataCache = null;
let loadingPromise = null;

export const loadOfflineData = async () => {
  // Return cached data if already loaded
  if (offlineDataCache) {
    return offlineDataCache;
  }

  // Return existing promise if already loading
  if (loadingPromise) {
    return loadingPromise;
  }

  // Fast timeout to prevent hanging - return immediately
  const timeout = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        offlineData: {},
        getCategories: () => [],
        getGlobalProducts: () => ({}),
        getPens: () => [],
        getPenCategories: () => [],
        getMarkerCategories: () => [],
        getMasterProducts: () => [],
        getCategoryProducts: () => ({}),
        getProductById: () => null,
        getProductsByCategory: () => ({ cat_wise_products: [] }),
      });
    }, 1000); // Reduced to 1 second for faster fallback
  });

  // Load data dynamically with webpackIgnore comment to prevent HMR
  loadingPromise = Promise.race([
    (async () => {
      try {
        // Use webpack magic comment to prevent HMR for this module
        const module = await import(
          /* webpackIgnore: true */
          /* webpackChunkName: "offline-data" */
          './offlineData'
        );
        
        if (!module) {
          throw new Error('Module import returned null');
        }
        
        offlineDataCache = {
          offlineData: module.offlineData || module.default,
          getCategories: module.getCategories || (() => []),
          getGlobalProducts: module.getGlobalProducts || (() => ({})),
          getPens: module.getPens || (() => []),
          getPenCategories: module.getPenCategories || (() => []),
          getMarkerCategories: module.getMarkerCategories || (() => []),
          getMasterProducts: module.getMasterProducts || (() => []),
          getCategoryProducts: module.getCategoryProducts || (() => ({})),
          getProductById: module.getProductById || (() => null),
          getProductsByCategory: module.getProductsByCategory || (() => ({ cat_wise_products: [] })),
        };
        return offlineDataCache;
      } catch (error) {
        console.warn('Failed to load offline data:', error);
        // Return a fallback object with empty functions
        return {
          offlineData: {},
          getCategories: () => [],
          getGlobalProducts: () => ({}),
          getPens: () => [],
          getPenCategories: () => [],
          getMarkerCategories: () => [],
          getMasterProducts: () => [],
          getCategoryProducts: () => ({}),
          getProductById: () => null,
          getProductsByCategory: () => ({ cat_wise_products: [] }),
        };
      }
    })(),
    timeout
  ]);

  return loadingPromise;
};

// Don't preload - load only on demand to prevent initial bundle issues
