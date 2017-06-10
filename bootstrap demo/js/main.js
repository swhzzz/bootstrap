requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery-min',
        gotop: 'com/gotop',
        carousel: 'com/carousel',
        lazyload: 'com/lazyload'
    }
})

require(['jquery', 'gotop','carousel','lazyload'], function ($, goTop,createCarousel,createLazyLoad) {
    new goTop('wrap', 'gotop');
    createCarousel.init($('.carousel-wrap'));
    createLazyLoad.init($('.news-ct'),$('.btn-loadmore'))
})