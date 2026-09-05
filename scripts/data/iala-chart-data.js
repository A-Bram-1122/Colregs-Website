(function () {
    'use strict';

    const CHART_IMAGE_BASE_PATH = 'reference/Photos/IALA';

    const CHART_IMAGES = Object.freeze([
        { file: 'A region.jpeg', region: 'a' },
        { file: 'B region.jpeg', region: 'b' },
        { file: 'chart-region-a-02.jpeg', region: 'a', basePath: 'reference/Photos/Bouys' },
        { file: 'chart-region-a-03.jpeg', region: 'a', basePath: 'reference/Photos/Bouys' },
        { file: 'chart-region-b-02.jpeg', region: 'b', basePath: 'reference/Photos/Bouys' },
        { file: 'chart-region-b-03.jpeg', region: 'b', basePath: 'reference/Photos/Bouys' }
    ]);

    if (typeof window !== 'undefined') {
        window.CHART_IMAGE_BASE_PATH = CHART_IMAGE_BASE_PATH;
        window.CHART_IMAGES = CHART_IMAGES;
    }
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            CHART_IMAGE_BASE_PATH,
            CHART_IMAGES
        };
    }
})();
