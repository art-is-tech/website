(function(url) {
    var multilang = new MultiLang(url);

    $('.translate').click(function(){
        var lang = $(this).attr('id');
        multilang.setLanguage(lang);

        $('.lang').each(function(index, element){
            var text = multilang.get($(this).attr('key'));
            $(this).text(text);
        });
    });
})('lang/languages.json');