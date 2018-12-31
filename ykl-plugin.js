// declaring a namespace for the plugin
var YKL = YKL || {};

YKL = {
    notice: {
      'fi': 'HUOM!',
      'sv': 'OBS!',
      'en': 'NB:'
    },
    warning: {
        'fi': ['YKL on siirtymässä fintoon. Ruotsinkielinen ja englanninkielinen versio julkaistaan tammikuun aikana.']
    },
    renderWarning: function(params) {q
        $('.content').prepend(Handlebars.compile($('#ykl-template').html())({
            'warning': this.warning[lang][0], 
        }));
    },
};

$(function() {
    window.yklWarning = function(params) {
        if (params.page === 'page' &&  && vocab == 'ykl' && (params.uri  || $('#vocab-info').length)) {
            YKL.renderWarning(params);
        }
    };
});

